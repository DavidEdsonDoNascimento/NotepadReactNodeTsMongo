"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const express_1 = require("express");
const AnnotationController_1 = require("@controllers/AnnotationController");
const routes = (0, express_1.Router)();
exports.routes = routes;
routes.get('/annotations', AnnotationController_1.AnnotationController.read);
