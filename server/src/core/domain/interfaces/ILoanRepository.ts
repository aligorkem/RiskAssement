/**
 * The clean architecture and SOLID design principles applied to separate domain objects from external dependencies.
 *
 * @project aligorkem - Home Loan Application
 * @author  Ali Gorkem Ozturk
 * @date   31 Mar 22
 */

import {ISuccess} from "./ISuccess";

export interface ILoanRepository {

      submitLoan(jsonObject: object): Promise<ISuccess>;

      // submitLoan: () => ISuccess;
}
