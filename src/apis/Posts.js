import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMutation, useQuery } from "react-query";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { errorAtGetAllPosts, GetAllPosts } from "store/PostsStore/Slice";

const getPostsRequest = async () => {
  const items = JSON.parse(localStorage.getItem("user"));

  return await axios.get("https://singapore-bot-api-gebgl.ondigitalocean.app/api/v1/send_message", {
    headers: {
      Authorization: `token ${items.token}`,
    },
  });
};

const CreatePostrequest = async (data) => {
  const items = JSON.parse(localStorage.getItem("user"));

  return await axios.post(
    "https://singapore-bot-api-gebgl.ondigitalocean.app/api/v1/send_message",
    data,
    {
      headers: {
        Authorization: `token ${items.token}`,
      },
    }
  );
};

const useGetPostsApi = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return useQuery("posts", getPostsRequest, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      console.log(result);
      dispatch(GetAllPosts(result.data));

      return result;
    },
    onError: (err) => {
      console.log(err);
      //  return err;
    },
  });
};
const useCreatePostApi = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  return useMutation(CreatePostrequest, {
    onSuccess: (res) => {
      const result = {
        status: res.status + "-" + res.statusText,
        headers: res.headers,
        data: res.data,
      };
      //  dispatch(login(result));
      console.log(result, "useCreatePostApi");
      // return result;
    },
    onError: (err) => {
      console.log(err);
      // dispatch(errorAtGetAllUsers(err.response));
      //  return err;
    },
  });
};
export { useGetPostsApi, useCreatePostApi };
