/**
 * The clean architecture and SOLID design principles applied to separate domain objects from external dependencies.
 *
 * @project aligorkem - Home Loan Application
 * @author  Ali Gorkem Ozturk
 * @date   31 Mar 22
 */
import {IDomainError} from "../interfaces/IDomainError";

export class DomainObjectNullError extends Error implements IDomainError{

      statusCode: number = 422;
      constructor(message) {
            super(message);

            //Error.captureStackTrace(this, this.constructor);
      }

      /**
       * It returns the status code
       */
      getStatusCode(): number {
            return this.statusCode;
      }

      setStatusCode(statusCode: number): void {
            this.statusCode = statusCode;
      }
}
