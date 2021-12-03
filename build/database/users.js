"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.users = void 0;
const dateformat = require("dateformat");
exports.users = [
    {
        name: "Rafael",
        age: 22,
        document: 12343232110,
        balance: 0,
        extract: [
            {
                value: 0,
                date: dateformat(new Date(), "dd/mm/yyyy"),
                description: "extrato da conta bancária"
            }
        ]
    }
];
//# sourceMappingURL=users.js.map