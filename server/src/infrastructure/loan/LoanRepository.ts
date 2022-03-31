/**
 * The clean architecture and SOLID design principles applied to separate domain objects from external dependencies.
 *
 * @project aligorkem - Home Loan Application
 * @author  Ali Gorkem Ozturk
 * @date   31 Mar 22
 */

import {ILoanRepository} from "../../../src/core/domain/interfaces/ILoanRepository";
import {ISuccess} from "../../core/domain/interfaces/ISuccess";
import {Success} from "../../core/domain/entities/Success";
import {BaseRepository} from "./BaseRepository";
import {SubmitLoan} from "../../core/usecases/SubmitLoan";
const nodemailer = require('nodemailer');
import {Loan} from "../../core/domain/entities/Loan";
const sendgridTransport = require('nodemailer-sendgrid-transport');

export class LoanRepository extends BaseRepository implements ILoanRepository {

      constructor() {
            super();
      }

      /**
       * Submit a loan application
       * @param jsonObject
       */
      async submitLoan(jsonObject: object): Promise<ISuccess> {
            let success: ISuccess = Success.buildSuccess(true);

            try {
                  const submitLoan: SubmitLoan = new SubmitLoan(this);
                  const loan = submitLoan.submit(jsonObject);

                  const stock = await this.getStock(loan.stock);

                  const emailResult = await this.sendEmail(loan, stock);

                  success.setData({
                        isApproved: loan.isApproved(),
                        totalAssets: loan.totalAssets(),
                        totalLiabilities: loan.totalLiabilities(),
                        loan: loan,
                        stock: stock,
                        emailResult: emailResult,
                        params: jsonObject
                  });
            } catch (e) {
                  success = Success.buildSuccessError(e);
            }

            return success;
      }

      async sendEmail(loan: Loan, stock: any) {

            // todo: read it from config
            const transport = nodemailer.createTransport(sendgridTransport({
                  auth: {
                        api_key: "",
                  }
            }))

            var approvalStatus = "approved"
            var email = loan.email;

            if( !loan.isApproved() ){
                  approvalStatus = "rejected";
            }

            var dateTime = new Date().toLocaleString();
            var result = await transport.sendMail({
                  to: email,
                  from: "Home Loan <allangorkem@gmail.com>",
                  subject: "Your home loan is " + approvalStatus + " - " + dateTime,
                  html: loan.toHtml() + "<pre>" +JSON.stringify(stock['Meta Data'], null, 2) + "<pre>"
            });

            return result;
      }
}

