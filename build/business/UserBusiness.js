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
exports.UserBusiness = void 0;
const UserDatabase_1 = require("../data/UserDatabase");
const authenticator_1 = require("../services/authenticator");
const HashManager_1 = require("../services/HashManager");
const idGenerator_1 = require("../services/idGenerator");
const hashManager = new HashManager_1.HashManager();
const userDatabase = new UserDatabase_1.UserDatabase();
class UserBusiness {
    constructor() {
        this.signUpBusiness = (name, email, password) => __awaiter(this, void 0, void 0, function* () {
            if (!name || !email || !password) {
                throw new Error("Preencha todos os campos");
            }
            const id = idGenerator_1.generateId();
            const cypherPassword = yield hashManager.hash(password);
            const user = {
                id,
                name,
                email,
                password: cypherPassword
            };
            yield userDatabase.createUser(user);
            const token = authenticator_1.generateToken({ id });
            return token;
        });
        this.loginBusiness = (email, password) => __awaiter(this, void 0, void 0, function* () {
            if (!email || !password) {
                throw new Error("Preencha todos os campos");
            }
            const user = yield userDatabase.login(email);
            if (!user) {
                throw new Error("Usuário não encontrado");
            }
            const passwordIsCorrect = yield hashManager.compare(password, user.password);
            if (!passwordIsCorrect) {
                throw new Error("Senha incorreta");
            }
            const token = authenticator_1.generateToken({ id: user.id });
            return token;
        });
    }
}
exports.UserBusiness = UserBusiness;
//# sourceMappingURL=UserBusiness.js.map