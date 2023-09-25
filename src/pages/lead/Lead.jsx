import React from "react";
import "./lead.css";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { leadRows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function Lead() {
  const [data, setData] = useState(leadRows);

  const navigate = useNavigate();

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90, headerClassName: "leadHeader" },
    {
      field: "user",
      headerName: "User",
      width: 200,
      headerClassName: "leadHeader",
      renderCell: (params) => {
        return (
          <div className="userListUser">
            <img className="userListImg" src={params.row.avatar} alt="" />
            {params.row.username}
          </div>
        );
      },
    },
    { field: "email", headerName: "Email", width: 200, headerClassName: "leadHeader" },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      headerClassName: "leadHeader"
    },
    {
      field: "college",
      headerName: "College",
      width: 160,
      headerClassName: "leadHeader"
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      headerClassName: "leadHeader",
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
    <div className="lead">
      <div className="lead-title-div">
        <h3>Leads</h3>
        <button onClick={()=>navigate('/newUser')}>ADD</button>
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
