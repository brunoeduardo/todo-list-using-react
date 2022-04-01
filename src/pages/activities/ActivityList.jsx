import ActivityItem from "./ActivityItem";

export default function ActivityList(props) {
  return (
    <>
      {props.activities.map((el) => (
        <ActivityItem
          key={el.id}
          el={el}
          handleDeleteModal={props.handleDeleteModal}
          getActivity={props.getActivity}
        />
      ))}
    </>
  );
}
