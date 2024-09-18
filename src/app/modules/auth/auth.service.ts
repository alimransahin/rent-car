import config from "../../config";
import { user_role } from "../user/user.constants";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { isPasswordMAtched } from "./auth.utils";
import jwt from "jsonwebtoken";

const signUp = async (payload: TUser): Promise<any> => {
  const user = await User.findOne({ email: [payload.email] });
  if (user) {
    throw new Error("User Already Exists!");
  }
  payload.role = user_role.user;
  const newUser = await User.create(payload);
  return newUser;
};
const signIn = async (payload: TUser): Promise<any> => {
  const user = await User.findOne({ email: [payload.email] }).select(
    "+password"
  );
  if (!user) {
    throw new Error("User Not Found!");
  }

  if (!(await isPasswordMAtched(payload.password, user.password))) {
    throw new Error("Password Not Matched");
  }
  const jwtPayload = {
    email: user.email,
    role: user.role,
  };
  const accessToken = jwt.sign(jwtPayload, config.jwt_access_secret as string, {
    expiresIn: config.jwt_access_expire_in,
  });
  //   return newUser;
};
