import { Router } from 'express';
import { AnnotationController } from '@controllers/AnnotationController'

const routes = Router();

routes.get('/annotations', AnnotationController.read)
.post('/annotations', AnnotationController.create)

export { routes };