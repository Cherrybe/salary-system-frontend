"use client";

import React, { useMemo, useState } from "react";
import { MaterialReactTable, type MRT_ColumnDef } from "material-react-table";
import { useAdminTable } from "./useAdminTable.hook";
import { UserSalary } from "./AdminTable.types";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {ListItemIcon, MenuItem } from "@mui/material";
import { EditSalaryModal } from "./EditSalaryModal";

export const AdminTable = () => {
  const { data, handleSaveRowEdits, loading, handleDeleteRow, handleUpdateRow } =
    useAdminTable();
    const [editingRow, setEditingRow] = useState<UserSalary | null>(null)
  const tableColumns = useMemo<MRT_ColumnDef<UserSalary>[]>(
    () => [
      {
        header: "Name",
        accessorKey: "name",
        size: 150,
      },
      {
        header: "Email",
        accessorKey: "email",
        size: 150,
      },
      {
        header: "Salary (Local)",
        accessorKey: "salary_local",
        size: 150,
        enableEditing: true,
        muiTableBodyCellEditTextFieldProps: { type: "number" },
      },
      {
        header: "Salary (Euro)",
        accessorKey: "salary_euro",
        size: 150,
        enableEditing: true,
        muiTableBodyCellEditTextFieldProps: { type: "number" },
      },
      {
        header: "Commission",
        accessorKey: "commission",
        size: 150,
        enableEditing: true,
        muiTableBodyCellEditTextFieldProps: { type: "number" },
      },
      {
        header: "Displayed Salary",
        accessorKey: "displayed_salary",
        size: 150,
        enableEditing: false,
        muiTableBodyCellEditTextFieldProps: { type: "number" },
      },
    ],
    []
  );

  return (
    <>
      <MaterialReactTable
        columns={tableColumns}
        data={data}
        enableStickyHeader
        onEditingRowSave={handleSaveRowEdits}
        state={{ showProgressBars: loading }}
        muiTableHeadCellProps={{
          sx: {
            fontWeight: "bold",
            fontSize: "14px",
          },
        }}
        muiTableBodyCellProps={{
          sx: {
            paddingLeft: "1.5em",
          },
        }}
        muiTableContainerProps={{
          sx: {
            maxHeight: "calc(100vh - 300px)",
          },
        }}
        muiToolbarAlertBannerProps={
          !loading && data.length === 0
            ? {
                color: "error",
                children: "Something went wrong with fetching the data",
              }
            : undefined
        }
        renderRowActionMenuItems={({ closeMenu, row }) => [
          <MenuItem
            key={0}
            onClick={() => {
              closeMenu();
              setEditingRow(row.original);
            }}
            sx={{ m: 0 }}
          >
            <ListItemIcon>
              <EditIcon />
            </ListItemIcon>
            Edit Salary Record
          </MenuItem>,
          <MenuItem
            key={0}
            onClick={() => {
              closeMenu();
              handleDeleteRow(row.original);
            }}
            sx={{ m: 0 }}
          >
            <ListItemIcon>
              <DeleteIcon />
            </ListItemIcon>
            Delete Salary Record
          </MenuItem>,
        ]}
        enableRowActions
        displayColumnDefOptions={{
          "mrt-row-actions": {
            header: "Actions",
          },
        }}
        positionActionsColumn="last"
      />

      {editingRow && (
        <EditSalaryModal
          open={!!editingRow}
          row={editingRow}
          onClose={() => setEditingRow(null)}
          onSave={async (updateRow) => {
            await handleUpdateRow(updateRow);
            setEditingRow(null);
          }}
        />
      )}
    </>
  );
};
