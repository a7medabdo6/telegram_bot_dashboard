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
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// Images
import team2 from "assets/images/team-2.jpg";
import team3 from "assets/images/team-3.jpg";
import team4 from "assets/images/team-4.jpg";
import { useSelector, useDispatch } from "react-redux";
import { useChangeStatusApi, useDeleteOrderApi } from "apis/Orders";
import { useEffect, useState } from "react";
import Modal from "../modal";
import Toaster from "components/Toaster/index";
export default function data() {
  const [open2, setOpen2] = useState([]);

  const { mutate: updateOrderStatusApi } = useChangeStatusApi();
  const { isLoading, error, mutate: DeleteOrderApi } = useDeleteOrderApi();

  const [reresh, setreresh] = useState(false);
  const { orders } = useSelector((state) => state.Orders);
  const HandleupdateStatus = (id, status) => {
    console.log(id, "id new");
    updateOrderStatusApi({ id, status });
  };
  useEffect(() => {
    console.log(orders, "orders");
  }, [orders]);
  useEffect(() => {
    console.log(orders, "orders");
    var numofmodals = [];
    for (var i = 0; i < orders?.length; i++) {
      numofmodals.push(false);
    }
    setOpen2([...numofmodals]);
  }, [orders]);
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
  }, [orders, open2]);
  const handleClose2 = () => {
    setOpen2(false);
  };
  const renderToaster = () => {
    if (true) {
      return <Toaster success={true} />;
    } else {
      return;
    }
  };
  const notify = (success) => {
    if (success) {
      toast.success("order deleted Successfully !");
    } else {
      toast.error("error!");
    }
  };
  const Data = () => {
    let arrays = [];
    if (orders) {
      for (var i = 0; i < orders?.length; i++) {
        arrays.push({
          author: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {orders[i].id}
            </MDTypography>
          ),
          function: <Job title={orders[i].chat_id} description="" />,
          Date: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {orders[i].order_date}
            </MDTypography>
          ),
          employed: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {orders[i].pair}
            </MDTypography>
          ),
          Crypto: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {orders[i].crypto_value}
            </MDTypography>
          ),
          Fiat: (
            <MDTypography component="a" href="#" variant="caption" color="text" fontWeight="medium">
              {orders[i].fiat_value}
            </MDTypography>
          ),
          Status: (
            <MDBox ml={-1}>
              <MDBadge
                badgeContent={orders[i].status == "pending" ? "pending" : "completed"}
                color={orders[i].status == "pending" ? "dark" : "success"}
                variant="gradient"
                size="sm"
              />
            </MDBox>
          ),
          action: (
            <MDTypography component="div" variant="caption" color="text" fontWeight="medium">
              <Button
                /*onClick={(e) => {
                  handleClickOpen2(true, e.target.id);
                }}*/
                onClick={(e) => {
                  let id = orders[i]?.id;
                  console.log(id);
                  HandleupdateStatus(e.target.id, e.target.name);
                }}
                style={{
                  backgroundColor: "#4caf50",
                  color: "white",
                  marginInline: "5px",
                }}
                variant="contained"
                id={orders[i].id}
                name={orders[i].status == "pending" ? "pending" : "completed"}
              >
                Approve
              </Button>
              <Button
                style={{ backgroundColor: "#f44336", color: "white" }}
                variant="contained"
                id={orders[i]?.id}
                onClick={(e) => {
                  DeleteOrderApi(e.target.id);
                  if (error) {
                    notify(false);
                  } else {
                    notify(true);
                  }
                }}
              >
                Cancel
              </Button>
              <Toaster />

              <Modal open={open2} data={orders[i]} index={i} setopen={setOpen2} />
            </MDTypography>
          ),
        });
      }
    }

    return arrays;
  };
  return {
    columns: [
      { Header: "Order ID", accessor: "author", width: "45%", align: "left" },
      { Header: "User ID", accessor: "function", align: "left" },
      { Header: "Date", accessor: "Date", align: "center" },
      { Header: "Pair", accessor: "employed", align: "center" },
      { Header: "Crypto", accessor: "Crypto", align: "center" },
      { Header: "Fiat", accessor: "Fiat", align: "center" },
      { Header: "Status", accessor: "Status", align: "center" },

      { Header: "action", accessor: "action", align: "center" },
    ],

    rows: orders ? [...Data()] : [],
  };
}
