"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const ConnectionService_1 = require("@services/ConnectionService");
const router_1 = require("./router");
const PORT = 3333;
const app = (0, express_1.default)();
ConnectionService_1.ConnectionService.connect();
app.use(express_1.default.json(), router_1.routes);
app.listen(PORT, () => { console.log(`API running in port: ${PORT}`); });
