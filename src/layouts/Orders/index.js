import { useEffect } from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";

// Telegram bot React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

// Telegram bot React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import DataTable from "examples/Orders/DataTable";
import { useGetOrdersApi } from "apis/Orders";
import Button from "@mui/material/Button";
import * as React from "react";

// Data
import authorsTableData from "layouts/Orders/data/authorsTableData";
import projectsTableData from "layouts/Orders/data/projectsTableData";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { useCreateUserApi } from "apis/Users";
function Tables() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const [email, setemail] = React.useState("");
  const [user_name, setuser_name] = React.useState("");
  const [chat_id, setchat_id] = React.useState("");
  const [contact, setcontact] = React.useState("");
  const [bank, setbank] = React.useState("");
  const [bank_no, setbank_no] = React.useState("");
  const [wallet, setwallet] = React.useState("");
  const [wallet_add, setwallet_add] = React.useState("");
  const [kyc_status, setkyc_status] = React.useState("");
  const [active, setactive] = React.useState(false);
  const { mutate: CreateUserApi } = useCreateUserApi();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const { columns, rows } = authorsTableData();
  const { columns: pColumns, rows: pRows } = projectsTableData();
  const { data: GetOrdersApi } = useGetOrdersApi();
  useEffect(() => {
    const data = GetOrdersApi;
  }, []);
  const submitUser = () => {
    CreateUserApi({
      email,
      user_name,

      kyc_status,
      bank_no,
      bank,
      wallet_add,
      wallet,
      contact,
      chat_id,
    });
  };
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox pt={6} pb={3}>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <Card>
              <MDBox
                mx={2}
                mt={-3}
                py={3}
                px={2}
                variant="gradient"
                bgColor="info"
                borderRadius="lg"
                coloredShadow="info"
                style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}
              >
                <MDTypography variant="h6" color="white">
                  Orders
                </MDTypography>
                <Button
                  style={{ display: "none" }}
                  onClick={handleClickOpen}
                  variant="contained"
                  color="error"
                >
                  Create
                </Button>
              </MDBox>
              <MDBox pt={3}>
                <DataTable
                  table={{ columns, rows }}
                  isSorted={false}
                  entriesPerPage={false}
                  showTotalEntries={false}
                  noEndBorder
                />
              </MDBox>
            </Card>
          </Grid>
        </Grid>

        <Dialog open={open} onClose={handleClose}>
          <DialogTitle> Create Orders</DialogTitle>
          <DialogContent>
            <Grid container spacing={6}>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="user_name"
                  label="user name "
                  fullWidth
                  variant="outlined"
                  value={user_name}
                  onChange={(e) => setuser_name(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="order_date"
                  label="order_date "
                  type="date"
                  fullWidth
                  variant="outlined"
                  value={email}
                  onChange={(e) => setemail(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="chat_id"
                  label="chat id "
                  fullWidth
                  variant="outlined"
                  value={chat_id}
                  onChange={(e) => setchat_id(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="contact"
                  label=" contact "
                  fullWidth
                  variant="outlined"
                  value={contact}
                  onChange={(e) => setcontact(e.target.value)}
                />
              </Grid>{" "}
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="bank"
                  label=" bank "
                  fullWidth
                  variant="outlined"
                  value={bank}
                  onChange={(e) => setbank(e.target.value)}
                />
              </Grid>{" "}
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="bank_no"
                  label="bank no  "
                  fullWidth
                  variant="outlined"
                  value={bank_no}
                  onChange={(e) => setbank_no(e.target.value)}
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="wallet"
                  label=" wallet "
                  fullWidth
                  variant="outlined"
                  value={wallet}
                  onChange={(e) => setwallet(e.target.value)}
                />
              </Grid>{" "}
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="wallet_add"
                  label=" wallet address "
                  fullWidth
                  variant="outlined"
                  value={wallet_add}
                  onChange={(e) => setwallet_add(e.target.value)}
                />
              </Grid>{" "}
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="kyc_status"
                  label=" kyc_status "
                  fullWidth
                  variant="outlined"
                  value={kyc_status}
                  onChange={(e) => setkyc_status(e.target.value)}
                />
              </Grid>{" "}
              <Grid item xs={6}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="active"
                  label=" active "
                  fullWidth
                  variant="outlined"
                />
              </Grid>{" "}
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={submitUser}>Create</Button>
          </DialogActions>
        </Dialog>
      </MDBox>

      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
