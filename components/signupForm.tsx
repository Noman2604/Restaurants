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
import { auth } from "@/lib/firebase"; // Your firebase configuration
import {useRouter} from "next/navigation"
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

// Define form validation schema using Zod
const UserSchema = z.object({
  name: z.string().min(1, { message: "Name is required" }),
  email: z.string().email({ message: "Invalid email address" }),
  password: z
    .string()
    .min(6, { message: "Password must be at least 6 characters" }),
});

export type SignUpFormInputs = z.infer<typeof UserSchema>;

const UserForm = () => {
  // Use react-hook-form with Zod resolver
  const form = useForm<SignUpFormInputs>({
    resolver: zodResolver(UserSchema),
    mode: "onChange",
  });
  const router= useRouter();

  // onSubmit function for handling Firebase signup
  const onSubmit: SubmitHandler<SignUpFormInputs> = async (data) => {
    const { name, email, password } = data;
    try {
      // Create user with email and password
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);

      // If user creation was successful, update the profile with display name
      if (userCredential.user) {
        await updateProfile(userCredential.user, { displayName: name });
      }

      alert("User registered successfully with username: " + name);
      router.push("/");
    } catch (error: any) {
      alert("Error creating user: " + error.message);
    }
  };

  return (
    <Form {...form}>
      <form
        className="space-y-6 sm:max-w-sm w-full"
        onSubmit={form.handleSubmit(onSubmit)}
      >
        {/* Name field */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input placeholder="Name" autoFocus {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        
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
        <Button type="submit" className="w-full">Sign Up</Button>
      </form>
    </Form>
  );
};

export default UserForm;
