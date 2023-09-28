import React from "react";
import "./lead.css";
import { useNavigate } from "react-router-dom";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useLeadContext } from "../../utils/contexts/LeadContext";



export default function Lead() {
  const { leads, deleteLead } = useLeadContext();
  
  const navigate = useNavigate();
  

  const handleDelete = (id) => {
    deleteLead(id);
  };


  const columns = [
    { field: "id", headerName: "ID", width: 90, headerClassName: "leadHeader" },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      headerClassName: "leadHeader",
      
    },
    { field: "email", headerName: "Email", width: 200, headerClassName: "leadHeader" },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      headerClassName: "leadHeader"
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
      headerClassName: "leadHeader"
    },
    {
      field: "college",
      headerName: "College",
      width: 180,
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
        <button onClick={()=>navigate('/newLead')}>ADD</button>
      </div>
      <DataGrid
        rows={leads}
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
