import TextField from "@mui/material/TextField";

export default function StandartTextField({ ...children }: any) {
  return <TextField {...children}  variant="outlined" />;
}
