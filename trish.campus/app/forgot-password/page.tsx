import type { Metadata } from "next";
import { AuthLayout } from "@/components/login/AuthLayout";
import { ForgotPasswordCard } from "@/components/login/ForgotPasswordCard";

export const metadata: Metadata = {
  title: "Reset password — HIT Campus Assistant",
};

export default function ForgotPasswordPage() {
  return (
    <AuthLayout
      headline={
        <>
          Back to secure
          <br />
          access, shortly.
        </>
      }
      supportingText="We'll help you get back into your HIT Campus Assistant account in a few steps."
    >
      <ForgotPasswordCard />
    </AuthLayout>
  );
}
