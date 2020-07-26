import React from "react";
import "./calendar.css";

function Calendar() {
  const [name, setName] = React.useState(
    window.localStorage.getItem("lunes")
      ? window.localStorage.getItem("lunes")
      : "No asignado"
  );
  const handleSubmit = (e) => {
    e.preventDefault();
    window.localStorage.setItem("lunes", name);
  };
  return (
    <div className="container">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Lunes</th>
            <th scope="col">Martes</th>
            <th scope="col">Miercoles</th>
            <th scope="col">Jueves</th>
            <th scope="col">Viernes</th>
            <th scope="col">Sabado</th>
            <th scope="col">Domigo</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <form onSubmit={handleSubmit}>
                <label>Name: {name}</label>
                <input
                  type="text"
                  name="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <input type="submit" value="Submit" />
              </form>
            </td>
            <td>hello</td>

            <td>hello</td>

            <td>hello</td>

            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
          </tr>
          <tr>
            <td>hello</td>

            <td>hello</td>

            <td>hello</td>

            <td>hello</td>

            <td>hello</td>
            <td>hello</td>
            <td>hello</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
