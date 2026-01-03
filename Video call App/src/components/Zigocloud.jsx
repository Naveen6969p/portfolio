import React from "react";
import { useState } from "react";
import { useCallback  } from "react";
import { useNavigate } from "react-router-dom";


const Zigocloud = () => {
  const [value, setValue] = useState();
  const navigate = useNavigate();

  const joinRoom = useCallback(() => {
  navigate(`/room/${value}`)
  }, [navigate,value]);

  return (
    <div>
      <input
        type="text"
        placeholder="enter your room id here"
        onChange={(event) => setValue(event.target.value)}
      />
      <button onClick={joinRoom}>Join</button>
    </div>
  );
};

export default Zigocloud;
