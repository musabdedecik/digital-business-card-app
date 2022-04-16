import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
const ContainedButton = ({ children, ...attr }: any) => {
  return (
    <Button {...attr} variant="contained">
      {children}
    </Button>
  );
};
export default ContainedButton;
