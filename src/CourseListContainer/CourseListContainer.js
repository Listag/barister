import React from "react";
import axios from "axios";
import CourseList from "../CourseList/CourseList";
import { Grid } from "@mui/material";

export default class CourseListContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {courseList: []};
      }
    
      getCourseList() {
        const accessToken = localStorage.getItem('accessToken');
        axios.get('http://localhost:3002/courses', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })
        .then(res => {
          const courses = res.data;
          this.setState({courseList: courses});
        });
      }
      
      componentDidMount() {
        this.getCourseList();
      }

      splitCourseElements(courses) {
        const lenghtCourseList = courses.length;
        const chunkSize = Math.floor(lenghtCourseList / 3);
        const chunkedCoursesList = [
            courses.slice(0, chunkSize),
            courses.slice(chunkSize, chunkSize * 2),
            courses.slice(chunkSize * 2)
        ];
        
        return chunkedCoursesList;
      }

      render() {
          if (this.state.courseList.length > 0) {
            const courses = this.splitCourseElements(this.state.courseList);

            return(
                <React.Fragment>
                    <Grid item xs={12} sm={6} md={4} sx={{paddingBottom: 0, paddingTop: 0}}>
                        <CourseList courseList={courses[0]} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{paddingBottom: 0, paddingTop: 0}}>
                        <CourseList courseList={courses[1]} />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} sx={{paddingBottom: 0, paddingTop: 0}}>
                        <CourseList courseList={courses[2]} />
                    </Grid>
              </React.Fragment>
            );
        }
          
        return "Список курсов пока не загружен";
          
      }
}