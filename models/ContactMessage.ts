import mongoose, { Schema, type InferSchemaType } from "mongoose";

const contactMessageSchema = new Schema(
  {
    name: { type: String, required: true, trim: true, maxlength: 80 },
    email: { type: String, required: true, trim: true, lowercase: true, maxlength: 160 },
    company: { type: String, trim: true, maxlength: 120, default: "" },
    message: { type: String, required: true, trim: true, maxlength: 3000 },
    source: { type: String, default: "portfolio" },
  },
  { timestamps: true }
);

export type ContactMessageDocument = InferSchemaType<typeof contactMessageSchema>;

export const ContactMessage =
  mongoose.models.ContactMessage ||
  mongoose.model("ContactMessage", contactMessageSchema);
