import React from "react";

const CourseListRow = ({ isHeader, textFirstCell, textSecondCell }) => {
  return (
    <tr>
      {isHeader && textSecondCell === undefined && (
        <th colSpan={2}>{textFirstCell}</th>
      )}
      {isHeader && textSecondCell !== undefined && (
        <>
          <th>{textFirstCell}</th>
          <th>{textSecondCell}</th>
        </>
      )}
      {!isHeader && (
        <>
          <td>{textFirstCell}</td>
          <td>{textSecondCell}</td>
        </>
      )}
    </tr>
  );
};

export default CourseListRow;
