import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login, errorAtLogin } from "../layouts/authentication/AuthStore/Slice";
import { errorAtGetAllOrders, GetAllOrders } from "store/OrdersStore/Slice";

const getOrderRequest = async () => {
  const items = JSON.parse(localStorage.getItem("user"));

  return await axios.get("https://singapore-bot-api-gebgl.ondigitalocean.app/api/v1/orders", {
    headers: {
      Authorization: `token ${items.token}`,
    },
  });
};

const PostChangeStatus = async (data) => {
  const items = JSON.parse(localStorage.getItem("user"));

  return await axios.put(
    `https://singapore-bot-api-gebgl.ondigitalocean.app/api/v1/orders/${data.id}`,
    data,
    {
      headers: {
        Authorization: `token ${items.token}`,
      },
    }
  );
};
const PostDeleteOrdersrequest = async (id) => {
  const items = JSON.parse(localStorage.getItem("user"));
  console.log(id, "iddd");
  return await axios.delete(
    `https://singapore-bot-api-gebgl.ondigitalocean.app/api/v1/orders/${id}`,
    {
      headers: {
        Authorization: `token ${items.token}`,
      },
    }
  );
};
const useChangeStatusApi = () => {
  return useMutation(PostChangeStatus, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      console.log(result, "result");
      return result;
    },
    onError: (err) => {
      return err;
    },
  });
};
const useGetOrdersApi = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return useQuery("orders", getOrderRequest, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      console.log(result);
      dispatch(GetAllOrders(result.data));

      return result;
    },
    onError: (err) => {
      console.log(err);
      //  return err;
    },
  });
};
const useDeleteOrderApi = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return useMutation(PostDeleteOrdersrequest, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      //  dispatch(login(result));
      console.log(result);
      // return result;
    },
    onError: (err) => {
      console.log(err);
      // dispatch(errorAtGetAllUsers(err.response));
      //  return err;
    },
  });
};

export { useGetOrdersApi, useChangeStatusApi, useDeleteOrderApi };
