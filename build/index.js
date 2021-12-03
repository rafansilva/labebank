"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const users_1 = require("./database/users");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/users/balance", (req, res) => {
    let errorCode = 400;
    try {
        if (req.query.name && req.query.document) {
            const search = users_1.users
                .filter((user) => {
                const name = req.query.name;
                const document = Number(req.query.document);
                if (user.name.toLowerCase() === name.toLowerCase() && user.document === document) {
                    return user;
                }
            })
                .map((user) => {
                const balance = {
                    name: user.name,
                    document: user.document,
                    balance: user.balance
                };
                return balance;
            });
            console.log(search);
            if (search.length > 0) {
                res.status(200).send(search);
            }
            else {
                errorCode = 404;
                throw new Error("Usuário não encontrado");
            }
        }
        else {
            errorCode = 422;
            throw new Error("Ooops! Dados incompletos!");
        }
    }
    catch (e) {
        const error = e;
        res.status(errorCode).send({ message: error.message });
    }
});
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address();
        console.log(`Server is running in http://localhost: ${address.port}`);
    }
    else {
        console.error(`Failure upon starting server.`);
    }
});
//# sourceMappingURL=index.js.map