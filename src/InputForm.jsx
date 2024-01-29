import { Button } from "./Button";
import DefaultForm from "./DefaultForm";

export function InputForm({
  name,
  description,
  onName,
  onDescription,
  onSubmit,
  onEditName,
  onEditDescription,
  edit,
}) {
  //Initializing State
  //Declaring handlers
  //Return JSX
  // <form className="form" onSubmit={onSubmit}>
  //   <input
  //     type="text"
  //     placeholder="Todo Name"
  //     value={editItem.name}
  //     onChange={onEditName}
  //   />
  //   <input
  //     type="text"
  //     placeholder="Todo Description"
  //     value={editItem.description}
  //     onChange={onEditDescription}
  //   />
  //   <Button>Add todo</Button>
  // </form>;

  return (
    <>
      {edit ? (
        <DefaultForm>
          <form className="form" onSubmit={onSubmit}>
            <input
              className="form-input"
              type="text"
              placeholder="Todo Name"
              value={name}
              onChange={onEditName}
            />
            <input
              className="form-input"
              type="text"
              placeholder="Todo Description"
              value={description}
              onChange={onEditDescription}
            />
            <Button buttonState={true}>Add todo</Button>
          </form>
        </DefaultForm>
      ) : (
        <DefaultForm>
          <form className="form" onSubmit={onSubmit}>
            <input
              className="form-input"
              type="text"
              placeholder="Todo Name"
              value={name}
              onChange={onName}
            />
            <input
              type="text"
              className="form-input"
              placeholder="Todo Description"
              value={description}
              onChange={onDescription}
            />
            <Button>Add todo</Button>
          </form>
        </DefaultForm>
      )}

      {/* <DefaultForm>
        <form className="form" onSubmit={onSubmit}>
          <input
            type="text"
            placeholder="Todo Name"
            value={name}
            onChange={onName}
          />
          <input
            type="text"
            placeholder="Todo Description"
            value={description}
            onChange={onDescription}
          />
          <Button>Add todo</Button>
        </form>
      </DefaultForm> */}
    </>
  );
}
