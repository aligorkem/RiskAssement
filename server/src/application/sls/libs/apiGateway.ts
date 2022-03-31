import type {APIGatewayProxyEvent, APIGatewayProxyResult, Handler} from "aws-lambda"
import type {FromSchema} from "json-schema-to-ts";
import {ISuccess} from "../../../core/domain/interfaces/ISuccess";

type ValidatedAPIGatewayProxyEvent<S> = Omit<APIGatewayProxyEvent, 'body'> & { body: FromSchema<S> }
export type ValidatedEventAPIGatewayProxyEvent<S> = Handler<ValidatedAPIGatewayProxyEvent<S>, APIGatewayProxyResult>

export const formatJSONResponse2 = (response: Record<string, unknown>) => {
      return {
            statusCode: 200,
            headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
            },
            body: JSON.stringify(response)
      }
}


export const formatJSONResponse = (success: ISuccess) => {
      return {
            statusCode: success.getStatusCode(),
            headers: {
                  "Access-Control-Allow-Origin": "*",
                  "Access-Control-Allow-Methods": "GET,HEAD,PUT,PATCH,POST,DELETE"
            },
            body: JSON.stringify(success.getBody())
      }
}
