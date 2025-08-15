import { UserForm } from "@/components/userForm/UserForm";

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center justify-center px-4">
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Salary Management System
        </h1>
        <p className="mt-2 text-gray-600">
          Enter user details below to record salary information.
        </p>
      </section>

      {/* User Form */}
      <UserForm />
    </main>
  );
}
