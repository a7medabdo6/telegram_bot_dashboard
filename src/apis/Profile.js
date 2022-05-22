import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useQuery, useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login, errorAtLogin } from "../layouts/authentication/AuthStore/Slice";
const getProfile = async () => {
  const items = JSON.parse(localStorage.getItem("user"));

  return await axios.get("https://singapore-bot-api-gebgl.ondigitalocean.app/users/me", {
    headers: {
      Authorization: `token ${items.token}`,
    },
  });
};

const useProfileApi = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return useQuery("profile", getProfile, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      console.log(result);
      return result;
    },
    onError: (err) => {
      console.log(err);
      //  return err;
    },
  });
};

const PostChangeEmail = async (data) => {
  const items = JSON.parse(localStorage.getItem("user"));

  return await axios.post(
    "https://singapore-bot-api-gebgl.ondigitalocean.app/email/change/",
    data,
    {
      headers: {
        Authorization: `token ${items.token}`,
      },
    }
  );
};
const PostChangePassword = async (data) => {
  const items = JSON.parse(localStorage.getItem("user"));

  return await axios.post(
    "https://singapore-bot-api-gebgl.ondigitalocean.app/password/change/",
    data,
    {
      headers: {
        Authorization: `token ${items.token}`,
      },
    }
  );
};
const useChangeEmailApi = () => {
  return useMutation(PostChangeEmail, {
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
const useChangePasswordApi = () => {
  return useMutation(PostChangePassword, {
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
export { useProfileApi, useChangeEmailApi, useChangePasswordApi };
