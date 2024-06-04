import { Annotations } from '@models/AnnotationModel';
import { Request, Response } from 'express';

class PriorityController {
  static async read(req: Request, res: Response): Promise<any> {
    const { priority } = req.query;

    const priorityAnnotations = await Annotations.find({ priority })

    return res.status(200).json(priorityAnnotations)
  }

  static async update(req: Request, res: Response): Promise<any> {
    const { id } = req.params;
    const annotation = await Annotations.findOne({ _id: id });
    annotation.priority = !annotation.priority;
    await annotation.save();
    return res.status(200).json(annotation);
  }
}

export { PriorityController }