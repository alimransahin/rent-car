export type TUser = {
  name: string;
  email: string;
  role: "user" | "admin";
  password: string;
  phone: string;
  address: string;
  isDeleted: boolean;
};
// export type TUserSignIn = {
//   email: string;
//   password: string;
// };
