import React, { useState } from "react";

function MyClass() {
  const [data, setData] = useState({
    input1: 0,
  });

  function handleButtonClick(event) {
    const { name } = event.target;
    setData({ ...data, [name]: data[name] + 1 });
  }

  function handleButtonOnClickDecrement(event){
    const { name } = event.target;
    setData({ ...data, [name]: data[name] - 1});
  }

  function handleButtonOnClickInput(event, value){
    const { name } = event.target;
    setData({ ...data, [name]: (data[name]) + (value) });
  }
  function handleButtonOnClickInputdecrement(event, value){
    const { name } = event.target;
    setData({ ...data, [name]: parseInt(data[name]) - parseInt(value) });
  }


  return (
    <center>
      <div className="ptags">
        <p className="one">input: {data.input1} </p>
      </div>
      <div>
        <button type="button" name="input1" onClick={handleButtonClick}>
            press
        </button>
        <button type="button" name="input1" onClick={handleButtonOnClickDecrement}>
          press
        </button>
        <br />
        <input type="number" id="ID"/>
        <button type="button" name="input1"  onClick={(event) => handleButtonOnClickInput(event, document.getElementById("ID").value)}>
            press
        </button>
        <br />
        <input type="number" id="id"/>
        <button type="button" name="input1"  onClick={(event) => handleButtonOnClickInputdecrement(event, document.getElementById("id").value)}>
            press
        </button>
       </div>
    </center>
  );
}

export default MyClass;
