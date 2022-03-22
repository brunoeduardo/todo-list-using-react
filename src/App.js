import "./App.css";
import { useState } from "react";

let initialStateActivity = [
  {
    id: 1,
    description: "First Activity",
    title: "First Title",
    priority: 1,
  },
  {
    id: 2,
    description: "Second Activity",
    title: "Second Title",
    priority: 2,
  },
];

function App() {
  const [activities, setActivity] = useState(initialStateActivity);

  function addActivity(e) {
    e.preventDefault();

    const activityItem = {
      id: parseInt(document.getElementById("id").value),
      description: document.getElementById("description").value,
      title: document.getElementById("title").value,
      priority: document.getElementById("priority").value,
    };

    setActivity([...activities, { ...activityItem }]);
  }

  function priorityLabel(param) {
    const Priority = {
      1: "low",
      2: "normal",
      3: "high",
    };

    return Priority[param] || " - ";
  }

  function priorityLabelIcon(param) {
    const Priority = {
      1: "smile",
      2: "meh",
      3: "frown",
    };

    return Priority[param] || " - ";
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
            value={activities.length + 1}
            disabled
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Priority</label>
          <select id="priority" className="form-select">
            <option defaultValue="0">Choose...</option>
            <option value="1">Low</option>
            <option value="2">Normal</option>
            <option value="3">High</option>
          </select>
        </div>
        <div className="col-md-6">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            id="title"
            type="text"
            className="form-control"
            placeholder="Title"
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
          <div
            key={el.id}
            className={"card mb-2 " + priorityLabel(el.priority)}
          >
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">
                  {el.id} - {el.title}
                </h5>
                <h6>
                  Priority:
                  <i
                    className={
                      "ms-1 me-1 fa-regular label-priority fa-face-" +
                      priorityLabelIcon(el.priority)
                    }
                  ></i>
                  <span className="label-priority">
                    {priorityLabel(el.priority)}
                  </span>
                </h6>
              </div>
              <p className="card-text">{el.description}</p>
              <div className="d-flex justify-content-end">
                <button className="btn btn-outline-primary me-2">
                  <i className="fas fa-pen me-2"> </i>
                  Edit
                </button>
                <button className="btn btn-outline-danger">
                  <i className="fas fa-trash me-2"> </i>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
