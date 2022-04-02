import { useState } from "react";
import { Button, FormControl, InputGroup } from "react-bootstrap";
import TitlePage from "../../components/TitlePage";
import { useNavigate } from "react-router-dom";

//   {
//     id: 1,
//     name: "Customer name",
//     responsible: "Responsible Name",
//     contact: "Teste Contact",
//     status: "Active",
//   },
//   {
//     id: 2,
//     name: "Amazon",
//     responsible: "Steve",
//     contact: "19999888777",
//     status: "Active",
//   },
// ];

export default function ClientList() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const getClientStorage = localStorage.getItem("clientStorage");
  const clientList = [...JSON.parse(getClientStorage)];

  const handleInputChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const clientFilter = clientList.filter((client) => {
    return Object.values(client)
      .join(" ")
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
  });

  const newClient = () => {
    navigate("/client/detail");
  };

  return (
    <>
      <TitlePage title={"Client List"}>
        <Button variant="outline-secondary" onClick={newClient}>
          <i className="fas fa-plus me-2"></i>
          New Client
        </Button>
      </TitlePage>
      <InputGroup className="mb-3 mt-3">
        <InputGroup.Text className="">Search</InputGroup.Text>
        <FormControl onChange={handleInputChange} placeholder="Term" />
      </InputGroup>
      <table className="table table-stripet table-hover">
        <thead className="table-dark mt-3">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Name</th>
            <th scope="col">Responsible</th>
            <th scope="col">Contact</th>
            <th scope="col">Status</th>
            <th scope="col">Options</th>
          </tr>
        </thead>
        <tbody>
          {clientFilter.map((client) => (
            <tr key={client.id}>
              <td>{client.id}</td>
              <td>{client.name}</td>
              <td>{client.responsible}</td>
              <td>{client.contactNumber}</td>
              <td>{client.status}</td>
              <td>
                <div>
                  <button
                    className="btn btn-sm btn-outline-primary me-2"
                    onClick={() => {
                      navigate(`/client/detail/${client.id}`);
                    }}
                  >
                    <i className="fas fa-user-edit me-2"></i>
                    Edit
                  </button>
                  <button className="btn btn-sm btn-outline-danger me-2">
                    <i className="fas fa-user-times me-2"></i>
                    Disable
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
