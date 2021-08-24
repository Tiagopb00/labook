"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.postRouter = void 0;
const PostController_1 = require("../controllers/PostController");
const express_1 = __importDefault(require("express"));
exports.postRouter = express_1.default.Router();
const postController = new PostController_1.PostController();
exports.postRouter.post("/create", postController.createPostController);
exports.postRouter.get("/:id", postController.GetPostByIdController);
//# sourceMappingURL=postRouter.js.map