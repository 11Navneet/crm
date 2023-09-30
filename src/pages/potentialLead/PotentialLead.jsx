import React, { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";

import { DataGrid } from "@mui/x-data-grid";
import EditIcon from "@mui/icons-material/Edit";

import { LeadContext } from "../../utils/contexts/LeadContext";
import "../../assets/styles/common-table.css";

import Topbar from "../../components/topbar/Topbar";
import Sidebar from "../../components/sidebar/Sidebar";

export default function PotentialLead() {
  const navigate = useNavigate();
  const { leadsData } = useContext(LeadContext);

  const [filteredLeads, setFilteredLeads] = useState([]);

  useEffect(() => {
    const filteredData = leadsData.filter(
      (lead) => lead.status === "Recall" || lead.status === "Not answered"
    );

    setFilteredLeads(filteredData);
  }, [leadsData]);

  const columns = [
    { field: "id", headerName: "Id", width: 90, headerClassName: "userHeader" },
    {
      field: "name",
      headerName: "Name",
      width: 200,
      headerClassName: "userHeader",
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName: "userHeader",
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      headerClassName: "userHeader",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
      headerClassName: "userHeader",
    },
    {
      field: "college",
      headerName: "College",
      width: 180,
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
              onClick={() => navigate(`/lead/${params.row.id}`)}
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
            <h3>Potential Leads</h3>
          </div>
          {filteredLeads && (
            <DataGrid
              rows={filteredLeads}
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
