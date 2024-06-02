"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Annotations = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const AnnotationDataSchema = new mongoose_1.default.Schema({
    title: String,
    notes: String,
    priority: Boolean
});
exports.Annotations = mongoose_1.default.model('Annotations', AnnotationDataSchema);
