// pages/sign-up.tsx

import SignupForm from "@/components/signupForm";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

import Link from "next/link";

const SignUpPage = () => {

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">Create an Account</CardTitle>
        </CardHeader>
        <CardContent>
          <SignupForm/>
        </CardContent>
        <CardFooter className="pt-6 flex flex-col">
          <div className="text-center text-sm">
            Already have an account?{" "}
            <Link href="/login" className="text-primary hover:underline">
              Login
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;
