import { Schema, model, models } from "mongoose";

const JobApplicationSchema = new Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    coverLetter: {
      type: String,
      required: true,
    },
    resumeUrl: {
      type: String,
      default: "",
    },
    resumeFileName: {
      type: String,
      default: "",
    },
    referralSource: {
      type: String,
      default: "",
    },
    status: {
      type: String,
      enum: ["pending", "qualified", "offered", "rejected"],
      default: "pending",
    },
    comment: {
      type: String,
      default: "",
    },
  },
  { timestamps: true },
);

export default models.JobApplication ||
  model("JobApplication", JobApplicationSchema);
