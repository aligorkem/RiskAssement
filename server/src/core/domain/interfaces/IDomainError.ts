/**
 * The clean architecture and SOLID design principles applied to separate domain objects from external dependencies.
 *
 * @project aligorkem - Home Loan Application
 * @author  Ali Gorkem Ozturk
 * @date   31 Mar 22
 */

/**
 * Custom error class
 */
export interface IDomainError {

      getStatusCode(): number;
      setStatusCode(statusCode: number): void;
}
