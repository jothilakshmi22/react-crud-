import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function Edit(props) {
  let param = useParams();

  const [email, setemail] = useState(props.info.data[param.id].email);
  const [name, setname] = useState(props.info.data[param.id].name);
  const [age, setage] = useState(props.info.data[param.id].age);
  const datas = {
    email,
    name,
    age,
  };

  //   console.log(data);
  let navi = useNavigate();

  function handlesubmit(i) {
    props.info.data.splice(param.id, 1, datas);

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
