"use client";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { auth } from "@/lib/firebase"; // Your Firebase config
import { signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useRouter } from "next/navigation"; // Import useRouter
import { toast } from "@/hooks/use-toast";

// Define form validation schema using Zod
const LoginSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type LoginFormInputs = z.infer<typeof LoginSchema>;

const LoginForm = () => {
  // Use react-hook-form with Zod resolver
  const form = useForm<LoginFormInputs>({
    resolver: zodResolver(LoginSchema),
    mode: "onChange",
  });
  const router = useRouter();

  // onSubmit function for handling Firebase login
  const onSubmit: SubmitHandler<LoginFormInputs> = async (data) => {
    const { email, password } = data;
    try {
      // Authenticate user with email and password
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      
      alert("User Login successfully ");
      router.push("/");
    } catch (error: any) {
      // Show error toast if login fails
      alert("Error Login user: " + error.message);
    }
  };

  return (
    <Form {...form}>
      <form
        className="space-y-6 sm:max-w-sm w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Email field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Password field */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input type="password" placeholder="Password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Submit button */}
        <Button type="submit" className="w-full">Login</Button>
      </form>
    </Form>
  );
};

export default LoginForm;
