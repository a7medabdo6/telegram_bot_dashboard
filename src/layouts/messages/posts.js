import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { useGetPostsApi } from "../../apis/Posts";
import { useSelector, useDispatch } from "react-redux";

export default function AlignItemsList() {
  const { isLoading, data: PostsApi } = useGetPostsApi();
  const { posts, error } = useSelector((state) => state.Posts);

  if (isLoading) {
    return <Typography>Loading..</Typography>;
  }
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      {posts.map((post) => {
        return (
          <>
            <ListItem alignItems="flex-start">
              <ListItemAvatar>
                <Avatar alt={post.chat_id} src="/static/images/avatar/1.jpg" />
              </ListItemAvatar>
              <ListItemText
                primary={post.header}
                secondary={
                  <React.Fragment>
                    <Typography
                      sx={{ display: "inline" }}
                      component="span"
                      variant="body2"
                      color="text.primary"
                    >
                      {post.text}
                    </Typography>
                  </React.Fragment>
                }
              />
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        );
      })}
    </List>
  );
}
