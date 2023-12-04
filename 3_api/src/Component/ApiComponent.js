import React, { useEffect, useState } from "react";

const RenderComponents = ({ users }) => {
  return (
    <ol>
      {users.map((val) => {
        return (
          <>
            <li>
              <ul>
                <li>First Name: {val.firstname}</li>
                <li>Last Name: {val.lastname}</li>
                <li>Email: {val.email}</li>
                <li>Birth Date: {val.birthDate}</li>
              </ul>
              <br />
            </li>
          </>
        );
      })}
    </ol>
  );
};

function ApiComponent({ val }) {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let response = await fetch(`https://jsonplaceholder.org/users`);
        let data = await response.json();
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log("error occured");
      }
    };
    fetchData();
  }, []);

  return (
    <>
      {val === true && <h3>Users are console logged. </h3>}
      {val === true && users.length > 0 && <RenderComponents users={users} />}
    </>
  );
}

export default ApiComponent;
