/**
 * The clean architecture and SOLID design principles applied to separate domain objects from external dependencies.
 *
 * @project aligorkem - Home Loan Application
 * @author  Ali Gorkem Ozturk
 * @date   31 Mar 22
 */
export class Loan{

      //todo: max number value limit is 9007199254740991, so consider using a big number type.
      carLoanDebt: number;
      creditCardDebt: number;
      valueOfStock: number;
      homeLoanDebt: number;
      salaryPaid: number;

      date: string;
      email: string;
      firstName: string;
      lastName: string;
      location: string;
      stock: string;

      /**
       * Constructor of Loan
       * @param params
       */
      constructor(params: Record<string, unknown>) {
            this.email = params.email.toString();
            this.date = params.date.toString();
            this.firstName = params.firstName.toString();
            this.lastName = params.lastName.toString();
            this.location = params.location.toString();

            this.stock = params.stock.toString();
            this.carLoanDebt = Number(params.carLoanDebt.toString());
            this.creditCardDebt = Number(params.creditCardDebt.toString());
            this.valueOfStock = Number(params.valueOfStock.toString());
            this.homeLoanDebt = Number(params.homeLoanDebt.toString());
            this.salaryPaid = Number(params.salaryPaid.toString());
      }

      /**
       * Returns total liabilities
       */
      public totalLiabilities(): number {
            return this.homeLoanDebt + this.creditCardDebt + this.carLoanDebt;
      }

      /**
       * Returns total assets
       */
      public totalAssets(): number {
            return (this.salaryPaid * 4) + this.valueOfStock;
      }

      /**
       * Returns whether application approved
       */
      public isApproved(): boolean {
            return (this.totalAssets() >= this.totalLiabilities());
      }

      /**
       * It exports to html
       */
      public toHtml(): string{
            return "<h2>Home Loan</h2><pre>" + JSON.stringify(this, null, 2) + "</pre>";
      }
}
