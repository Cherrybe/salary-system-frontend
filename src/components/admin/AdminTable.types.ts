import { MRT_Row } from "material-react-table";

export interface UserSalary {
  id: number;
  name: string;
  email: string;
  salary_local: number;
  salary_euro: number | null;
  commission: number;
  displayed_salary: number;
}

export type handleSaveType = {
  exitEditingMode: () => void;
  row: MRT_Row<UserSalary>;
  values: Partial<UserSalary>;
};