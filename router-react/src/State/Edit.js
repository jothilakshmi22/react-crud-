import React, { useState, useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { context } from "../App";

function Edit() {
  let param = useParams();
  const value = useContext(context);

  const [email, setemail] = useState(value.data[param.id].email);
  const [name, setname] = useState(value.data[param.id].name);
  const [age, setage] = useState(value.data[param.id].age);
  const datas = {
    email,
    name,
    age,
  };

  //   console.log(data);
  let navi = useNavigate();

  function handlesubmit() {
    value.data.splice(param.id, 1, datas);
    // let newinfo = [...props.info.data];
    // newinfo.splice(param.id, 1, datas);
    // props.info.data(newinfo);
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
            value={email}
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
            value={name}
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
            value={age}
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

export default Edit;
