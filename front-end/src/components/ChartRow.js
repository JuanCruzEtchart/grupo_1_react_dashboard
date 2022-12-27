import React from "react";

function ChartRow(props) {
  console.log(props);
  console.log(props.genre1);
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.length}</td>
      <td>{props.imdb_score}</td>
      <td>
        {/*   {props.genre1.map((genre, i) => (
          <td key={i}>{genre.name}</td>
        ))} */}
        {/* <td>{props.genre1.name}</td> */}
        {/*       <ul>
          {props.Categories.map((category, i) => (
            <li key={`category ${i}`}>{category}</li>
          ))}
        </ul> */}
      </td>
      <td>{props.Awards}</td>
    </tr>
  );
}

export default ChartRow;
