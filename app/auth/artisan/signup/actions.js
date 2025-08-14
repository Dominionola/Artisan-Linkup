"use server";
import { signIn, signOut } from "@/auth";
import bcrypt from "bcryptjs";
import { z } from "zod";

const signUpSchema = z.object({
  name: z.string().min(1, { message: "Name is required." }),
  email: z.string().email({ message: "Please enter a valid email." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long." }),
});


export async function signInWithGoogle(role) {
  const callbackUrl = role ? `/portal?role=${role}` : "/portal";
  await signIn("google", { callbackUrl });
}


export async function signOutWithGoogle(params) {
  await signOut();
}

export async function createUser(formData) {
  const data = Object.fromEntries(formData.entries());
  const result = signUpSchema.safeParse(data);

  if (!result.success) {
    const errors = result.error.errors.map((err) => ({
      path: err.path[0],
      message: err.message,
    }));
    return { success: false, errors, message: "Validation failed." };
  }
  const { name, email, password } = result.data;
  if (!name || !email || !password) {
    return { success: false, message: "All fields are required." };
  }

  const hashedPassword = await bcrypt.hash(password, 10);

  {
    /* Mock user creation */
  }
  console.log("User created:", { name, email, hashedPassword });
  {
    /*  Uncomment this when you have a database connection
  await db.user.create({
  data: {
    name,
    email,
    password: hashedPassword,
  },
});
  */
  }

  return { success: true, message: "Account created!" };
}
