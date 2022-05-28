/* eslint-disable react/prop-types */
/* eslint-disable react/function-component-definition */
/**
=========================================================
* Telegram bot React - v2.1.0
=========================================================

* Product Page: https://www.creative-tim.com/product/material-dashboard-react
* Copyright 2022 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

// Telegram bot React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDAvatar from "components/MDAvatar";
import MDBadge from "components/MDBadge";
import Button from "@mui/material/Button";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useDeleteUserApi } from "apis/Users";
import { useEffect, useState } from "react";
import Modal from "../modal";

export default function data() {
  const [open2, setOpen2] = useState([]);

  const { mutate: DeleteUserApi } = useDeleteUserApi();
  const [reresh, setreresh] = useState(false);
  const { users, error } = useSelector((state) => state.Users);
  const HandleDelete = (id) => {
    console.log(id, "id new");
    DeleteUserApi(id);
  };
  useEffect(() => {
    var numofmodals = [];
    for (var i = 0; i < users?.length; i++) {
      numofmodals.push(false);
    }
    setOpen2([...numofmodals]);
  }, [users]);
  const Author = ({ image, name, email }) => (
    <MDBox display="flex" alignItems="center" lineHeight={1}>
      <MDAvatar src={image} name={name} size="sm" />
      <MDBox ml={2} lineHeight={1}>
        <MDTypography display="block" variant="button" fontWeight="medium">
          {name}
        </MDTypography>
        <MDTypography variant="caption">{email}</MDTypography>
      </MDBox>
    </MDBox>
  );

  const Job = ({ title, description }) => (
    <MDBox lineHeight={1} textAlign="left">
      <MDTypography display="block" variant="caption" color="text" fontWeight="medium">
        {title}
      </MDTypography>
      <MDTypography variant="caption">{description}</MDTypography>
    </MDBox>
  );
  const handleClickOpen2 = (modalvalue, index) => {
    var allmodals = [...open2];
    console.log(index, "index");

    allmodals[index] = modalvalue;
    setOpen2(allmodals);
  };
  useEffect(() => {
    console.log(open2, "open2");
  }, [users, open2]);
  const handleClose2 = () => {
    setOpen2(false);
  };
  const Data = () => {
    let arrays = [];
    if (users) {
      for (var i = 0; i < users?.length; i++) {
        arrays.push({
          author: <Author image={team2} name={users[i].user_name} email="" />,
          function: <Job title={users[i].email} description="" />,
          status: (
            <MDBox ml={-1}>
              <MDBadge
                badgeContent={users[i].active ? "active" : "Not Active"}
                color={users[i].active ? "success" : "dark"}
                variant="gradient"
                size="sm"
              />
            </MDBox>
          ),
          employed: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {users[i].wallet}
            </MDTypography>
          ),
          action: (
            <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
              <Button
                onClick={(e) => {
                  let id = users[i]?.id;
                  console.log(id);
                  HandleDelete(e.target.id);
                }}
                style={{ backgroundColor: "#f44336", color: "white" }}
                variant="contained"
                id={users[i]?.id}
              >
                delete
              </Button>
              <Button
                onClick={(e) => {
                  handleClickOpen2(true, e.target.id);
                }}
                style={{
                  backgroundColor: "linear-gradient(195deg, #49a3f1, #1A73E8)",
                  color: "white",
                  marginInline: "5px",
                }}
                variant="contained"
                id={i}
              >
                Edit
              </Button>
              <Modal open={open2} data={users[i]} index={i} setopen={setOpen2} />
            </MDTypography>
          ),
        });
      }
    }

    return arrays;
  };
  return {
    columns: [
      { Header: "name", accessor: "author", width: "45%", align: "left" },
      { Header: "email", accessor: "function", align: "left" },
      { Header: "status", accessor: "status", align: "center" },
      { Header: "wallet", accessor: "employed", align: "center" },
      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: users ? [...Data()] : [],
  };
}
