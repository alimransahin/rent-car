import { model, Schema } from "mongoose";
import { TCar } from "./car.interface";

const carSchema = new Schema<TCar>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    isElectric: {
      type: Boolean,
      required: true,
    },
    features: {
      type: [String],
      required: true,
    },

    pricePerHour: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["available", "unavailable"],
      default: "available",
    },

    isDeleted: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

// carSchema.pre("save", async function (next) {
//   const user = this;
//   user.password = await bcrypt.hash(
//     user.password,
//     Number(config.bcrypt_salt_rounds)
//   );

//   next();
// });
// userSchema.post("save", function (doc, next) {
//   doc.password = "";
//   next();
// });

export const Car = model<TCar>("car", carSchema);
// export const UserSignIn = model<TUserSignIn>("user", userSignInSchema);
