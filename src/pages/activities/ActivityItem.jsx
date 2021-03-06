export default function ActivityItem(props) {
  function priorityLabelIcon(param, icon = true) {
    switch (param.toLowerCase()) {
      case "low":
        return icon ? "smile" : "success";
      case "normal":
        return icon ? "meh" : "dark";
      case "high":
        return icon ? "frown" : "warning";
      default:
        return " - ";
    }
  }

  return (
    <div
      key={props.id}
      className={
        "card mb-2 border-" + priorityLabelIcon(props.el.priority, false)
      }
    >
      <div className="card-body">
        <div className="d-flex justify-content-between">
          <h5 className="card-title">
            {props.el.id} - {props.el.title}
          </h5>
          <h6>
            Priority:
            <span
              className={
                "label-priority text-" +
                priorityLabelIcon(props.el.priority, false)
              }
            >
              <i
                className={
                  "ms-1 me-1 fa-regular label-priority fa-face-" +
                  priorityLabelIcon(props.el.priority)
                }
              ></i>
              {props.el.priority.toLowerCase()}
            </span>
          </h6>
        </div>
        <p className="card-text">{props.el.description}</p>
        <div className="d-flex justify-content-end">
          <button
            className="btn btn-outline-primary me-2"
            onClick={() => props.getActivity(props.el.id)}
          >
            <i className="fas fa-pen me-2"> </i>
            Edit
          </button>
          <button
            className="btn btn-outline-danger"
            onClick={() => props.handleDeleteModal(props.el.id)}
          >
            <i className="fas fa-trash me-2"> </i>
            Delete
          </button>
        </div>
      </div>
    </div>
  );
}
