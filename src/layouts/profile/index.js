import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import OutlinedInput from "@mui/material/OutlinedInput";

import MDBox from "components/MDBox";
import Button from "@mui/material/Button";

// Telegram bot React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import { useProfileApi, useChangeEmailApi, useChangePasswordApi } from "../../apis/Profile";
// Overview page components
import Header from "layouts/profile/components/Header";
import Card from "@mui/material/Card";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Icon from "@mui/material/Icon";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
// Telegram bot React components
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";

// Telegram bot React base styles
import breakpoints from "assets/theme/base/breakpoints";

// Images
import burceMars from "assets/images/bruce-mars.jpg";
import backgroundImage from "assets/images/bot2.webp";
function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
function Overview() {
  const [firstname, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const { data: ProfileApi } = useProfileApi();
  const { mutate: ChangeEmailApi } = useChangeEmailApi();
  const { mutate: ChangePasswordApi } = useChangePasswordApi();

  const handleChange = (event) => {
    setName(event.target.value);
  };
  useEffect(() => {
    const data = ProfileApi;
    if (data) {
      setfirstName(data?.data?.first_name);
      setlastName(data?.data?.last_name);
      setemail(data?.data?.email);
    }

    console.log(data);
  }, [ProfileApi]);

  const handleSubmitForChangeEmail = () => {
    const result = ChangeEmailApi({ email: "a7med.abdo323@gmail.com" });
    console.log(result, "result");
  };
  const handleSubmitForChangePassword = () => {
    const result = ChangePasswordApi({ password: "a7med.abdo323" });
    console.log(result, "result");
  };
  const [tabsOrientation, setTabsOrientation] = useState("horizontal");
  const [tabValue, setTabValue] = useState(0);

  useEffect(() => {
    // A function that sets the orientation state of the tabs.
    function handleTabsOrientation() {
      return window.innerWidth < breakpoints.values.sm
        ? setTabsOrientation("vertical")
        : setTabsOrientation("horizontal");
    }

    /** 
     The event listener that's calling the handleTabsOrientation function when resizing the window.
    */
    window.addEventListener("resize", handleTabsOrientation);

    // Call the handleTabsOrientation function to set the state with the initial value.
    handleTabsOrientation();

    // Remove event listener on cleanup
    return () => window.removeEventListener("resize", handleTabsOrientation);
  }, [tabsOrientation]);

  const handleSetTabValue = (event, newValue) => setTabValue(newValue);

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
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <MDAvatar src={burceMars} alt="profile-image" size="xl" shadow="sm" />
            </Grid>
            <Grid item>
              <MDBox height="100%" mt={0.5} lineHeight={1}>
                <MDTypography variant="h5" fontWeight="medium">
                  hello
                </MDTypography>
                <MDTypography variant="button" color="text" fontWeight="regular">
                  CEO / Co-Founder
                </MDTypography>
              </MDBox>
            </Grid>
            <Grid item xs={12} md={6} lg={4} sx={{ ml: "auto" }}>
              <AppBar position="static">
                <Tabs orientation={tabsOrientation} value={tabValue} onChange={handleSetTabValue}>
                  <Tab
                    label="Profile"
                    icon={
                      <Icon fontSize="small" sx={{ mt: -0.25 }}>
                        home
                      </Icon>
                    }
                  />
                  <Tab
                    label="Change Email"
                    icon={
                      <Icon fontSize="small" sx={{ mt: -0.25 }}>
                        email
                      </Icon>
                    }
                  />
                  <Tab
                    label="Change Password"
                    icon={
                      <Icon fontSize="small" sx={{ mt: -0.25 }}>
                        settings
                      </Icon>
                    }
                  />
                </Tabs>
              </AppBar>
            </Grid>
          </Grid>
          <TabPanel value={tabValue} index={0}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} xl={4}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel htmlFor="component-outlined">First Name</InputLabel>
                  <OutlinedInput
                    style={{ width: "100%" }}
                    id="component-outlined"
                    value={firstname}
                    // onChange={(e) => setfirstName(e.target.value)}
                    label="Name"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} xl={4}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel htmlFor="component-outlined">Last Name</InputLabel>
                  <OutlinedInput
                    style={{ width: "100%" }}
                    id="component-outlined"
                    value={lastName}
                    // onChange={(e) => setlastName(e.target.value)}
                    label="Name"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} xl={4}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel htmlFor="component-outlined">Email </InputLabel>
                  <OutlinedInput
                    style={{ width: "100%" }}
                    id="component-outlined"
                    value={email}
                    // onChange={(e) => setemail(e.target.value)}
                    label="Name"
                  />
                </FormControl>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={tabValue} index={1}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} xl={6}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel htmlFor="component-outlined">Change Email </InputLabel>
                  <OutlinedInput
                    style={{ width: "100%" }}
                    id="component-outlined"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    label="Email"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} xl={4}>
                <FormControl style={{ width: "100%" }}>
                  <Button
                    style={{ color: "white" }}
                    variant="contained"
                    onClick={handleSubmitForChangeEmail}
                  >
                    Submit
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value={tabValue} index={2}>
            <Grid container spacing={1}>
              <Grid item xs={12} md={6} xl={6}>
                <FormControl style={{ width: "100%" }}>
                  <InputLabel htmlFor="component-outlined">Change Password </InputLabel>
                  <OutlinedInput
                    style={{ width: "100%" }}
                    id="component-outlined"
                    value={password}
                    onChange={(e) => setpassword(e.target.value)}
                    label="Password"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={6} xl={4}>
                <FormControl style={{ width: "100%" }}>
                  <Button
                    style={{ color: "white" }}
                    variant="contained"
                    onClick={handleSubmitForChangePassword}
                  >
                    Submit
                  </Button>
                </FormControl>
              </Grid>
            </Grid>
          </TabPanel>
        </Card>
      </MDBox>

      <MDBox mt={5} mb={3}></MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Overview;
