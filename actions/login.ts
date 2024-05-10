"use server"
import { loginSchema } from "@/schemas/zodschema"
import { error } from "console"
import {z} from"zod"

export async function login(values: z.infer<typeof loginSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    const validated = await loginSchema.safeParse(values)
    console.log(validated)
    if (!validated.success) {
      return {success: false}
    }
   return {success :true}
  }