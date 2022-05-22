import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { login, errorAtLogin } from "../layouts/authentication/AuthStore/Slice";
const postrequest = async (data) => {
  return await axios.post("https://singapore-bot-api-gebgl.ondigitalocean.app/login/", data);
};
const PostSignUprequest = async (data) => {
  return await axios.post("https://singapore-bot-api-gebgl.ondigitalocean.app/signup/", data);
};
const useLoginApi = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return useMutation(postrequest, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      console.log(result);
      dispatch(login(result.data));
      // return result;
      localStorage.setItem("user", JSON.stringify(result.data));

      return navigate("/profile");
    },
    onError: (err) => {
      console.log(err);
      dispatch(errorAtLogin(err.response.data.detail));
      //  return err;
    },
  });
};

const useSignUpApi = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return useMutation(PostSignUprequest, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      //  dispatch(login(result));
      console.log(result);
      return navigate("/authentication/sign-in");
      // return result;
    },
    onError: (err) => {
      console.log(err);
      //dispatch(login(err.response.data.detail));
      return err;
    },
  });
};
export { useSignUpApi, useLoginApi };
