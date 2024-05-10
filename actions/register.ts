"use server"
import { loginSchema, registerSchema } from "@/schemas/zodschema"
import { error } from "console"
import {z} from"zod"

export async function register(values: z.infer<typeof registerSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const validated = await registerSchema.safeParse(values)
    console.log(validated)
    if (!validated.success) {
      return {success: false}
    }
   return {success :true}
  }