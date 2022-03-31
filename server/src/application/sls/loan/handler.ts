/**
 * The clean architecture and SOLID design principles applied to separate domain objects from external dependencies.
 *
 * @project aligorkem - Home Loan Application
 * @author  Ali Gorkem Ozturk
 * @date   31 Mar 22
 */

import type {ValidatedEventAPIGatewayProxyEvent} from '../libs/apiGateway';
import {formatJSONResponse} from '../libs/apiGateway';
import {middyfy} from '../libs/lambda';

import schema from './schema';
import {ILoanRepository} from "../../../core/domain/interfaces/ILoanRepository";
import {ISuccess} from "../../../core/domain/interfaces/ISuccess";
import {SlsConfig} from "../../../config/SlsConfig";

/**
 * AWSGateway Listener Class
 * @param event
 */
const submit: ValidatedEventAPIGatewayProxyEvent<typeof schema> = async (event) => {

      var jsonObject = JSON.parse(event.body as any);
      var loanRepository: ILoanRepository = new SlsConfig().getILoanRepository();
      var success: ISuccess = await loanRepository.submitLoan(jsonObject);

      return formatJSONResponse(success);

}

export const main = middyfy(submit);
