import React from "react";

const List = ({ id, name, age, image, users, setUsers }) => {
  const handleDelete = (id) => {
    const updatedUsers = users.filter((item) => item.id !== id);
    setUsers(updatedUsers);
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          marginBottom: "1rem",
          gap: "2rem",
          width: "300px",
          borderRadius: "1rem",
          padding: "0.5rem",
          boxShadow: "rgba(255, 255, 255, 0.6) 0px 2px 8px 0px",
        }}
      >
        <img
          src={image}
          alt={name}
          width={"100px"}
          height={"100px"}
          style={{ objectFit: "cover" }}
        />
        <div className="info">
          <h3>{name}</h3>
          <p className="age">{age}</p>
          <button className="btn" onClick={() => handleDelete(id)}>
            Delete User
          </button>
        </div>
      </div>
    </>
  );
};

export default List;
