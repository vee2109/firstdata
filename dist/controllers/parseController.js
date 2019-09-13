"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class ParseController {
    V1Parse(req, res) {
        if (req.body.data) {
            let parseString = req.body.data;
            let flag = 0;
            let strpos_arr = [];
            let person = {};
            //Finding the string position of firstName and lastName
            for (let i = 0; i < parseString.length; i++) {
                if (parseString[i] == 0) {
                    flag = 0;
                }
                else {
                    if (i != 0 && flag == 0) {
                        strpos_arr.push(i);
                    }
                    flag += 1;
                }
            }
            let data_arr = [];
            let spliter = 0;
            // Spliting the firstName and lastName based on the string position and pusing into data_arr
            for (let j = 0; j < strpos_arr.length; j++) {
                let val = parseString.substring(spliter, strpos_arr[j]);
                data_arr.push(val);
                spliter = strpos_arr[j];
            }
            // Getting clientId from lastName string position
            let cliendIdarr = strpos_arr.pop();
            let lastitem = parseString.substring(cliendIdarr);
            data_arr.push(lastitem);
            person = {
                firstName: data_arr[0],
                lastName: data_arr[1],
                clientId: data_arr[2]
            };
            res.status(200).send({
                statusCode: "200",
                data: person
            });
        }
        else {
            res.status(404).send({
                statusCode: "404",
                message: "Invalid Request"
            });
        }
    }
    V2Parse(req, res) {
        if (req.body.data) {
            let data_arr1 = [];
            let data_arr2 = [];
            let person = {};
            let parseString = req.body.data;
            data_arr1 = parseString.match(/[a-zA-Z]+/g);
            data_arr2 = parseString.match(/[\d|,|.|e|E|\+]+/g);
            let number = data_arr2[2].replace(/^0+/, '');
            let ClientID = number.replace(/(\d{3})(\d{4})/, "$1-$2");
            person = {
                firstName: data_arr1[0],
                lastName: data_arr1[1],
                clientId: ClientID
            };
            res.status(200).send({
                statusCode: "200",
                data: person
            });
        }
        else {
            res.status(404).send({
                statusCode: "404",
                message: "Invalid Request"
            });
        }
    }
}
exports.ParseController = ParseController;
//# sourceMappingURL=parseController.js.map