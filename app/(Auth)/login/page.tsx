// pages/sign-up.tsx

import LoginForm from "@/components/loginpage";
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card";

import Link from "next/link";

const SignUpPage = () => {

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50">
      <Card className="w-full max-w-md p-8">
        <CardHeader>
          <CardTitle className="text-2xl font-semibold text-center">Login your Account</CardTitle>
        </CardHeader>
        <CardContent>
          <LoginForm/>
        </CardContent>
        <CardFooter className="pt-6 flex flex-col">
          <div className="text-center text-sm">
            New here?{" "}
            <Link href="/sign-up" className="text-primary hover:underline">
              Create an account
            </Link>
           </div>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUpPage;
