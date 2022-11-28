import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { context } from "../App";

function All(props) {
  const value = useContext(context);

  const handledelete = (i) => {
    let newdata = [...value.data];
    newdata.splice(i, 1);
    value.setdata(newdata);
  };
  let navi = useNavigate();

  return (
    <div>
      <table class="table">
        <thead>
          <tr>
            <th scope="col">id</th>
            <th scope="col">Email</th>
            <th scope="col">Name</th>
            <th scope="col">Age</th>
          </tr>
        </thead>

        {value.data.map((ele, i) => {
          return (
            <tr key={i}>
              {/* <th scope="row">{i}</th> */}
              <td>{i + 1}</td>
              <td>{ele.email}</td>
              <td>{ele.name}</td>
              <td>{ele.age}</td>
              <td>
                <button
                  onClick={() => {
                    navi("/edit/" + i);
                  }}
                >
                  edit
                </button>
                <button
                  onClick={() => {
                    handledelete(i);
                  }}
                >
                  delete
                </button>
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
}

export default All;
