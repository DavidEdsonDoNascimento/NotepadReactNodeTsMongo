import { Annotations } from "@models/AnnotationModel";
import { Request, Response } from 'express';

type Annotation = {
  title: String,
  notes: String,
  priority: Boolean
}
export class AnnotationController {
  static create(req: Request, res: Response) {
    const {
      title,
      notes,
      priority
    }: Annotation = req.body;

    console.log(`${title} | ${notes} | ${priority}`);
  }

  static async read(req: Request, res: Response) {
    console.log('ccccccccccccc');
    const annotations = await Annotations.find();
    console.log('Annotations: ',annotations);
    return res.json(annotations)
  }
}