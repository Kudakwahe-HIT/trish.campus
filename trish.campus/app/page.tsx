import { AuthLayout } from "@/components/login/AuthLayout";
import { LoginCard } from "@/components/login/LoginCard";

export default function Home() {
  return (
    <AuthLayout
      headline={
        <>
          Digital services,
          <br />
          simplified.
        </>
      }
      supportingText="A unified workspace for managing HIT applications, applicants and student services."
    >
      <LoginCard />
    </AuthLayout>
  );
}
