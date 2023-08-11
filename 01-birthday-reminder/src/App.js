import React, { useState } from "react";
import data from "./data";
import List from "./List";
function App() {
  const [users, setUsers] = useState(data);
  console.log(data);
  const handleClick = () => {
    setUsers([]);
  };
  return (
    <div className="wrapper">
      <h2>{users.length} Birthdays Today</h2>
      {users.map((item) => (
        <List key={item.id} {...item} users={users} setUsers={setUsers} />
      ))}
      <button className="btn-clear" onClick={handleClick}>
        Clear All
      </button>
    </div>
  );
}

export default App;
