import Button from "@mui/material/Button";

const DefaultButton = ({ children, ...attr }: any) => {
  return (
    <Button {...attr} >
      {children}
    </Button>
  );
};

export default DefaultButton;
