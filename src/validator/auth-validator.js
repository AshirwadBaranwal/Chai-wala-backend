import { z } from "zod";

const signUpSchema = z.object({
  username: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Name must be atleast three characters" })
    .max(255, { message: "Name must not be more than 225 characters" }),
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "email must be atleast three characters" })
    .max(255, { message: "email must not be more than 225 characters" }),
  phone: z
    .string({ required_error: "phone is required" })
    .trim()
    .min(10, { message: "phone must be atleast ten characters" })
    .max(20, { message: "Name must not be more than 20 characters" }),
  password: z
    .string({ required_error: "password is required" })
    .min(6, { message: "Name must be atleast 6 characters" })
    .max(255, { message: "Name must not be more than 225 characters" }),
});

const loginSchema = z.object({
  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email address" })
    .min(3, { message: "email must be atleast three characters" })
    .max(255, { message: "email must not be more than 225 characters" }),
  password: z
    .string({ required_error: "password is required" })
    .min(6, { message: "Name must be atleast 6 characters" })
    .max(255, { message: "Name must not be more than 225 characters" }),
});

export { signUpSchema, loginSchema };
