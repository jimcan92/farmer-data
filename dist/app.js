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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const prisma_1 = __importDefault(require("./prisma"));
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.json());
app.use(express_1.default.static("public"));
app.set("view engine", "ejs");
app.get("/", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // const r = await prisma.user.create({
    //   data: { id: "6110389", name: "Jimboy Cantila", email: "jimcan@gmail.com" },
    // });
    const users = yield prisma_1.default.user.findMany();
    res.json(users);
}));
app.post("/users", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    res.json({ okay: "It s okay" });
}));
app.listen(port, () => {
    return console.log(`http://localhost:${port}`);
});
//# sourceMappingURL=app.js.map