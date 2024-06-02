"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ConnectionService = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const DB_CONFIG = 'mongodb+srv://usuario:usuario@notepadsample.lwk6sib.mongodb.net/?retryWrites=true&w=majority&appName=NotepadSample';
class ConnectionService {
    static connect() {
        mongoose_1.default.connect(DB_CONFIG);
    }
}
exports.ConnectionService = ConnectionService;
