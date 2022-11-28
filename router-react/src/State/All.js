import React from "react";
import { useNavigate } from "react-router-dom";

function All(props) {
  const handledelete = (i) => {
    let newdata = [...props.info.data];
    newdata.splice(i, 1);
    props.info.setdata(newdata);
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

        {props.info.data.map((ele, i) => {
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
