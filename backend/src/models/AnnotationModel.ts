import mongoose from "mongoose";

const AnnotationDataSchema = new mongoose.Schema({
  title: String,
  notes: String,
  priority: Boolean
});

export const Annotations = mongoose.model('annotations', AnnotationDataSchema);