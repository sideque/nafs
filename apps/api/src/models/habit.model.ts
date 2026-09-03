import mongoose, { Document, Schema } from "mongoose";

export interface IHabit extends Document {
  userId: mongoose.Types.ObjectId;
  name: string;
  description?: string;
  category: "fitness" | "coding" | "islamic" | "reading" | "career" | "other";
  frequency: "daily" | "weekly";
  completedDates: Date[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

const habitSchema = new Schema<IHabit>(
  {
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    category: {
      type: String,
      enum: [
        "fitness",
        "coding",
        "islamic",
        "reading",
        "career",
        "other",
      ],
      default: "other",
    },

    frequency: {
      type: String,
      enum: ["daily", "weekly"],
      default: "daily",
    },

    completedDates: {
      type: [Date],
      default: [],
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
);

habitSchema.index({ userId: 1 });

export const Habit = mongoose.model<IHabit>("Habit", habitSchema);