import React, {useContext} from "react";
import { useNavigate } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import EditIcon from '@mui/icons-material/Edit';
import { DeleteOutline } from "@mui/icons-material";

import {AttendanceContext} from '..//..//utils/contexts/AttendanceContext'
import "./attendance.css";

export default function Attendance() {

  const navigate = useNavigate();
  const {attendanceData, setAttendanceData} = useContext(AttendanceContext);

  console.log('data in usersList',attendanceData);

  const handleDelete = (id) => {
    setAttendanceData(attendanceData.filter((item) => item.id !== id));
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
      renderCell: (params) => {
        return <div className="userListUser">{params.row.date}</div>;
      },
    },
    {
      field: "loginTime",
      headerName: "Login Time",
      width: 160,
      headerClassName: "attendanceHeader",
    },
    {
      field: "logoutTime",
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
            <EditIcon
              className="userListEdit"
              onClick={() => navigate(`/attendance/${params.row.id}`)}
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
    <div className="attendance">
      <div className="attendance-title-div">
        <h3>Attendance</h3>
        <button onClick={() => navigate("/markAttendance")}>ADD</button>
      </div>
      {
        attendanceData &&       
        <DataGrid
        rows={attendanceData}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />
      }
    </div>
  );
}
