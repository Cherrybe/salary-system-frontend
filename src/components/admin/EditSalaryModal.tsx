"use client";

import React, { useState } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  TextField,
  Stack,
} from "@mui/material";
import { UserSalary } from "./AdminTable.types";
import { Button } from "../button/Button";

interface EditSalaryModalProps {
  open: boolean;
  row: UserSalary;
  onClose: () => void;
  onSave: (updatedRow: UserSalary) => void;
}

export const EditSalaryModal: React.FC<EditSalaryModalProps> = ({
  open,
  row,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<UserSalary>(row);

  const handleChange = (field: keyof UserSalary, value: string | number) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
      <DialogTitle>Edit Salary Record</DialogTitle>
      <DialogContent>
        <Stack spacing={2} sx={{ mt: 1 }}>
          <TextField
            label="Name"
            value={formData.name}
            onChange={(e) => handleChange("name", e.target.value)}
            fullWidth
          />
          <TextField
            label="Email"
            value={formData.email}
            onChange={(e) => handleChange("email", e.target.value)}
            fullWidth
          />
          <TextField
            label="Salary (Local)"
            type="number"
            value={formData.salary_local}
            onChange={(e) =>
              handleChange("salary_local", parseFloat(e.target.value))
            }
            fullWidth
          />
          <TextField
            label="Salary (Euro)"
            type="number"
            value={formData.salary_euro}
            onChange={(e) =>
              handleChange("salary_euro", parseFloat(e.target.value))
            }
            fullWidth
          />
          <TextField
            label="Commission"
            type="number"
            value={formData.commission}
            onChange={(e) =>
              handleChange("commission", parseFloat(e.target.value))
            }
            fullWidth
          />
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} variant="ghost" size="lg">
          Cancel
        </Button>
        <Button onClick={handleSubmit} variant="default" size="lg">
          Update
        </Button>
      </DialogActions>
    </Dialog>
  );
};
