import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";
import { DeleteOutline } from "@mui/icons-material";

import { UserContext } from "..//..//utils/contexts/UserContext";
import "../../assets/styles/common-table.css";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

function Users() {
  const navigate = useNavigate();
  const { usersData, setUsersData } = useContext(UserContext);

  console.log("data in usersList", usersData);

  const handleDelete = (id) => {
    setUsersData(usersData.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "Id", width: 90, headerClassName: "userHeader" },
    {
      field: "name",
      headerName: "User",
      width: 150,
      headerClassName: "userHeader",
      renderCell: (params) => {
        return <div className="userListUser">{params.row.name}</div>;
      },
    },
    {
      field: "email",
      headerName: "Email",
      width: 230,
      headerClassName: "userHeader",
    },
    {
      field: "mobileNo",
      headerName: "MobileNo",
      width: 150,
      headerClassName: "userHeader",
    },
    {
      field: "role",
      headerName: "Role",
      width: 130,
      headerClassName: "userHeader",
    },
    {
      field: "active",
      headerName: "Active",
      width: 130,
      headerClassName: "userHeader",
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      headerClassName: "userHeader",
      renderCell: (params) => {
        return (
          <>
            <EditIcon
              className="userListEdit"
              onClick={() => navigate(`/user/${params.row.id}`)}
            />

            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <Topbar />
      <div className="container">
        <Sidebar />
        <div className="userList">
          <div className="userList-title-div">
            <h3>Users</h3>
            <button onClick={() => navigate("/newUser")} className="add-btn">
              ADD
            </button>
          </div>
          {usersData && (
            <DataGrid
              rows={usersData}
              columns={columns}
              initialState={{
                pagination: {
                  paginationModel: { page: 0, pageSize: 5 },
                },
              }}
              pageSizeOptions={[5, 10]}
              checkboxSelection
            />
          )}
        </div>
      </div>
    </>
  );
}

export default Users;
