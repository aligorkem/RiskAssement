/**
 * The clean architecture and SOLID design principles applied to separate domain objects from external dependencies.
 *
 * @project aligorkem - Home Loan Application
 * @author  Ali Gorkem Ozturk
 * @date   31 Mar 22
 */
import {ILoanRepository} from "../core/domain/interfaces/ILoanRepository";
import {LoanRepository} from "../infrastructure/loan/LoanRepository";

export class SlsConfig {

      constructor() {
      }

      /**
       * It returns Loan Repository Interface
       */
      getILoanRepository(): ILoanRepository {
            const loanRepository: ILoanRepository = new LoanRepository();
            return loanRepository;
      }
}
