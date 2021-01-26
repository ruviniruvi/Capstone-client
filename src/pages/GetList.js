import React, { useEffect, useState } from "react";
import { useQuery, gql } from "@apollo/client";
import { LOAD_LIST } from "../graphQL/queries";

function GetList() {
  const { error, loading, data } = useQuery(LOAD_LIST);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    if (data) {
      setUsers(data.getAllList);
    }
  }, [data]);

  return (
    <div>
      {/* {" "}
      {users.map((val) => {
        return <h1> {val.title}</h1>;
      })} */}
    </div>
  );
}

export default GetList;