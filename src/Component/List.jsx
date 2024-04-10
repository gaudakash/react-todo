import ItemList from "./ItemList";

const List = ({ task, deletebtn }) => {
  return (
    <div className="item-Container">
      {task.map((item) => (
        <ItemList
          key={item.Name}
          deletebtn={deletebtn}
          Name={item.Name}
          dueDate={item.dueDate}
        />
      ))}
    </div>
  );
};

export default List;
