import { ResponseMode } from '../../../types'
import { ApplicationError } from '../core/core.errors'

/**
 * A custom error class thrown by the submission controllers
 * when some form fields are missing from the submission
 */
export class ConflictError extends ApplicationError {
  constructor(message: string, meta?: unknown) {
    super(message, meta)
  }
}

export class SubmissionNotFoundError extends ApplicationError {
  constructor(message = 'Submission not found for given ID') {
    super(message)
  }
}

/**
 * A custom error class returned when given submission has invalid encryption encoding
 */
export class InvalidEncodingError extends ApplicationError {
  constructor(message = 'Error with encoding.') {
    super(message)
  }
}

/**
 * A custom error class returned when given submission has response that cannot be processed
 */
export class ProcessingError extends ApplicationError {
  constructor(message = 'Error processing response.') {
    super(message)
  }
}

/**
 * A custom error class returned when given submission has field validation failure
 */
export class ValidateFieldError extends ApplicationError {
  constructor(message = 'Error validating field.', status = 400) {
    super(message, status)
  }
}

/**
 * Error while sending confirmation email to recipients.
 */
export class SendEmailConfirmationError extends ApplicationError {
  constructor(message = 'Error while sending confirmation emails') {
    super(message)
  }
}

/**
 * Attempt to submit form to wrong endpoint
 */
export class ResponseModeError extends ApplicationError {
  constructor(
    formResponseMode: ResponseMode,
    attemptedResponseMode: ResponseMode,
  ) {
    super(
      `Attempted to submit ${formResponseMode} form to ${attemptedResponseMode} endpoint`,
    )
  }
}
