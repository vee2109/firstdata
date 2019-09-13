import { Request, Response } from "express";

import { ParseController } from "../controllers/parseController";

export class Routes {
  public parseController: ParseController = new ParseController();
  public routes(app): void {

    app.route('/api/v1/parse')
      .post(this.parseController.V1Parse);

    app.route('/api/v2/parse')
      .post(this.parseController.V2Parse);


  }



}
