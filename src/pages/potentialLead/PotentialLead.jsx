// import React from "react";
// import "./potentialLead.css";
// import { DataGrid } from "@mui/x-data-grid";
// import { potentialLeadRows } from "../../dummyData";
// import { DeleteOutline } from "@mui/icons-material";
// import { Link } from "react-router-dom";
// import { useState } from "react";

// export default function PotentialLead() {
//   const [data, setData] = useState(potentialLeadRows);

//   const handleDelete = (id) => {
//     setData(data.filter((item) => item.id !== id));
//   };

//   const columns = [
//     { field: "id", headerName: "ID", width: 90, headerClassName: "leadHeader" },
//     {
//       field: "name",
//       headerName: "Name",
//       width: 150,
//       headerClassName: "leadHeader",
//     },
//     {
//       field: "email",
//       headerName: "Email",
//       width: 200,
//       headerClassName: "leadHeader",
//     },
//     {
//       field: "status",
//       headerName: "Status",
//       width: 120,
//       headerClassName: "leadHeader",
//     },
//     {
//       field: "phone",
//       headerName: "Phone",
//       width: 120,
//       headerClassName: "leadHeader",
//     },
//     {
//       field: "college",
//       headerName: "College",
//       width: 180,
//       headerClassName: "leadHeader",
//     },
//     {
//       field: "action",
//       headerName: "Action",
//       width: 150,
//       headerClassName: "leadHeader",
//       renderCell: (params) => {
//         return (
//           <>
//             <Link to={"/lead/" + params.row.id}>
//               <button className="userListEdit">Edit</button>
//             </Link>
//             <DeleteOutline
//               className="userListDelete"
//               onClick={() => handleDelete(params.row.id)}
//             />
//           </>
//         );
//       },
//     },
//   ];

//   return (
//     <div className="potentialLead">
//       <div className="potentialLead-title-div">
//         <h3>Potential Leads</h3>
//       </div>

//       <DataGrid
//         rows={data}
//         columns={columns}
//         initialState={{
//           pagination: {
//             paginationModel: { page: 0, pageSize: 5 },
//           },
//         }}
//         pageSizeOptions={[5, 10]}
//         checkboxSelection
//       />
//     </div>
//   );
// }

import React, { useEffect, useState } from "react";
import "./potentialLead.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useLeadContext } from "../../utils/contexts/LeadContext";

export default function PotentialLead() {
  // Get leads and deleteLead function from context
  const { leads, deleteLead } = useLeadContext();

  // State variable to store filtered leads
  const [filteredLeads, setFilteredLeads] = useState([]);

  useEffect(() => {
    // Filter the leads based on "Pending" and "Not answered" statuses
    const filteredData = leads.filter(
      (lead) => lead.status === "Pending" || lead.status === "Not answered"
    );

    // Set the filtered leads in the state
    setFilteredLeads(filteredData);
  }, [leads]);

  const handleDelete = (id) => {
    // Implement your deleteLead logic here if needed
  };

  const columns = [
    { field: "id", headerName: "ID", width: 90, headerClassName: "leadHeader" },
    {
      field: "name",
      headerName: "Name",
      width: 150,
      headerClassName: "leadHeader",
    },
    {
      field: "email",
      headerName: "Email",
      width: 200,
      headerClassName: "leadHeader",
    },
    {
      field: "status",
      headerName: "Status",
      width: 120,
      headerClassName: "leadHeader",
    },
    {
      field: "phone",
      headerName: "Phone",
      width: 120,
      headerClassName: "leadHeader",
    },
    {
      field: "college",
      headerName: "College",
      width: 180,
      headerClassName: "leadHeader",
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      headerClassName: "leadHeader",
      renderCell: (params) => {
        return (
          <>
            <Link to={"/lead/" + params.row.id}>
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
    <div className="potentialLead">
      <div className="potentialLead-title-div">
        <h3>Potential Leads</h3>
      </div>

      <DataGrid
        rows={filteredLeads} // Render the filtered leads data
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
