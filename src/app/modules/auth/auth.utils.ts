import bcrypt from "bcrypt";

export const isPasswordMAtched = (
  planePassword: string,
  hashedPassword: string
) => {
  const isMatched = bcrypt.compare(planePassword, hashedPassword);
  return isMatched;
};
