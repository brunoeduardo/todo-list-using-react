import { useEffect, useState } from "react";

const initialActivity = {
  id: 0,
  title: "",
  priority: 0,
  description: "",
};

export default function ActivityForm(props) {
  const [activity, setActivity] = useState(currentActivity());

  useEffect(() => {
    if (props.selectedActivity.id !== 0) {
      setActivity(props.selectedActivity);
    }
  }, [props.selectedActivity]);

  function inputTextHandler(e) {
    const { name, value } = e.target;
    setActivity({ ...activity, [name]: value });
  }

  function currentActivity() {
    if (props.selectedActivity.id !== 0) {
      return props.selectedActivity;
    } else {
      return initialActivity;
    }
  }

  function handleSubmit(e) {
    e.preventDefault();

    if(props.selectedActivity.id) {
      props.updateActivity(activity);
    } else {
      props.addActivity(activity);
    }

    setActivity(initialActivity)
  }

  return (
    <>
      
      <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Title</label>
          <input
            id="title"
            name="title"
            type="text"
            className="form-control"
            placeholder="Title"
            onChange={inputTextHandler}
            value={activity.title}
          />
        </div>
        <div className="col-md-6">
          <label className="form-label">Priority</label>
          <select
            name="priority"
            id="priority"
            className="form-select"
            onChange={inputTextHandler}
            value={activity.priority}
          >
            <option defaultValue="Undefined">Choose...</option>
            <option value="Low">Low</option>
            <option value="Normal">Normal</option>
            <option value="High">High</option>
          </select>
        </div>
        <div className="col-md-12">
          <label htmlFor="description" className="form-label">
            Description
          </label>
          <textarea
            id="description"
            name="description"
            className="form-control"
            type="text"
            placeholder="Description"
            onChange={inputTextHandler}
            value={activity.description}
          />
        </div>
        <div className="col-md-12">
        <hr className="mt-0"/>
          {activity.id === 0 ? (
            <button
              className="btn btn-outline-success col-md-12"
              type="submit"
            >
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
          )}
        </div>
      </form>
    </>
  );
}
