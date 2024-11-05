import HttpError from "../types/httpError.ts";
import * as Sentry from '@sentry/node'

export class Logger {
  static info(message: string) {
    console.log(`INFO: ${message}`);
    Sentry.captureMessage(message, 'info');
  }

  static warn(message: string) {
    console.warn(`WARN: ${message}`);
    Sentry.captureMessage(message, 'warning');
  }

  static error(error: HttpError) {
      console.error(`ERROR: ${error.message}`);
      Sentry.captureException(error); 
  }
}

