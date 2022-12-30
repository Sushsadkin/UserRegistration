import React, { useState } from "react";
//import ReactTable from "react-table";


const Dashboard = () => {
  const data = JSON.parse(window.localStorage.getItem("userData"));
  const tableData = [
    {
      full_name: data.full_name,
      username: data.username,
      email_id: data.email_id,
      mobile_number: data.mobile_number,
      referral_username: data.referral_username,
    },
  ];

  const tableRows = tableData.map((info) => {
    return (
      <tr>
        <td>{info.full_name}</td>
        <td>{info.username}</td>
        <td>{info.email_id}</td>
        <td>{info.mobile_number}</td>
        <td>{info.referral_username}</td>
      </tr>
    );
  });

  return (
    <>
      <div>
        <h2>Dashboard</h2>
        <br />
        <div className="divPad">
          <table className="tabledata">
            <thead>
              <tr>
                <th>FullName</th>
                <th>UserName</th>
                <th>Email</th>
                <th>Mobile</th>
                <th>Referrer</th>
              </tr>
            </thead>
            <tbody>{tableRows}</tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
