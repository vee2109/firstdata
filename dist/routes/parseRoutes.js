"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const parseController_1 = require("../controllers/parseController");
class Routes {
    constructor() {
        this.parseController = new parseController_1.ParseController();
    }
    routes(app) {
        app.route('/api/v1/parse')
            .post(this.parseController.V1Parse);
        app.route('/api/v2/parse')
            .post(this.parseController.V2Parse);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=parseRoutes.js.map