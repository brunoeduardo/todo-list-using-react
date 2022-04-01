import { useEffect, useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ActivityForm from "./ActivityForm";
import ActivityList from "./ActivityList";
import activityApi from "../../services/activity";
import TitlePage from "../../components/TitlePage";

function Activity() {
  const [showActivityModal, setShowActivityModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState({ id: 0 });

  const handleActivityModal = () => setShowActivityModal(!showActivityModal);
  const handleDeleteModal = (id = 0) => {
    if (id > 0) {
      const activityItem = activities.filter((e) => e.id === id);
      setActivity(activityItem[0]);
    }

    setShowDeleteModal(!showDeleteModal);
  };

  useEffect(() => {
    getAllActivities();
  }, []);

  const getAllActivities = async () => {
    const { data } = await activityApi.get("activity");
    if (data && data.length) setActivities(data);
  };

  const newActivity = () => {
    handleActivityModal();
    setActivity({ id: 0 });
  };

  const cancelActivity = () => {
    handleActivityModal();
  };

  const saveActivity = async (activity, isPost = true) => {
    const response = isPost
      ? await activityApi.post("activity", activity)
      : await activityApi.put(`activity/${activity.id}`, activity);
    return response.data;
  };

  const addActivity = async (acty) => {
    try {
      await saveActivity(acty);
      console.log("Success! Save Activity");
      handleActivityModal();
      getAllActivities();
    } catch (error) {
      console.log("ERROR - Save Activity");
    }
  };

  const updateActivity = async (acty) => {
    try {
      await saveActivity(acty, false);
      console.log("Success! Save Activity");
      handleActivityModal();
      getAllActivities();
    } catch (error) {
      console.log("ERROR - Save Activity");
    }
  };

  const deleteActivity = async (id) => {
    try {
      await activityApi.delete(`activity/${id}`);
      handleDeleteModal();
      getAllActivities();
      console.log("Success! Delete Activity");
    } catch (error) {
      console.log("ERROR - Delete Activity");
    }
  };

  const getActivity = (id) => {
    const activityItem = activities.filter((e) => e.id === id);
    setActivity(activityItem[0]);
    handleActivityModal();
  };

  return (
    <>
      <TitlePage title={`Activity List`}>
        <Button variant="outline-secondary" onClick={newActivity}>
          <i className="fas fa-plus"></i>
          New Activity
        </Button>
      </TitlePage>
      <div className="mt-3 mt-4">
        <ActivityList
          activities={activities}
          getActivity={getActivity}
          handleDeleteModal={handleDeleteModal}
        />
      </div>

      <Modal show={showActivityModal} onHide={handleActivityModal}>
        <Modal.Header closeButton>
          <Modal.Title>Activity {activity.id ? activity.id : ""}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ActivityForm
            addActivity={addActivity}
            cancelActivity={cancelActivity}
            updateActivity={updateActivity}
            selectedActivity={activity}
            activities={activities}
          />
        </Modal.Body>
      </Modal>

      <Modal size="sm" show={showDeleteModal}>
        <Modal.Header>
          <Modal.Title>
            Delete activity {activity.id ? activity.id : ""}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Are you sure that you want to delete the activity{" "}
          {activity.id ? activity.id : ""}?{" "}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="outline-danger" onClick={() => handleDeleteModal()}>
            <i className="fas fa-check me-2"></i>
            Close
          </Button>
          <Button
            variant="outline-success"
            onClick={() => deleteActivity(activity.id)}
          >
            <i className="fas fa-times me-2"></i>
            Confirm
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default Activity;
