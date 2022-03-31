/**
 * The clean architecture and SOLID design principles applied to separate domain objects from external dependencies.
 *
 * @project aligorkem - Home Loan Application
 * @author  Ali Gorkem Ozturk
 * @date   31 Mar 22
 */

var request = require('request');

export class BaseRepository {
      constructor () {

      }

      /**
       * Call a rest api end point
       * @param url
       * @protected
       */
      protected async performRequest(url) {
            return new Promise(function (resolve, reject) {
                  request({
                        url: url,
                        json: true,
                        headers: {'User-Agent': 'request'}
                  }, function (error, res, body) {
                        if (!error && res.statusCode == 200) {
                              resolve(body);
                        } else {
                              reject(error);
                        }
                  });
            });
      }

      /**
       * It returns stock data
       * @param stock
       * @protected
       */
      protected async getStock(stock) {
            stock = stock.toUpperCase().trim();

            //todo: read it from config
            const key = "";
            const url = 'https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=' + stock + '&interval=60min&apikey=' + key;

            var response = await this.performRequest(url);
            return response;
      }
}
