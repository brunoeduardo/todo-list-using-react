import "./App.css";
import { useState } from "react";

let initialStateActivity = [
  {
    id: 1,
    description: "First Activity",
  },
  {
    id: 2,
    description: "Second Activity",
  },
];

function App() {
  const [activities, setActivity] = useState(initialStateActivity);

  function addActivity(e) {
    e.preventDefault();

    const activityItem = {
      id: parseInt(document.getElementById("id").value),
      description: document.getElementById("description").value,
    };

    setActivity([...activities, { ...activityItem }]);
  }

  return (
    <>
      <form className="row g-3">
        <div className="col-md-6">
          <label htmlFor="id" className="form-label">
            Id
          </label>
          <input
            id="id"
            type="number"
            className="form-control"
            placeholder="Id"
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <input
            id="description"
            type="text"
            className="form-control"
            placeholder="Description"
          />
        </div>
        <button
          className="btn btn-outline-secondary"
          type="submit"
          onClick={addActivity}
        >
          Add Activity
        </button>
      </form>
      <hr />
      <div className="mt-3 mt-4">
        {activities.map((el) => (
          <div key={el.id} className="card mb-2">
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{el.id} - title</h5>
                <h6>Priority: Normal</h6>
              </div>
              <p className="card-text">{el.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
