package org.nem.ncc.controller.interceptors;

import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.*;
import java.util.List;
import java.util.logging.Logger;

/**
 * Interceptor that audits requests.
 * This implementation is different from the NIS one because this one only logs.
 */
public class AuditInterceptor extends HandlerInterceptorAdapter {
	private static final Logger LOGGER = Logger.getLogger(AuditInterceptor.class.getName());

	private final List<String> ignoredApiPaths;

	/**
	 * Creates a new audit interceptor.
	 *
	 * @param ignoredApiPaths The api paths to ignore.
	 */
	public AuditInterceptor(final List<String> ignoredApiPaths) {
		this.ignoredApiPaths = ignoredApiPaths;
	}

	@Override
	public boolean preHandle(
			final HttpServletRequest request,
			final HttpServletResponse response,
			final Object handler) throws Exception {
		final AuditEntry entry = new AuditEntry(request);
		if (entry.shouldIgnore()) {
			return true;
		}

		LOGGER.info(String.format("entering %s [%s]", entry.path, entry.host));
		return true;
	}

	@Override
	public void afterCompletion(
			final HttpServletRequest request,
			final HttpServletResponse response,
			final Object handler,
			final Exception ex)
			throws Exception {
		final AuditEntry entry = new AuditEntry(request);
		if (entry.shouldIgnore()) {
			return;
		}

		if (null == ex) {
			LOGGER.info(String.format("exiting %s [%s]", entry.path, entry.host));
		} else {
			LOGGER.severe(String.format("exiting %s [%s]: %s", entry.path, entry.host, ex));
		}
	}

	private class AuditEntry {
		private final String host;
		private final String path;

		private AuditEntry(final HttpServletRequest request) {
			this.host = request.getRemoteAddr();
			this.path = request.getRequestURI();
		}

		private boolean shouldIgnore() {
			return AuditInterceptor.this.ignoredApiPaths.stream().anyMatch(this.path::equalsIgnoreCase);
		}
	}
}
