import Activity from "./Activity";

export default function ActivityList(props) {
  return (
    <>
      {props.activities.map((el) => (
        <Activity key={el.id} el={el} handleDeleteModal={props.handleDeleteModal} getActivity={props.getActivity} />
      ))}
    </>
  );
}
