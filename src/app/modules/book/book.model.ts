import { Schema, model } from "mongoose";
import { TBook } from "./book.interface";

const bookSchema = new Schema<TBook>(
  {
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
      validate: {
        validator: function (value: string) {
          return /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(value);
        },
        message: (props) =>
          `${props.value} is not a valid time format! Use HH:MM.`,
      },
    },
    endTime: {
      type: String,
      default: null,
      validate: {
        validator: function (value: string | null) {
          return (
            value === null || /^([0-1][0-9]|2[0-3]):([0-5][0-9])$/.test(value)
          );
        },
        message: (props) =>
          `${props.value} is not a valid time format! Use HH:MM.`,
      },
    },
  },
  {
    timestamps: true,
  }
);

export const Book = model("book", bookSchema);
