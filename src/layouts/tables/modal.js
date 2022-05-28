import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";

export default function FormDialog({ open, setopen, index, data }) {
  const [user_name, setuser_name] = React.useState(data.user_name);
  const [chat_id, setchat_id] = React.useState("");
  const [contact, setcontact] = React.useState("");
  const [bank, setbank] = React.useState("");
  const [email, setemail] = React.useState("");

  const [bank_no, setbank_no] = React.useState("");
  const [wallet, setwallet] = React.useState("");
  const [wallet_add, setwallet_add] = React.useState("");
  const [kyc_status, setkyc_status] = React.useState("");
  const [active, setactive] = React.useState(false);
  const handleClickOpen = () => {
    //  setOpen(true);
  };

  const handleClose = () => {
    var allmodals = [...open];
    allmodals[index] = false;
    setopen([...allmodals]);
  };
  const submitUser = () => {
    /* CreateUserApi({
      email,
      user_name,

      kyc_status,
      bank_no,
      bank,
      wallet_add,
      wallet,
      contact,
      chat_id,
    });*/
  };
  return (
    <div>
      <Dialog open={open[index] ? open[index] : false} onClose={handleClose}>
        <DialogTitle> Create User</DialogTitle>
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
                id="name"
                label="Email Address"
                type="email"
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
    </div>
  );
}
