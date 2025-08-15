import React from 'react'
import { AdminTable } from '@/components/admin/AdminTable'

export default function Admin() {
  return (
    <main>
      <section className="text-center mb-8">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
          Salary Management System
        </h1>
        <p className="mt-2 text-gray-600">
          View, Edit and Delete user salary records information.
        </p>
      </section>

      {/* Admin table */}
      <AdminTable />
    </main>
  );
}
