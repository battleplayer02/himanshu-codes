import { useState } from 'react'
export default ({ sendUserName, socketVar }) => {
  const [name, setname] = useState("");
  function localName(e) {
    setname(e.target.value)
  }
  function handelClick(){
    socketVar.emit('username', name);
  }
  return (

    <div className="header">
      <div className="heading">Code With Friends</div>
      <div className="input-name">
        <input type="text" placeholder="Enter Name" onChange={localName} value={name} />
        <i
          onClick={handelClick}
          className="fa fa-microphone"
          style={{ color: "black", fontSize: "18px" }}
        ></i>
      </div>
    </div>
  );
};
