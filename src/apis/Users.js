import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login, errorAtLogin } from "../layouts/authentication/AuthStore/Slice";
import { errorAtGetAllUsers, GetAllUsers } from "store/UsersStore/Slice";

const getUserRequest = async () => {
  const items = JSON.parse(localStorage.getItem("user"));

  return await axios.get("https://singapore-bot-api-gebgl.ondigitalocean.app/api/v1/bot_users", {
    headers: {
      Authorization: `token ${items.token}`,
    },
  });
};

const PostCreateUserrequest = async (data) => {
  const items = JSON.parse(localStorage.getItem("user"));

  return await axios.post(
    "https://singapore-bot-api-gebgl.ondigitalocean.app/api/v1/bot_users",
    data,
    {
      headers: {
        Authorization: `token ${items.token}`,
      },
    }
  );
};
const PostDeleteUserrequest = async (id) => {
  const items = JSON.parse(localStorage.getItem("user"));
  console.log(id, "iddd");
  return await axios.delete(
    `https://singapore-bot-api-gebgl.ondigitalocean.app/api/v1/bot_users/${id}`,
    {
      headers: {
        Authorization: `token ${items.token}`,
      },
    }
  );
};

const useGetUsersApi = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return useQuery("users", getUserRequest, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      console.log(result);
      dispatch(GetAllUsers(result.data));

      return result;
    },
    onError: (err) => {
      console.log(err);
      //  return err;
    },
  });
};
const useCreateUserApi = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return useMutation(PostCreateUserrequest, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      //  dispatch(login(result));
      console.log(result, "useCreateUserApi");
      // return result;
    },
    onError: (err) => {
      console.log(err);
      // dispatch(errorAtGetAllUsers(err.response));
      //  return err;
    },
  });
};
const useDeleteUserApi = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return useMutation(PostDeleteUserrequest, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      //  dispatch(login(result));
      console.log(result, "useDeleteUserApi");
      // return result;
    },
    onError: (err) => {
      console.log(err);
      // dispatch(errorAtGetAllUsers(err.response));
      //  return err;
    },
  });
};
export { useGetUsersApi, useCreateUserApi, useDeleteUserApi };
