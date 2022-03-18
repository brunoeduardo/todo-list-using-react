import "./App.css";

function App() {
  const activities = [
    {
      id: 1,
      description: "First Activity",
    },
    {
      id: 2,
      description: "Second Activity",
    },
  ];

  return (
    <>
      <form>
        <input id="id" type="text" placeholder="Id" />
        <input id="description" type="text" placeholder="Description" />
        <button type="submit">Add Activity</button>
      </form>
      <div className="mt-3">
        <ul className="list-group">
          {activities.map((el) => (
            <li key={el.id} className="list-group-item">
              {el.id} - {el.description}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
