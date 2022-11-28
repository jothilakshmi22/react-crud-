import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
function Add(props) {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const datas = {
    email,
    name,
    age,
  };
  //   console.log(data);
  let navi = useNavigate();

  function handlesubmit() {
    props.info.setdata([...props.info.data, datas]);
    navi("/all");
  }
  return (
    <div>
      <form>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Email address
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        {/* <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
          city
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div> */}
        <div class="mb-3">
          <label for="exampleInputName1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputName1"
            // aria-describedby="emailHelp"
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div class="mb-3">
          <label for="exampleInputAge" class="form-label">
            age
          </label>
          <input
            type="number"
            class="form-control"
            id="exampleInputAge"
            // aria-describedby="emailHelp"
            onChange={(e) => setage(e.target.value)}
          />
        </div>
        <button type="submit" class="btn btn-primary" onClick={handlesubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default Add;
