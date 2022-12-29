import React from "react";

function ChartRow(props) {
  /*   console.log(props);
  console.log(props.genre1); */
  return (
    <tr>
      <td className="font-weight-bold text-dark">{props.name}</td>
      <td>{props.length}</td>
      <td>{props.imdb_score}</td>
      <td>{props.genre1.name}</td>
      <td>{props.release_year}</td>
    </tr>
  );
}

export default ChartRow;
