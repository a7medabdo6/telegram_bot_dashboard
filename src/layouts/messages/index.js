import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";

import MDBox from "components/MDBox";
import Button from "@mui/material/Button";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";

import Card from "@mui/material/Card";

import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Posts from "./posts";
import backgroundImage from "assets/images/bot2.webp";
import TextField from "@mui/material/TextField";
import { useCreatePostApi } from "apis/Posts";

function Index() {
  const [header, setheader] = useState("");
  const [text, settext] = useState("");
  const [chat_id, setchat_id] = useState("");

  const [value, setValue] = useState("Controlled");
  const { mutate: createPostApi } = useCreatePostApi();

  const handlesubmit = (event) => {
    setValue(event.target.value);
    createPostApi({ header, text, chat_id });
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox mb={2} />

      <MDBox position="relative" mb={5}>
        <MDBox
          display="flex"
          alignItems="center"
          position="relative"
          minHeight="18.75rem"
          borderRadius="xl"
          sx={{
            backgroundImage: ({ functions: { rgba, linearGradient }, palette: { gradients } }) =>
              `${linearGradient(
                rgba(gradients.info.main, 0.6),
                rgba(gradients.info.state, 0.6)
              )}, url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "50%",
            overflow: "hidden",
          }}
        />
        <Card
          sx={{
            position: "relative",
            mt: -8,
            mx: 3,
            py: 2,
            px: 2,
          }}
        >
          <Grid container spacing={3} alignItems="self-end">
            <Grid item xs={12} md={6} lg={8}>
              <Typography>Send Message</Typography>
              <div
                style={{
                  margin: "auto",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <TextField
                  id="outlined-multiline-flexible"
                  label="Telegram ID"
                  multiline
                  maxRows={4}
                  style={{ width: "100%", marginBlock: "15px" }}
                  onChange={(e) => setchat_id(e.target.value)}
                  value={chat_id}
                />
                <TextField
                  id="outlined-multiline-flexible"
                  label="Header"
                  multiline
                  maxRows={4}
                  style={{ width: "100%", marginBlock: "15px" }}
                  onChange={(e) => setheader(e.target.value)}
                  value={header}
                />
                <br />
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  style={{ width: "100%" }}
                  rows={4}
                  onChange={(e) => settext(e.target.value)}
                  value={text}
                />
                <Button
                  style={{ width: "50%", color: "white", marginBlock: "15px" }}
                  variant="contained"
                  onClick={handlesubmit}
                >
                  Send
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <Typography style={{ marginBottom: "15px" }}> All Posts</Typography>

              <Box>
                <Card>
                  <Posts />
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Card>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Index;
