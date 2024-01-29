import { useState } from "react";
import "./App.css";
import { Card } from "./Card";
import { Header } from "./Header";
import { InputForm } from "./InputForm";
import { MiddleSection } from "./MiddleSection";
import { Section } from "./Section";

let editItem;
function App() {
  ////////Initialize state
  let [name, setName] = useState("");
  let [description, setDescription] = useState("");
  let [task, setTask] = useState([]);
  let [filter, setFilter] = useState("All");
  let [edit, setEdit] = useState(false);

  let array;

  /////////Functions
  function handleSumbit(e) {
    e.preventDefault();
    let key = new Date().getMilliseconds();

    const newItem = {
      name: name,
      description: description,
      id: key,
      status: "Not Completed",
    };
    setTask([...task, newItem]);

    setName("");
    setDescription("");
  }

  function handleName(e) {
    setName(e.target.value);
  }
  function handleDescription(e) {
    setDescription(e.target.value);
  }

  function handleDelete(e) {
    setTask(task.filter((el) => el.id !== e));
  }

  function handleStatus(id) {
    setTask(() =>
      task.map((el) => {
        if (el.id == id) {
          let a = "";
          if (el.status == "Not Completed") {
            a = "Completed";
          } else {
            a = "Not Completed";
          }
          return { ...el, status: a };
        } else {
          return el;
        }
      })
    );
  }

  function handleFilter(e) {
    e.preventDefault();
    let a = e.target.value;
    setFilter(a);
  }

  function handleEdit(e) {
    editItem = e;
    setName(e.name);
    setDescription(e.description);
    setEdit(!edit);
  }

  function handleEditName(e) {
    setName(e.target.value);
  }
  function handleEditDescription(e) {
    setDescription(e.target.value);
  }

  function handleSave(id) {
    let a = task.map((el) => {
      if (el.id == id) {
        return { ...el, name: name, description: description };
      } else {
        return el;
      }
    });

    setTask(a);
    setEdit(!edit);
    setName("");
    setDescription("");
  }

  if (filter == "Completed") {
    array = task.filter((e) => e.status == "Completed");
  }
  if (filter == "Not Completed") {
    array = task.filter((e) => e.status == "Not Completed");
  }

  return (
    <div className="container">
      <Header />
      <InputForm
        name={name}
        description={description}
        onName={handleName}
        onDescription={handleDescription}
        onSubmit={handleSumbit}
        onEditName={handleEditName}
        onEditDescription={handleEditDescription}
        edit={edit}
      />
      <MiddleSection onFilter={handleFilter} filter={filter} />
      <Section>
        {filter == "All"
          ? task.map((e) => (
              <Card
                task={e}
                key={e.id}
                onDelete={handleDelete}
                onStatus={handleStatus}
                onEdit={handleEdit}
                editItem={editItem}
                edit={edit}
                onSave={handleSave}
              />
            ))
          : filter == "Not Completed"
          ? array.map((e) => (
              <Card
                task={e}
                key={e.id}
                onDelete={handleDelete}
                onStatus={handleStatus}
                onEdit={handleEdit}
                editItem={editItem}
                edit={edit}
                onSave={handleSave}
              />
            ))
          : filter == "Completed" &&
            array.map((e) => (
              <Card
                task={e}
                key={e.id}
                onDelete={handleDelete}
                onStatus={handleStatus}
                onEdit={handleEdit}
                editItem={editItem}
                edit={edit}
                onSave={handleSave}
              />
            ))}
      </Section>
    </div>
  );
}

export default App;
