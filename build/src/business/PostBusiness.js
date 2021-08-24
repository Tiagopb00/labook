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
exports.PostBusiness = void 0;
const postDataBase_1 = require("../data/postDataBase");
const idGenerator_1 = require("../services/idGenerator");
const authenticator_1 = require("../services/authenticator");
const postDatabase = new postDataBase_1.PostDatabase();
class PostBusiness {
    constructor() {
        this.createpostBusiness = (photo, description, type, token) => __awaiter(this, void 0, void 0, function* () {
            if (!photo ||
                !description ||
                !type ||
                !token) {
                throw new Error("Preencha todos os campos");
            }
            const tokenData = authenticator_1.getTokenData(token);
            const id = idGenerator_1.generateId();
            const newPost = { id, photo, description, type, author_id: tokenData.id };
            yield postDatabase.createPost(newPost);
        });
        this.GetPostByIdBusiness = (id, token) => __awaiter(this, void 0, void 0, function* () {
            const tokenData = authenticator_1.getTokenData(token);
            const result = yield postDatabase.getPostbyId(id);
            if (!result) {
                throw new Error("Post não encontrado");
            }
            const postInfo = {
                id: result.id,
                photo: result.photo,
                description: result.description,
                type: result.type,
                createdAt: result.created_at,
                author_id: result.author_id
            };
            return postInfo;
        });
    }
}
exports.PostBusiness = PostBusiness;
//# sourceMappingURL=PostBusiness.js.map