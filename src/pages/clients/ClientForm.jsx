import { Button } from "react-bootstrap";
import TitlePage from "../../components/TitlePage";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";

const initialClient = {
  id: 0,
  name: "",
  responsible: "",
  contactNumber: "",
  status: "",
};

export default function ClientForm() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [client, setClient] = useState(currentClient());

  function inputTextHandler(e) {
    const { name, value } = e.target;
    setClient({ ...client, [name]: value });
  }

  function currentClient() {
    if (id) {
      const getClientStorage = localStorage.getItem("clientStorage");
      const getClientList = JSON.parse(getClientStorage);
      if (getClientList && getClientList.length) {
        return getClientList.filter((e) => e.id === parseInt(id))[0];
      }
    } else {
      return initialClient;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    const getClientStorage = localStorage.getItem("clientStorage");
    let getClientList = JSON.parse(getClientStorage)
      ? JSON.parse(getClientStorage)
      : [];

    if (id) {
      getClientList = getClientList.map((e) => {
        if (e.id === parseInt(id)) {
          e.name = client.name;
          e.responsible = client.responsible;
          e.contactNumber = client.contactNumber;
          e.status = client.status;
        }
        return e;
      });
    } else {
      client.id = getClientList.length + 1;
      getClientList.push(client);
    }
    localStorage.setItem("clientStorage", JSON.stringify(getClientList));
    navigate(`/client/list/`);
  }

  return (
    <>
      <TitlePage title={"Client Detail " + (id !== undefined ? id : "")}>
        <Button
          variant="outline-secondary"
          onClick={() => {
            navigate(`/client/list/`);
          }}
        >
          <i className="fas fa-arrow-left me-2"></i>
          Return
        </Button>
      </TitlePage>
      <form className="row g-3 mt-2" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Customer Name"
            onChange={inputTextHandler}
            value={client.name}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Responsible</label>
          <input
            id="responsible"
            name="responsible"
            type="text"
            className="form-control"
            placeholder="Responsible Name"
            onChange={inputTextHandler}
            value={client.responsible}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Contact number</label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="number"
            className="form-control"
            placeholder="Contact Number"
            onChange={inputTextHandler}
            value={client.contactNumber}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Status</label>
          <select
            name="status"
            id="status"
            className="form-select"
            onChange={inputTextHandler}
            value={client.status}
          >
            <option defaultValue="Undefined">Choose...</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="col-md-12">
          <hr className="mt-0" />
          <button className="btn btn-outline-success col-md-12" type="submit">
            SAVE
          </button>
        </div>
      </form>
    </>
  );
}
