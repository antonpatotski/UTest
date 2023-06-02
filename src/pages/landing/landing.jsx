import { CRUDForm } from "./form/form";
import { UsersTable } from "./table/table";

import './landing.scss';

export const Landing = () => {
  return (
    <div className="landing">
      <CRUDForm />
      <UsersTable></UsersTable>
    </div>
  )
}