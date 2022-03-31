import {Loan} from "../domain/entities/Loan";
import {ILoanRepository} from "../domain/interfaces/ILoanRepository";
import {DomainObjectNullError} from "../domain/errors/DomainObjectNullError";

export class SubmitLoan {

      loanRepository: ILoanRepository;

      constructor(loanRepository: ILoanRepository) {
            this.loanRepository = loanRepository;
      }

      public submit(jsonObject: any): Loan {

            if( !jsonObject ){
                  throw new DomainObjectNullError("Loan object cannot be null.")
            }

            if( !jsonObject.email ){
                  throw new DomainObjectNullError("email cannot be null.")
            }

            if( !jsonObject.stock ){
                  throw new DomainObjectNullError("stock cannot be null.")
            }

            if( !jsonObject.homeLoanDebt ){
                  throw new DomainObjectNullError("homeLoanDebt cannot be null.")
            }

            if( !jsonObject.carLoanDebt ){
                  throw new DomainObjectNullError("carLoanDebt cannot be null.")
            }

            if( !jsonObject.creditCardDebt ){
                  throw new DomainObjectNullError("creditCardDebt cannot be null.")
            }

            return new Loan(jsonObject);
      }
}
