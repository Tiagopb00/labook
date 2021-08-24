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
exports.UserDatabase = void 0;
const BaseDatabase_1 = require("./BaseDatabase");
const userTable = "labook_users";
class UserDatabase extends BaseDatabase_1.BaseDatabase {
    constructor() {
        super(...arguments);
        this.createUser = ({ id, name, email, password }) => __awaiter(this, void 0, void 0, function* () {
            yield BaseDatabase_1.BaseDatabase.connection(userTable)
                .insert({
                id,
                name,
                email,
                password
            });
            console.log(password);
            console.log(BaseDatabase_1.BaseDatabase);
        });
    }
    login(email) {
        return __awaiter(this, void 0, void 0, function* () {
            const queryResult = yield BaseDatabase_1.BaseDatabase.connection()
                .select("*")
                .where({ email })
                .from(userTable);
            const user = {
                id: queryResult[0].id,
                name: queryResult[0].name,
                email: queryResult[0].email,
                password: queryResult[0].password
            };
            if (!queryResult[0]) {
                throw new Error("Invalid credentials");
            }
            return user;
        });
    }
}
exports.UserDatabase = UserDatabase;
//# sourceMappingURL=UserDatabase.js.map