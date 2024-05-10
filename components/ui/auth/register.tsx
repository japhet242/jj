"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form" 
import { z } from "zod"
import { loginSchema, registerSchema } from "../../../schemas/zodschema"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { useState, useTransition } from 'react';
import { login } from "@/actions/login"
import { AlertDestructive } from "./alertsucces"
import { AlertEchec } from "./alerterror"
import { register } from "@/actions/register"


export function RegisterForm() {
  const [isPending, startTransition] = useTransition();
  const [success , setSeccess] = useState< undefined | boolean |string >("")
  // 1. Define your form.s
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      password: "",
      email:"",
      name:""
    },
  })

  // 2. Define a submit handler.
  function onSubmit(values: z.infer<typeof registerSchema>) {
    setSeccess(undefined)
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    startTransition(() => {
      register(values).then(e=>{
        setSeccess(e.success)
        form.reset()
      })
    });
    console.log(values)
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
      <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="john" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="john@gmail.com" {...field} type="text" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="********" {...field} type="password"/>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div>
        <div className={`${success ? " block" : " hidden"}`}>
        <AlertDestructive message="reussi" description="votre compte a ete cree avec succes"/>
       </div>
          <div className={`${!success && success!==""? " block" : " hidden"}`}>
            <AlertEchec message="erreur" description="votre compte n'a pas ete cree"/>
          </div>
        </div>
       
        <Button type="submit" className=" w-full">Se connect</Button>
      </form>
    </Form>
  )
}

