import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import CircleOutlinedIcon from "@mui/icons-material/CircleOutlined";
import { CheckCircleOutlineOutlined } from "@mui/icons-material";
import PropTypes from "prop-types";

export default function CourseList(props) {
  return (
    <List
      xs={12}
      sm={6}
      md={4}
      dense={true}
      sx={{ paddingBottom: 0, paddingTop: 0 }}
    >
      {props.courseList.map((course) => {
        return (
          <ListItem key={`course_${course.id}`}>
            <ListItemButton component="a" href={course.url}>
              <ListItemIcon>
                {course.status === "done" ? (
                  <CheckCircleOutlineOutlined />
                ) : (
                  <CircleOutlinedIcon />
                )}
              </ListItemIcon>
              <ListItemText primary={course.name} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}

CourseList.propTypes = {
  courseList: PropTypes.array
}