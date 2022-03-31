/**
 * The clean architecture and SOLID design principles applied to separate domain objects from external dependencies.
 *
 * @project aligorkem - Home Loan Application
 * @author  Ali Gorkem Ozturk
 * @date   31 Mar 22
 */

export interface ISuccess {
      getSuccess(): boolean;

      setSuccess(success: boolean): void;

      getStatusCode(): number;

      getMessage(): string;

      getBody(): object;

      getData(): Record<string, unknown>;

      setData(data: Record<string, unknown>): void;
}
