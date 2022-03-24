import Activity from "./Activity";

export default function ActivityList(props) {
  return (
    <>
      {props.activities.map((el) => (
        <Activity key={el.id} el={el} deleteActivity={props.deleteActivity} getActivity={props.getActivity} />
      ))}
    </>
  );
}
