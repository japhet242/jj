import {z} from"zod"

export const loginSchema = z.object({
 email:z.string().email({ message: "Invalid email address" }),
 password:z.string().min(5, { message: "Must be 5 or more characters long" })

})

export const registerSchema = z.object({
    
    email:z.string().email({ message: "Invalid email address" }),
    password:z.string().min(5, { message: "Must be 5 or more characters long" }),
    name:z.string().min(3, { message: "Must be 3 or more characters long" }),
   
   })