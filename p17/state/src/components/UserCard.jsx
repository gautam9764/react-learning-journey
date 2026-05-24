import { useState } from "react";

function UserCard() {
  const [user, setUser] = useState({
    name: "Gautam",
    age: 20
  });

  const increaseAge = () => {
    setUser(prev => ({
      ...prev,
      age: prev.age + 1
    }));
  };

  const decreaseAge = () => {
    setUser(prev => ({
      ...prev,
      age: prev.age > 0 ? prev.age - 1 : 0
    }));
  };

  const updateName = (newName) => {
    setUser(prev => ({
      ...prev,
      name: newName
    }));
  };

  return (
    <div className="state-container">
      <h2>User Object State</h2>
      <div className="user-card">
        <h3>Name: <span className="value">{user.name}</span></h3>
        <h3>Age: <span className="value">{user.age}</span></h3>
      </div>
      <div className="button-group">
        <button onClick={decreaseAge} className="btn btn-danger">Decrease Age</button>
        <button onClick={increaseAge} className="btn btn-success">Increase Age</button>
        <button onClick={() => updateName("Raj")} className="btn btn-info">Change Name</button>
      </div>
    </div>
  );
}

export default UserCard;
