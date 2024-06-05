import { Router } from 'express';
import { AnnotationController } from '@controllers/AnnotationController'
import { PriorityController } from '@controllers/PriorityController';
import { DocsController } from '@controllers/DocsController';

const routes = Router();

routes
.get('/', DocsController.docs)
.get('/annotations', AnnotationController.read)
.post('/annotations', AnnotationController.create)
.post('/annotations/:id', AnnotationController.update)
.delete('/annotations/:id', AnnotationController.delete)
.get('/priorities', PriorityController.read)
.post('/priorities/:id', PriorityController.update)

export { routes };