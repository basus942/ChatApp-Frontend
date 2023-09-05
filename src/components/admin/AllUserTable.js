import React, { useEffect, useState } from "react";

import { API } from "../../config/api";

const AllUserTable = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    API.get("/admin/users")
      .then((res) => setUsers(res.data.users))
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div className="overflow-x-auto text-black">
      <table className="table bg-slate-300 ">
        {/* head */}
        <thead className="text-black">
          <tr>
            <th>
              <label>
                <input type="checkbox" className="checkbox" />
              </label>
            </th>
            <th>Name</th>
            <th>Username/Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          {users.map((user) => (
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <td>
                <div className="flex items-center space-x-3">
                  <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                      <img src={user.image} alt="" />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">{user.name}</div>
                    <div className="text-sm opacity-50"></div>
                  </div>
                </div>
              </td>
              <td>
                {user.username}
                <br />
                <span className="badge badge-ghost badge-sm">{user.email}</span>
              </td>
              <td>{/* Purple */}</td>
              <th>
                <button className="btn btn-ghost btn-xs">details</button>
              </th>
            </tr>
          ))}
        </tbody>
        {/* foot */}
      </table>
    </div>
  );
};

export default AllUserTable;
