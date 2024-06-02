"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AnnotationController = void 0;
const AnnotationModel_1 = require("@models/AnnotationModel");
class AnnotationController {
    static create(req, res) {
        const { title, notes, priority } = req.body;
        console.log(`${title} | ${notes} | ${priority}`);
    }
    static async read(req, res) {
        const annotations = await AnnotationModel_1.Annotations.find();
        return res.json(annotations);
    }
}
exports.AnnotationController = AnnotationController;
