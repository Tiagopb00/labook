"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const userRouter_1 = require("./routes/userRouter");
const postRouter_1 = require("./routes/postRouter");
const app = express_1.default();
app.use(express_1.default.json());
app.use(cors_1.default());
const PORT = process.env.PORT || 3003;
app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
});
app.use('/users', userRouter_1.userRouter);
app.use('/posts', postRouter_1.postRouter);
//# sourceMappingURL=index.js.map