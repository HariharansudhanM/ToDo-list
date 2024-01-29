export function MiddleSection({ onFilter, filter }) {
  //Initializing State
  //Declaring handlers
  //Return JSX
  return (
    <div className="middle">
      <p>
        <em>My Todos</em>
      </p>
      <p>
        Status Filter :
        <span>
          <select value={filter} onChange={onFilter}>
            <option value="All">All</option>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
        </span>
      </p>
    </div>
  );
}
