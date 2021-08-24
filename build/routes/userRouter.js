"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userRouter = void 0;
const express_1 = __importDefault(require("express"));
const UserController_1 = require("../controllers/UserController");
exports.userRouter = express_1.default.Router();
const userController = new UserController_1.UserController();
exports.userRouter.post("/signup", userController.signUpController);
exports.userRouter.post("/login", userController.loginController);
//# sourceMappingURL=userRouter.js.map