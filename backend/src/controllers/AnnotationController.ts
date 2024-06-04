import { Annotations } from "@models/AnnotationModel";
import { Request, Response } from 'express';
import { ObjectId } from "mongodb";

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

  static async delete(req: Request, res: Response) {
    console.log('AnnotationController.delete');
    const { id } = req.params;
    // validation to know if the received parameter can be converted 
    //to an ObjectId
    if (!id.match(/^[0-9a-fA-F]{24}$/)) {
      return res.status(400).json({
        error: 'Parameterization error in the request',
        params: `invalid id received in request parameters`
      })
    }

    const deleted = await Annotations.findOneAndDelete({
      _id: id
    });

    if (deleted) {
      return res.status(200).json({
        isDeleted: true,
        ...deleted
      })
    }

    return res.status(400).json({
      error: 'register not found',
      params: `id not found in database`
    })
  }
}