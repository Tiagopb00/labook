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
exports.PostController = void 0;
const PostBusiness_1 = require("../business/PostBusiness");
const postBusiness = new PostBusiness_1.PostBusiness();
class PostController {
    constructor() {
        this.createPostController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { photo, description, type } = req.body;
                const token = req.headers.authorization;
                yield postBusiness.createpostBusiness(photo, description, type, token);
                res.status(201).send("Post criado!");
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
        this.GetPostByIdController = (req, res) => __awaiter(this, void 0, void 0, function* () {
            try {
                const { id } = req.params;
                const token = req.headers.authorization;
                const result = yield postBusiness.GetPostByIdBusiness(id, token);
                res.status(200).send(result);
            }
            catch (error) {
                res.status(400).send(error.message);
            }
        });
    }
}
exports.PostController = PostController;
//# sourceMappingURL=PostController.js.map