import { Annotations } from "@models/AnnotationModel";
import { Request, Response } from 'express';

type Annotation = {
  title: String,
  notes: String,
  priority: Boolean
}
export class AnnotationController {
  static async create(req: Request, res: Response) {
    console.log('AnnotationController.create');
    const {
      title,
      notes,
      priority = false
    }: Annotation = req.body;

    console.log(`${title} | ${notes} | ${priority}`);
    if (!title || !notes) {
      return res.status(400).json({
        error: 'Parameterization error in the request',
        params: `title: ${title}, notes: ${notes}`
      })
    }
    const annotation = await Annotations.create({
      title,
      notes,
      priority
    });
    return res.status(201).json({ annotation })
  }

  static async read(req: Request, res: Response) {
    console.log('AnnotationController.read');
    const annotations = await Annotations.find();
    return res.status(200).json(annotations)
  }
}