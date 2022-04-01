import React from "react";
import { Button } from "react-bootstrap";
import TitlePage from "../../components/TitlePage";
import { useNavigate, useParams } from "react-router-dom";

export default function ClientForm(props) {
  const navigate = useNavigate();
  const { id } = useParams();

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
      <form className="row g-3 mt-2">
        {/* onSubmit={handleSubmit} */}
        <div className="col-md-6">
          <label className="form-label">Name</label>
          <input
            id="name"
            name="name"
            type="text"
            className="form-control"
            placeholder="Customer Name"
          />
          {/* onChange={inputTextHandler}
          value={activity.title} */}
        </div>
        <div className="col-md-6">
          <label className="form-label">Responsible</label>
          <input
            id="responsible"
            name="responsible"
            type="text"
            className="form-control"
            placeholder="Responsible Name"
          />
          {/* onChange={inputTextHandler}
          value={activity.title} */}
        </div>
        <div className="col-md-6">
          <label className="form-label">Contact number</label>
          <input
            id="contactNumber"
            name="contactNumber"
            type="text"
            className="form-control"
            placeholder="Contact Number"
          />
          {/* onChange={inputTextHandler}
          value={activity.title} */}
        </div>
        <div className="col-md-6">
          <label className="form-label">Status</label>
          <select name="status" id="status" className="form-select">
            {/* onChange={inputTextHandler}
            value={activity.priority} */}
            <option defaultValue="Undefined">Choose...</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>
        <div className="col-md-12">
          <hr className="mt-0" />
          {/* {activity.id === 0 ? (
            <button className="btn btn-outline-success col-md-12" type="submit">
              SAVE
            </button>
          ) : (
            <>
              <div className="row g-1">
                <div className="col-md-6">
                  <button
                    className="btn btn-outline-success col-md-12"
                    type="submit"
                  >
                    <i className="fas fa-floppy-disk me-2"></i>
                    Save
                  </button>
                </div>
                <div className="col-md-6">
                  <button
                    className="btn btn-outline-warning col-md-12"
                    type="button"
                    onClick={props.cancelActivity}
                  >
                    <i className="fas fa-xmark me-2"></i>
                    Cancel
                  </button>
                </div>
              </div>
            </>
          )} */}
        </div>
      </form>
    </>
  );
}
