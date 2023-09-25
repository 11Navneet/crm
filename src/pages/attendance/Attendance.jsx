import React from "react";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";
import { attendanceRows } from "../../dummyData";
import { useNavigate } from "react-router-dom";
import "./attendance.css";

export default function Attendance() {
  const [data, setData] = useState(attendanceRows);

  const navigate = useNavigate();
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    {
      field: "id",
      headerName: "Id",
      width: 90,
      headerClassName: "attendanceHeader",
    },
    {
      field: "date",
      headerName: "Date",
      width: 200,
      headerClassName: "attendanceHeader",
    },
    {
      field: "day",
      headerName: "Day",
      width: 150,
      headerClassName: "attendanceHeader",
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    {
      field: "task",
      headerName: "Task",
      width: 120,
      headerClassName: "attendanceHeader",
    },

    {
      field: "login",
      headerName: "Login Time",
      width: 160,
      headerClassName: "attendanceHeader",
    },
    {
      field: "logout",
      headerName: "Logout Time",
      width: 150,
      headerClassName: "attendanceHeader",
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      headerClassName: "attendanceHeader",
      renderCell: (params) => {
        return (
          <>
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
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
    <div className="attendance">
      <div className="attendance-title-div">
        <h3>Attendance</h3>
        <button onClick={() => navigate("/newUser")}>ADD</button>
      </div>
      <DataGrid
        rows={data}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
    </div>
  );
}
