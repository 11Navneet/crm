import React from "react";
import "./potentialLead.css";
import { DataGrid } from "@mui/x-data-grid";
import { potentialLeadRows } from "../../dummyData";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState } from "react";

export default function PotentialLead() {
  const [data, setData] = useState(potentialLeadRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90, headerClassName: "potentialLeadHeader" },
    {
      field: "user",
      headerName: "User",
      width: 200,
      headerClassName: "potentialLeadHeader",
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
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName: "potentialLeadHeader",
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      headerClassName: "potentialLeadHeader",
    },
    {
      field: "college",
      headerName: "College",
      width: 160,
      headerClassName: "potentialLeadHeader",
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      headerClassName: "potentialLeadHeader",
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
  return(
    <div className="potentialLead">

      <div className="potentialLead-title-div">
        <h3>Potential Leads</h3>
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
  )
}
