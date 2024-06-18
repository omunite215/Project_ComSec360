import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { InferSelectModel } from "drizzle-orm";
import type { Users_Table } from "@/db/schema";
import EditAccountUser from "./EditAccountUser";
import DeleteAccountUser from "./DeleteAccountUser";

type Props = {
  user?: InferSelectModel<typeof Users_Table>;
};

const demo = {
  type: "account_user",
  email: "om21@gmail.com",
  firstName: "om",
  lastName: "patel",
  password: "sdadadada",
  id: "sdadd",
} as Props;
const InviteTable = ({ user }: Props) => {
  return (
    <Table>
      <TableCaption>A list of Invites Sent to New Account Users.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>First Name</TableHead>
          <TableHead>Last Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Update</TableHead>
          <TableHead>Delete</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">James</TableCell>
          <TableCell>Bond</TableCell>
          <TableCell>james.bond@gmail.com</TableCell>
          <TableCell>
            <EditAccountUser user={demo} />
          </TableCell>
          <TableCell>
            <DeleteAccountUser id="asdad" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default InviteTable;
