package org.nem.ncc.controller;

import org.nem.core.connect.HttpJsonPostRequest;
import org.nem.core.connect.client.NisApiId;
import org.nem.core.crypto.Signer;
import org.nem.core.model.*;
import org.nem.core.model.ncc.*;
import org.nem.core.serialization.BinarySerializer;
import org.nem.ncc.connector.PrimaryNisConnector;
import org.nem.ncc.controller.requests.*;
import org.nem.ncc.controller.viewmodels.*;
import org.nem.ncc.exceptions.NisException;
import org.nem.ncc.services.TransactionMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Handles requests related to the REST resource "wallet/account/transaction".
 */
@RestController
public class TransactionController {
	private final TransactionMapper transactionMapper;
	private final PrimaryNisConnector nisConnector;

	/**
	 * Creates a new transaction controller.
	 *
	 * @param transactionMapper The transaction mapper.
	 * @param nisConnector The NIS connector.
	 */
	@Autowired(required = true)
	public TransactionController(
			final TransactionMapper transactionMapper,
			final PrimaryNisConnector nisConnector) {
		this.transactionMapper = transactionMapper;
		this.nisConnector = nisConnector;
	}

	/**
	 * Sends a new transaction (i.e., sending NEM, messages, assets).
	 *
	 * @param transferRequest The transaction information.
	 */
	@RequestMapping(value = "/wallet/account/transaction/send", method = RequestMethod.POST)
	public void sendTransaction(@RequestBody final TransferSendRequest transferRequest) {
		final Transaction transaction = this.transactionMapper.toModel(transferRequest);
		this.announceTransaction(transaction);
	}

	/**
	 * Sends a new multisig signature
	 *
	 * @param multisigSignatureRequest The multisig signature transaction information.
	 */
	@RequestMapping(value = "/wallet/account/signature/send", method = RequestMethod.POST)
	public void sendSignature(@RequestBody final MultisigSignatureRequest multisigSignatureRequest) {
		final Transaction transaction = this.transactionMapper.toModel(multisigSignatureRequest);
		this.announceTransaction(transaction);
	}

	/**
	 * Sends a new multisig modification
	 *
	 * @param multisigModification The multisig account modification transaction information.
	 */
	@RequestMapping(value = "/wallet/account/modification/send", method = RequestMethod.POST)
	public void sendModification(@RequestBody final MultisigModificationRequest multisigModification) {
		final Transaction transaction = this.transactionMapper.toModel(multisigModification);
		this.announceTransaction(transaction);
	}

	/**
	 * Requests inspecting the transaction for validation purposes. The returned result will include:
	 * - The minimum fee for sending the transaction.
	 * - A value indicating whether or not the recipient can receive encrypted messages.
	 *
	 * @param request The transaction information.
	 * @return The validation information.
	 */
	@RequestMapping(value = "/wallet/account/transaction/validate", method = RequestMethod.POST)
	public PartialTransferInformationViewModel validateTransferData(@RequestBody final PartialTransferInformationRequest request) {
		// TODO 20141005 J-G: should we update this function / add a new function that is able to validate importance transfer transactions?
		return this.transactionMapper.toViewModel(request);
	}

	// TODO 20150131 J-G: do we need a validate for importance transfer transactions too?
	// TODO 20150131 J-G: why don't we want to try consolidating into a single transaction/send transaction/validate?

	/**
	 * Request inspecting the multisig signature transaction for validation purposes. The returned result will include:
	 * - A minimum fee for creating the transaction.
	 *
	 * @param request The transaction information.
	 * @return The validation information.
	 */
	@RequestMapping(value = "/wallet/account/signature/validate", method = RequestMethod.POST)
	public PartialFeeInformationViewModel validateSignatureData(@RequestBody final PartialSignatureInformationRequest request) {
		return this.transactionMapper.toViewModel(request);
	}

	/**
	 * Request inspecting the multisig modification transaction for validation purposes. The returned result will include:
	 * - A minimum fee for creating modification transaction.
	 *
	 * @param request The transaction information.
	 * @return The validation information.
	 */
	@RequestMapping(value = "/wallet/account/modification/validate", method = RequestMethod.POST)
	public PartialFeeInformationViewModel validateModificationData(@RequestBody final PartialModificationInformationRequest request) {
		return this.transactionMapper.toViewModel(request);
	}

	/**
	 * Announces address for secure remote harvesting.
	 *
	 * @param request The request parameters.
	 */
	@RequestMapping(value = "/wallet/account/remote/activate", method = RequestMethod.POST)
	public void remoteUnlock(@RequestBody final TransferImportanceRequest request) {
		this.remoteHarvest(request, ImportanceTransferMode.Activate);
	}

	/**
	 * Announces deactivation of address for secure remote harvesting.
	 *
	 * @param request The request parameters.
	 */
	@RequestMapping(value = "/wallet/account/remote/deactivate", method = RequestMethod.POST)
	public void remoteLock(@RequestBody final TransferImportanceRequest request) {
		this.remoteHarvest(request, ImportanceTransferMode.Deactivate);
	}

	private void remoteHarvest(final TransferImportanceRequest request, final ImportanceTransferMode mode) {
		final Transaction transaction = this.transactionMapper.toModel(request, mode);
		this.announceTransaction(transaction);
	}

	private void announceTransaction(final Transaction transaction) {
		// prepare transaction
		final byte[] transferBytes = BinarySerializer.serializeToBytes(transaction.asNonVerifiable());
		final RequestPrepare preparedTransaction = new RequestPrepare(transferBytes);

		// sign transaction and send to nis
		final Signer signer = transaction.getSigner().createSigner();
		final RequestAnnounce announce = new RequestAnnounce(
				preparedTransaction.getData(),
				signer.sign(preparedTransaction.getData()).getBytes());
		final NemRequestResult result = new NemRequestResult(this.nisConnector.post(
				NisApiId.NIS_REST_TRANSACTION_ANNOUNCE,
				new HttpJsonPostRequest(announce)));
		if (result.isError()) {
			throw new NisException(result);
		}
	}
}
