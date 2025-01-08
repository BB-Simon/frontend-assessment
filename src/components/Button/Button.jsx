import * as React from "react";
import Button from "@mui/material/Button";

export default function EditButton({ onClick, ...rest }) {
  return (
    <Button onClick={onClick} variant="contained">
      Edit
    </Button>
  );
}
