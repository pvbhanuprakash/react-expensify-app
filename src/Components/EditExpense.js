import React from "react";

const EditComponent = props => (
  <p>Editing the expense with ID {props.match.params.id}</p>
);

export default EditComponent;
