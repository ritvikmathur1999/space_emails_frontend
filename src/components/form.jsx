import "react";
import { ThemeProvider } from "@mui/material/styles";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Axios from "axios";
import theme from "./theme/theme";
export default function Forms() {
  const [data, getData] = useState({
    sender: " ",
    reciever: null,
    password: " ",
    subject: " ",
    message: " "
  });

  const [file, getFile] = useState();
  const url = "http://localhost:8080/send";
  const handleSubmit = async (event) => {
    try {
      Axios.post(url, data).then((res) => {
        console.log(res.data);
      });
    } catch (error) {
      console.log(error);
    }
    // console.log(data);

    const df = new FormData();
    df.append("file", file);

    Axios.post("http://localhost:8080/upload", df).then((res) => {
      console.log("NEW");
      console.log(res);
    });
    event.preventDefault();
  };

  return (
    <div className="form-main">
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          variant="filled"
          required
          color="warning"
          fullWidth
          id="email"
          label="sender's email address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => getData({ ...data, sender: e.target.value })}
        />
        <TextField
          margin="normal"
          variant="filled"
          color="warning"
          fullWidth
          id="email"
          label="reciever's email address"
          name="email"
          autoComplete="email"
          autoFocus
          onChange={(e) => getData({ ...data, reciever: e.target.value })}
        />
        <h5>or</h5>
        <h5>Attach a CSV file containing only emails</h5>
        <br></br>
        <input type="file" onChange={(e) => getFile(e.target.files[0])} />
        <TextField
          margin="normal"
          required
          color="warning"
          fullWidth
          variant="filled"
          name="password"
          label="password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => getData({ ...data, password: e.target.value })}
        />
        <TextField
          margin="normal"
          fullWidth
          name="subject"
          label="subject"
          color="warning"
          type="text"
          variant="filled"
          id="subject"
          onChange={(e) => getData({ ...data, subject: e.target.value })}
        />
        <TextField
          margin="normal"
          fullWidth
          name="message"
          label="message"
          color="warning"
          variant="filled"
          type="text"
          id="message"
          onChange={(e) => getData({ ...data, message: e.target.value })}
        />
        <ThemeProvider theme={theme}>
          <Button
            type="submit"
            fullWidth
            color="primary"
            variant="contained"
            onSubmit={handleSubmit}
            sx={{ mt: 3, mb: 2 }}
          >
            Send
          </Button>
        </ThemeProvider>
      </Box>
    </div>
  );
}
