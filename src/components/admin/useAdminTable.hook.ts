'use client'

import { useEffect, useState } from 'react'
import { UserSalary, handleSaveType } from "./AdminTable.types";
import { toast } from 'sonner'

export const useAdminTable = () => {
  const [data, setData] = useState<UserSalary[]>([])
  const [loading, setLoading] = useState(true)
  const endurl = process.env.NEXT_PUBLIC_BACKEND_URL;

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true)
        const res = await fetch(`${endurl}/api/salaries`)
        const result = await res.json();
        const formattedData: UserSalary[] = result?.data?.map((item: UserSalary) => ({
          id: item.id,
          name: item.name,
          email: item.email,
          salary_local: Number(item.salary_local),
          salary_euro: item.salary_euro ? Number(item.salary_euro) : 0,
          commission: item.commission ? Number(item.commission) : 500,
          displayed_salary: item.displayed_salary
        }))

        setData(formattedData);

      } catch (error) {
        console.error(error)
        toast.error('Failed to fetch salary data')
      } finally {
        setLoading(false)
      }
    }
    // initial fetch
    fetchData();

    
  }, [endurl])

  // update salary record
  const handleSaveRowEdits = async ({ exitEditingMode, row, values}: handleSaveType) => {
    try {
      setLoading(true);
      const updateRow = {
        ...row.original,
        ...values
      }

      const res = await fetch(`${endurl}/api/salaries/${updateRow.id}`, {
        method: "PUT",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({
          name: updateRow.name,
          email: updateRow.email,
          salary_local: Number(updateRow.salary_local),
          salary_euro: Number(updateRow.salary_euro),
          commission: Number(updateRow.commission),
        })
      });

      if(!res.ok) toast.error('Failed to update salary record 🫠')

      // update table locally
      const updateData = [...data]
      updateData[row.index] = updateRow
      setData(updateData)
      toast.success('Salary updated successfully 😊')
      exitEditingMode()
    } catch (error) {
      toast.error(`${error ?? 'Failed to update salary 🫠'}`)
    }
  }

  // delete salary record
  const handleDeleteRow = async (row: UserSalary) => {
    try {
      setLoading(true);
      const res = await fetch(`${endurl}/api/salaries/${row.id}`, {
        method: "DELETE",
      });

      if (!res.ok) {
        toast.error("Failed to delete salary record 🫠");
        return;
      }

      // remove from local state
      setData((prev) => prev.filter((s) => s.id !== row.id));
      toast.success("Salary record deleted successfully 😊");
    } catch (error) {
      toast.error(`${error ?? "Failed to delete salary record 🫠"}`);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateRow = async (updatedRow: UserSalary) => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { id, displayed_salary, ...payload } = updatedRow;
    try {
      const res = await fetch(`${endurl}/api/salaries/${updatedRow.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Update failed");

      setData((prev) =>
        prev.map((row) => (row.id === updatedRow.id ? updatedRow : row))
      );
      toast.success("Salary record updated");
    } catch (error) {
      toast.error(`${error}`);
    }
  };



  return {
    data,
    loading,
    handleSaveRowEdits,
    handleDeleteRow,
    handleUpdateRow,
  };
}
