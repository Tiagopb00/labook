"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserController = void 0;
const UserBusiness_1 = require("../business/UserBusiness");
const userBusiness = new UserBusiness_1.UserBusiness();
class UserController {
    constructor() {
        this.signUpController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { name, email, password } = req.body;
                const token = yield userBusiness.signUpBusiness(name, email, password);
                res
                    .status(201)
                    .send({
                    message: "Usuário criado!",
                    token
                });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.loginController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { email, password } = req.body;
                const token = yield userBusiness.loginBusiness(email, password);
                res
                    .status(200)
                    .send({
                    message: "Usuário logado!",
                    token
                });
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.UserController = UserController;
//# sourceMappingURL=UserController.js.map