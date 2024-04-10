import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Addtask from "./Component/Addtask";
import Heading from "./Component/Heading";
import List from "./Component/List";
import { useState } from "react";
import Welcome from "./Component/Welcome";

function App() {
  const [taskItem, setTaskItem] = useState([]);

  const handelNewList = (newName, dueDate) => {
    setTaskItem((CurVal) => [...CurVal, { Name: newName, dueDate: dueDate }]);
  };

  const handelDeleteItem = (ListbtnName) => {
    const newListitem = taskItem.filter(
      (listItem) => listItem.Name !== ListbtnName
    );
    setTaskItem(newListitem);
  };

  return (
    <center className="To-do-Container">
      <Heading />
      <Addtask onNewList={handelNewList} />
      <Welcome Errortask={taskItem} />
      <List task={taskItem} deletebtn={handelDeleteItem} />
    </center>
  );
}

export default App;
