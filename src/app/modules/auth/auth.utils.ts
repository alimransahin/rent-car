import bcrypt from "bcrypt";

export const isPasswordMAtched = async (
  plainPassword: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatched = await bcrypt.compare(plainPassword, hashedPassword);
  console.log(plainPassword, hashedPassword, isMatched);
  return isMatched;
};
