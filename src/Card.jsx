import { Button } from "./Button";

export function Card({
  task,
  onDelete,
  onStatus,
  onEdit,
  editItem,
  edit,
  onSave,
}) {
  //Initializing State
  //Declaring handlers
  //Return JSX

  return (
    <div className="card">
      <p>Name : {task.name}</p>
      <p>Description : {task.description}</p>
      <p>
        Status :
        <span>
          <select value={task.status} onChange={() => onStatus(task.id)}>
            <option value="Not Completed">Not Completed</option>
            <option value="Completed">Completed</option>
          </select>
        </span>
      </p>
      <div className="button-container">
        <Button
          handle={edit == true ? () => onSave(task.id) : onEdit}
          el={task}
          buttonState={
            edit == true ? (editItem?.id === task.id ? false : true) : false
          }
        >
          {edit == true ? (editItem?.id === task.id ? "Save" : "Edit") : "Edit"}
        </Button>
        <Button
          handle={onDelete}
          buttonState={
            edit == true ? (editItem?.id === task.id ? true : false) : false
          }
          el={task.id}
        >
          Delete
        </Button>
      </div>
    </div>
  );
}
