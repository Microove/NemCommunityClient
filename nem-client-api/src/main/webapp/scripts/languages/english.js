define({
	id: 'en',
	name: 'English',
	texts: {
		preferences: {
			thousandSeparator: '\u2009',
			decimalSeparator: '.'
		},
		faults: {
			101: 'The wallet file does not exist.',
			102: 'Wallet has not been created.',
			103: 'Wallet file is corrupt. Please recover your wallet from a backup.',
			104: 'The provided password for the wallet is not correct.',
			105: 'No password was provided for the wallet.',
			106: 'Before you can work with a wallet, it has to be opened. To ensure that you are eligible for accessing the wallet, you have to provide the password for that wallet.',
			107: 'Wallet does not contain this account.',
			108: 'The account cannot be removed. Most likely because the account still has a balance greater than 0 NEM or the account you are trying to remove is the primary account.',
			109: 'Another wallet with the same name exists already. Please choose an other wallet name.',
			110: 'Wallet already contains this account.',
			111: 'The wallet name is a directory.',
			112: 'The extension of the wallet file is incorrect.',
			113: 'The wallet could not be deleted.',
			121: 'The address book file does not exist.',
			122: 'Address book has not been created.',
			123: 'Address book file is corrupt. Please recover your address book from a backup.',
			124: 'The provided password for the address book is not correct.',
			125: 'No password was provided for the address book.',
			127: 'Address book does not contain this address.',
			129: 'Another address book with the same name exists already. Please choose an other address book name.',
			130: 'Address book already contains this address.',
			131: 'The address book name is a directory.',
			132: 'The extension of the address book file is incorrect.',
			133: 'The address book could not be deleted.',
			202: 'An encrypted message cannot be sent because the recipient has never made a transaction before.',
			305: 'NEM Infrastructure Server is not available.',
			306: 'An error occurred that the development team did not have foreseen. Apologies for this, maybe a retry might help. Otherwise, please open up an issue within the NEM NIS/NCC community.',
			400: 'Some parameter is missing or invalid.',
			401: 'This operation cannot be completed because it might leak a private key by sending it to a remote NIS.',
			404: 'The requested resource could not be found.',
			500: 'An error occurred that the development team did not have foreseen. Apologies for this, maybe a retry might help. Otherwise, please open up an issue within the NEM NIS/NCC community.',
			600: 'Before sending and receiving transactions, the NEM Infrastructure Server (NIS) needs to be booted. Please use the NCC menu entry for booting the local node.',
			601: 'The NEM Infrastructure Server (NIS) is already booted.',
			700: 'The provided account does not satisfy the basic criteria for harvesting. Mainly it is related to the amount of NEM within the account. Harvesting starts with at least 1000 NEM.',
			701: 'The provided deadline is in the past. The deadline must be provided within a 1 day period.',
			702: 'The provided deadline is too far in the future. The deadline must be within one day time period.',
			703: 'Your account does not have the right balance to send the provided amount of NEM.',
			704: 'The provided message text is too large to be sent. Please try to reduce the length of the message.',
			705: 'The transaction hash already exists in the database or in the list of unconfirmed transactions.',
			706: 'The signature of the transaction could not be verified.',
			707: 'The time stamp of the transaction is too far in the past.',
			708: 'The time stamp of the transaction is too far in the future.',
			709: 'The account is unknown. An account needs to be part of at least one transaction (sender or recipient) to be known to the network.',
			901: 'There was an error setting up offline mode.',
			1000: "The private key and the public key you have provided mismatch.",
			1001: 'The public key and the address you have provided mismatch.',
			1002: 'The address does not belong to the main network.'
		},
		common: {
			success: 'Success', //title of the Success message modals
			appStatus: {
				nccUnknown: 'NCC status is unknown',
				nccUnavailable: 'NCC is not available',
				nccStarting: 'NCC is starting...',
				nisUnknown: 'NIS status is unknown',
				nisUnavailable: 'NIS is not available',
				nisStarting: 'NIS is starting...',
				notBooted: 'NIS needs to be booted. Please open your wallet and boot a local node via the popup dialog or configure the auto-boot setting.',
				booting: 'Booting NIS...',
				nisInfoNotAvailable: 'NIS info is not available yet. Trying to retrieve NIS info...',
				synchronizing: 'NIS is synchronizing. At block {{1}}, est. {{2}} behind.',
				daysBehind: {
					0: 'less than 1 day',
					1: '1 day',
					many: '{{1}} days'
				},
				synchronized: 'NIS is synchronized!'
			},
			addressBook: 'Address book',
			password: 'Password',
			address: 'Address',
			privateLabel: 'Private label',
			publicLabel: 'Public label',
		},
		modals: {
			error: {
				title: 'Oops!',
				caption: 'ERROR {{1}}'
			},
			confirmDefault: {
				yes: 'Yes',
				no: 'No'
			},
			settings: {
				title: 'Settings',
				language: {
					label: 'Language'
				},
				remoteServer: {
					tabTitle: 'Remote Server',
					protocol: 'Protocol',
					protocolOptions: {
						http: 'HTTP'
					},
					host: 'Host',
					port: 'Port'
				},
				autoBoot: {
					tabTitle: 'Auto-boot',
					name: 'Node name',
					account: 'Account',
					primaryAccount: 'Primary account',
					auto: 'Auto boot when a wallet is opened'
				},
				save: 'Save',
				saveSuccess: 'Settings have been saved successfully'
			},
			multisig: {
				title: 'Convert account to multisig',
				multisigAccount: 'Multisig account',
				cosignatories: "Cosignatories' addresses",
				labelDesc: 'This account is labeled as {{1}}',
				nullLabelDesc: "This account doesn't have a label",
				addCosignatory: '+ Add Cosignatory',
				cancel: 'Cancel',
				convert: 'Convert',
				fee: 'Fee',
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: 'Due by',
				useMinimumFee: 'Use minimum fee',
				hours: 'hour(s)',
			},
			sendNem: {
				title: 'Send NEM',
				sender: 'Sender',
				thisAccount: 'This account',
				labelDesc: 'This account is labeled as {{1}}',
				nullLabelDesc: "This account doesn't have a label",
				amount: 'Amount',
				recipient: "Recipient's account",
				recipientValidation: 'Account addresses must be 40 characters long excluding dashes',
				message: 'Message',
				encrypt: 'Encrypt message',
				fee: 'Fee',
				feeValidation: 'Fee must not be less than the minimum fee',
				dueBy: 'Due by',
				useMinimumFee: 'Use minimum fee',
				hours: 'hour(s)',
				password: 'Password',
				passwordValidation: 'Password must not be blank',
				send: 'Send',
				cancel: 'Cancel',
				sending: 'Sending...',
				successMessage: 'Transaction has been sent successfully!',
				txConfirm: {
					title: 'Confirm Transaction',
					amount: 'Amount',
					to: 'To',
					fee: 'Fee',
					dueBy: 'Due by',
					hours: 'hour(s)',
					total: 'Total',
					message: 'Message',
					encrypted: 'Message is encrypted',
					noMessage: 'No message',
					cancel: 'Cancel',
					confirm: 'Confirm',
					sending: 'Sending...'
				},
				notBootedWarning: {
					title: 'Node has not been booted!',
					message: 'A local node needs to be booted before you can send NEM!'
				},
				bootingWarning: {
					title: 'Node is being booted',
					message: 'Please wait until booting process is done to send your transaction.'
				}
			},
			clientInfo: {
				title: 'Client info',
				ncc: 'NEM Community Client - NCC',
				signer: 'Signer',
				remoteServer: 'Remote Server',
				local: 'Local',
				nis: 'NEM Infrastructure Server - NIS',
				sync: 'Synchronized',
				notSync: 'Not synchronized',
				notConnected: 'Not connected to NEM Cloud',
				loading: 'Loading...'
			},
			transactionDetails: {
				title: 'Transaction Details',
				id: 'ID',
				hash: 'Hash',
				type: 'Transaction Type',
				pending: 'Pending',
				outgoing: 'Outgoing',
				incoming: 'Incoming',
				self: 'Self',
				sender: 'Sender',
				recipient: 'Recipient',
				message: 'Message',
				noMessage: 'No message',
				encrypted: 'Message is encrypted',
				time: 'Timestamp',
				confirmations: 'Confirmations',
				confirmationsUnknown: 'Unknown',
				amount: 'Amount',
				fee: 'Fee'
			},
			accountDetails: {
				title: "Account details",
				address: "Address",
				label: "Label",
				noLabel: "No label",
				add: "Add to address book",
				remove: "Remove from address book",
				balance: "Balance",
				importance: "Importance",
				publicKey: "Public key",
				noPublicKey: "No public key",
				foragedBlocks: "Foraged blocks",
				close: "Close"
			},
			bootLocalNode: {
				title: 'Boot local node',
				account: 'Account to boot local node',
				noLabel: '<span class="null">&lt;No label&gt;</span>',
				wallet: 'Wallet',
				node: 'Node name',
				boot: 'Boot',
				booting: 'Booting...'
			},
			closeWallet: {
				title: 'Close Wallet',
				message: 'Are you sure you want to close your wallet and return to landing page?'
			},
			createAccount: {
				title: 'Create New Account',
				label: 'Private label',
				wallet: 'Wallet',
				password: "Wallet's password",
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} has been created!',
				create: 'Create'
			},
			createRealAccountData: {
				title: 'Create Real Account Data',
				message: 'The below data is for your real account after NEM launches. Save the address, the public key, and most importantly the private key somewhere safe. If you lose the private key, your account and all your real NEM will be lost FOREVER!',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				confirm: {
					title: 'Save the Private Key',
					message: 'Are you sure your private key has been saved into a safe place?'
				},
				recheck: {
					title: 'Re-check Your Saved Private Key',
					message: "Please re-enter your private key you've just been provided to check if you have the correct one saved. If your private key is already lost, you may want to create a new one.",
					correct: {
						title: 'Nice!',
						message: 'You seem to have your correct private key saved. Please remember to always keep it safe and secured!'
					},
					incorrect: {
						title: 'Hmm...',
						message: "The private key you've just entered is not correct! Do you want to try to enter the private key again or come back to see the original account data?",
						tryAgain: 'Try to enter again',
						seeOriginal: 'See the original data'
					},
					recheck: 'Check'
				},
				ok: 'OK'
			},
			verifyRealAccountData: {
				title: 'Verify Real Account Data',
				message: 'Re-enter your saved address, public key and private key below to check if they match',
				address: 'Address',
				publicKey: 'Public key',
				privateKey: 'Private key',
				dataMatched: 'Everything seems good. Your entered address, public key, and private key match.',
				verify: 'Verify'
			},
			addAccount: {
				title: 'Add an Existing Account',
				privateKey: "Account's Private Key",
				wallet: 'Wallet',
				password: "Wallet's password",
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} has been added to wallet!',
				add: 'Add',
				label: 'Label'
			},
			setPrimary: {
				title: 'Set Primary Account',
				account: 'Account to be set as primary',
				noLabel: '<span class="null">&lt;No label&gt;</span>',
				wallet: 'Wallet',
				password: "Wallet's password",
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} has been set as primary!',
				set: 'Set as primary',
			},
			changeWalletName: {
				title: 'Change Wallet Name',
				wallet: 'Current wallet name',
				newName: 'New wallet name',
				password: "Wallet's password",
				successMessage: 'Wallet name has been successfully changed from <em>{{1}}</em> to <em>{{2}}</em>',
				change: 'Change'
			},
			changeWalletPassword: {
				title: 'Change Wallet Password',
				wallet: 'Wallet',
				password: 'Current password',
				newPassword: 'New password',
				confirmPassword: 'Confirm new password',
				successMessage: 'Wallet password has been successfully changed',
				change: 'Change',
				passwordNotMatchTitle: 'Oops!',
				passwordNotMatchMessage: 'Your entered password and password confirmation do not match. Please be sure you type your new password correctly.'
			},
			changeAccountLabel: {
				title: 'Change Account Label',
				label: 'Account label',
				wallet: 'Wallet',
				password: "Wallet's password",
				successMessage: 'Account {{1}} is now labeled as {{2}}',
				change: 'Change'
			},
			removeAccount: {
				title: 'Remove Account',
				wallet: 'Wallet',
				password: "Wallet's password",
				warning: 'Please ensure that your account has no NEM left before you remove it, or they would be lost forever.',
				successMessage: 'Account {{1}} {{#2}}({{2}}){{/2}} has been removed!',
				remove: 'Remove'
			},
			nisUnavailable: {
				title: 'NIS unavailable',
				message: 'Disconnected from NIS, waiting for connection'
			},
			shutdown: {
				title: 'Close Program',
				message: 'Are you sure you want to close NEM Community Client?'
			},
			activateRemote: {
				title: 'Activate Remote Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Due by (hours)',
				password: "Wallet's password",
				activate: 'Activate'
			},
			deactivateRemote: {
				title: 'Deactivate Remote Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				hoursDue: 'Due by (hours)',
				password: "Wallet's password",
				deactivate: 'Deactivate'
			},
			startRemote: {
				title: 'Start Remote Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				start: 'Start'
			},
			stopRemote: {
				title: 'Stop Remote Harvesting',
				wallet: 'Wallet',
				account: 'Account',
				password: "Wallet's password",
				stop: 'Stop'
			},
			logoutWarning: {
				leavePage: "You're leaving your wallet. Remember that if you leave your wallet this way, some others may still be able to access your wallet from this computer.\n\nTo prevent that from happening, please log out using the \"Close wallet\" menu item in the top-right dropdown menu before you close the browser tab or navigate away.",
			},
			addContact: {
				title: 'Add contact',
				add: 'Add'
			},
			editContact: {
				title: 'Edit contact',
				saveChanges: 'Save changes',
			},
			removeContact: {
				title: 'Remove contact',
				remove: 'Remove',
			}
		},
		landing: {
			logo: 'images/nem_logo.png',
			importSuccess: 'Wallet has been sucessfully imported!',
			nav: {
				start: 'Getting Started',
				about: 'About NEM',
				settings: 'Settings'
			},
			main: {
				leftTitle: 'New to <em>NEM</em>?',
				leftButton: 'Create new wallet',
				walletNamePlh: 'Name of your wallet',
				passwordPlh: 'Password',
				confirmPasswordPlh: 'Confirm password',
				create: 'Create',
				creating: 'Creating...',
				rightTitle: 'Already a <em>NEM</em>ber?',
				rightButton: 'Open your wallet',
				openButton: 'Open',
				walletsFound: 'Found <strong>{{1}}</strong> <em>wallet(s)</em>',
				copyright: 'Photography by <em>Cas Cornelissen</em>'
			},
			carousel: {
				items: [{
					title: 'NCC encrypts your wallet',
					description: '<em>Wallet security</em> is very important to avoid the theft of NEM coins &amp; assets.'
				}, {
					title: 'NCC encrypts your wallet',
					description: '<em>Wallet security</em> is very important to avoid the theft of NEM coins &amp; assets.'
				}]
			},
			about: {
				sections: [{
					title: 'How does NCC work?',
					paragraphs: [
						'<strong>NCC</strong> provides access to your assets and NEM like a traditional wallet. You may',
						'<strong>NCC</strong> requires access to a <strong>NIS</strong> server in order to operate. Standard is to have a local server active (it is installed together with the <strong>NCC</strong>)',
						'You may also configure an access to a remote <strong>NIS</strong>.'
					],
					listItems: [
						'Have multiple wallets',
						'Define multiple accounts to be included in a wallet'
					]
				}, {
					title: 'What is &#42;NIS?',
					paragraphs: [
						'This component is responsible for keeping the <strong>NEM</strong> cloud alive.',
						'The more <strong>NIS</strong> the better the security.',
						'<strong>NIS</strong> is the access point into the <strong>NEM</strong> cloud.'
					],
					legend: '<strong>&#42;NIS</strong> stands for <strong>NEM Infrastructure Server</strong>'
				}]
			},
			footer: {
				copyright: '&copy; Copyright 2014. NEM Community Client.'
			}
		},
		wallet: {
			logo: 'images/nem_logo.png',
			lastAccess: 'About {{1}} days ago',
			lastAccessJustNow: 'Just now',
			lastAccessTooltip: 'Last access was {{1}}',
			primary: 'primary',
			primaryShort: 'P',
			noLabel: '<No label>',
			copiedToClipboard: 'Address has been copied to clipboard!',
			actions: {
				refreshInfo: 'Refresh Info',
				bootLocalNode: 'Boot Local Node',
				changeWalletName: 'Change Wallet Name',
				changeWalletPassword: 'Change Wallet Password',
				mergeWallets: 'Merge Wallets',
				exportWallet: 'Export Wallet',
				createAccount: 'Create New Account',
				createRealAccountData: 'Create Real Account Data',
				verifyRealAccountData: 'Verify Real Account Data',
				addAccount: 'Add an Existing Account',
				changeAccountLabel: 'Change Account Label',
				setPrimary: 'Set as Primary Account',
				removeAccount: 'Remove Account',
				clientInfo: 'Client Info',
				closeWallet: 'Close Wallet',
				closeProgram: 'Close Program',
				copyClipboard: 'Copy Address to Clipboard',
				convertMultisig: 'Convert to multisig'
			},
			nav: [
				'Dashboard',
				'Messages',
				'Address Book',
				'Transactions',
				'Harvested blocks',
				'Asset Exchange',
				'News',
				'Applications',
				'Accounts',
				'Settings',
				'Close Program'
			],
			bootNodeWarning: "A local node needs to be booted before you can fully utilize NCC's features."
		},
		dashboard: {
			assets: {
				title: 'Your Assets'
			},
			importance: {
				title: 'Importance Score',
				unknown: 'Unknown status',
				start: 'Start local harvesting',
				harvesting: 'Harvesting',
				stop: 'Stop local harvesting',
				description: 'Importance of account to the NEM cloud',
				remoteHarvest: {
					activate: 'Activate remote harvesting',
					activating: 'Activating remote harvesting...',
					active: 'Remote harvesting is active',
					deactivate: 'Deactivate remote harvesting',
					deactivating: 'Deactivating remote harvesting...',
					startRemoteHarvesting: 'Start remote harvesting',
					remotelyHarvesting: 'Remotely harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			},
			transactions: {
				title: 'Recent Transactions',
				sendNem: 'Send NEM',
				balance: 'Current Balance',
				syncStatus: '(at block {{1}}{{#2}} : est. {{3}} days behind{{/2}})',
				unknown: 'unknown',
				columns: [
					'',
					'Time',
					'Sender/Recipient',
					'Message',
					'',
					'Details',
					'Confirmations',
					'Fee',
					'Amount'
				],
				types: {
					pending: 'Pending transaction',
					outgoing: 'Outgoing transaction',
					incoming: 'Incoming transaction',
					self: 'Self transaction',
				},
				noMessage: 'No message',
				encrypted: 'Message is encrypted',
				view: 'View',
				confirmationsUnknown: 'Unknown',
				pending: 'Pending',
				seeAll: 'See all transactions',
				noTransactions: 'No transactions have been performed yet'
			},
			nemValue: {
				title: 'NEM value statistics'
			},
			messages: {
				titleTooltip: 'Messages'
			},
			news: {
				titleTooltip: 'News'
			},
			notAvailable: 'Not yet available in beta release'
		},
		transactions: {
			title: 'Transactions',
			sendNem: 'Send NEM',
			balance: 'Current Balance',
			filters: {
				confirmed: 'Confirmed',
				unconfirmed: 'Unconfirmed',
				incoming: 'Incoming',
				outgoing: 'Outgoing',
			},
			table: {
				columns: [
					'',
					'Time',
					'Sender/Recipient',
					'Message',
					'',
					'Details',
					'Confirmations',
					'Fee',
					'Amount'
				],
				types: {
					pending: 'Pending transaction',
					outgoing: 'Outgoing transaction',
					incoming: 'Incoming transaction',
					self: 'Self transaction',
				},
				noMessage: 'No message',
				encrypted: 'Message is encrypted',
				view: 'View',
				confirmationsUnknown: 'Unknown',
				pending: 'Pending',
				noTransactions: 'No transactions have been performed yet',
				loading: 'Loading more transactions...'
			}
		},
		harvestedBlocks: {
			title: 'Harvested Blocks',
			feeEarned: 'Fees earned from the last 25 harvested blocks',
			unknown: 'Unknown',
			table: {
				columns: [
					'Height',
					'Time',
					'Block hash',
					'Fee'
				],
				noBlocks: 'No blocks have been harvested yet',
				loading: 'Loading more harvested blocks'
			},
			harvesting: {
				unknown: 'Unknown status',
				start: 'Start local harvesting',
				harvesting: 'Harvesting',
				stop: 'Stop local harvesting',
				remoteHarvest: {
					startRemoteHarvesting: 'Start remote harvesting',
					stopRemoteHarvesting: 'Stop remote harvesting'
				}
			}
		},
		addressBook: {
			title: 'Address book',
			addContact: 'Add contact',
			table: {
				columns: [
					'Account address',
					'Private Label',
					'Public Label'
				],
				noContacts: 'There is no contacts in your address book'
			},
			noLabel: 'No label',
			sendNem: 'Send NEM',
			edit: 'Edit',
			remove: 'Remove'
		},
		settings: {
			title: 'Settings',
			settings: [{
				name: 'Language'
			}],
			save: 'Save changes',
			saveSuccess: 'Settings have been saved successfully'
		}
	}
});
