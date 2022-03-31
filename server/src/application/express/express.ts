/**
 * The clean architecture and SOLID design principles applied to separate domain objects from external dependencies.
 *
 * @project aligorkem - Home Loan Application
 * @author  Ali Gorkem Ozturk
 * @date   31 Mar 22
 */

import express, { Express, Request, Response } from 'express';

const app: Express = express();
app.get('/', (req: Request, res: Response) => {
      res.send('Express + TypeScript Server');
      console.log(req);
});

const port = 3000;

app.listen(port, () => {
      console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
