/**
 * The clean architecture and SOLID design principles applied to separate domain objects from external dependencies.
 *
 * @project aligorkem - Home Loan Application
 * @author  Ali Gorkem Ozturk
 * @date   31 Mar 22
 */
import {ISuccess} from "../interfaces/ISuccess";

export class Success implements ISuccess {

      success: boolean = true;
      statusCode: number = 200;
      message: string = "";
      data: Record<string, unknown> = {};

      private constructor(success: boolean, statusCode?: number, message?: string) {
            this.success = success;

            if (statusCode) {
                  this.statusCode = statusCode;
            }

            if (message) {
                  this.message = message;
            }
      }

      setSuccess(success: boolean): void {
        this.success = success;
    }

      setData(data: Record<string, unknown>): void {
        this.data = data;
    }

      getData(): Record<string, unknown> {
            return this.data;
      }

      getSuccess(): boolean {
            return this.success;
      }

      getMessage(): string {
            return this.message;
      }

      getStatusCode(): number {
            return this.statusCode;
      }

      public static buildSuccess(success: boolean, statusCode?: number, message?: string): ISuccess {
            const successObject: ISuccess = new Success(success, statusCode, message);
            return successObject;
      }

      public static buildSuccessError(error: any): ISuccess {

            let statusCode = 500;

            if( typeof error.getStatusCode !== "undefined" ){
                  statusCode = error.getStatusCode();
            }

            const successObject: ISuccess = new Success(false, statusCode, error.message);
            return successObject;
      }

      getBody(): object {
            return {
                  success: this.getSuccess(),
                  message: this.getMessage(),
                  data: this.getData()
            };
      }
}
