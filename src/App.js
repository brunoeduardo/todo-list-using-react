import "./App.css";
import { useEffect, useState } from "react";
import ActivityForm from "./components/ActivityForm";
import ActivityList from "./components/ActivityList";

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
  const [index, setIndex] = useState(0);
  const [activities, setActivities] = useState(initialStateActivity);
  const [activity, setActivity] = useState({id: 0});

  useEffect(() => {
    activities.length <= 0
      ? setIndex(1)
      : setIndex(
          Math.max.apply(
            Math,
            activities.map((el) => el.id)
          ) + 1
        );
  }, [activities]);

  function addActivity(acty) {
    setActivities([...activities, { ...acty, id: index }]);
  }

  function updateActivity(acty) {
    setActivities(
      activities.map((item) => (item.id === acty.id ? acty : item))
    );
    setActivity({ id: 0 });
  }

  function cancelActivity() {
    setActivity({ id: 0 });
  }

  function deleteActivity(id) {
    const newActivities = activities.filter((e) => e.id !== id);
    setActivities([...newActivities]);
  }

  function getActivity(id) {
    const activityItem = activities.filter((e) => e.id === id);
    setActivity(activityItem[0]);
  }

  return (
    <>
      <ActivityForm
        addActivity={addActivity}
        updateActivity={updateActivity}
        activities={activities}
        selectedActivity={activity}
      />
      <hr />
      <div className="mt-3 mt-4">
        <ActivityList
          activities={activities}
          deleteActivity={deleteActivity}
          cancelActivity={cancelActivity}
          addActivity={addActivity}
          getActivity={getActivity}
        />
      </div>
    </>
  );
}

export default App;
