import React from "react";

import { Users, OrganisationName } from "./types";
import Organisation from "./components/Organisation";
import TableView from "./components/TableView/TableView";

type Props = {
  organisationName: OrganisationName;
  users: Users;
};

const AccountUsers = ({ organisationName, users }: Props) => {
  return (
    <div>
      <div className="p-strip">
        <div className="row">
          <div className="col-12">
            <h1>Account users</h1>
          </div>
        </div>
      </div>
      <section className="p-strip u-no-padding--top">
        <div className="row">
          <div className="col-6">
            <Organisation name={organisationName} />
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <TableView users={users} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default AccountUsers;
