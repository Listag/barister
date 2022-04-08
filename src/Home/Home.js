import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";
import { Paper } from "@mui/material";
import CurrentCourse from "../CurrentCourse/CurrentCourse";
import Header from "../Header/Header";
import { Container } from "@mui/material";
import CourseListContainer from "../CourseListContainer/CourseListContainer";
import RecipesContainer from "../Recipes/RecipesContainer";
import Footer from "../Footer/Footer";
import axios from "axios";

export default function Home(){
    const [currentCourse, setCurrentCourse] = useState({progress: 0});
    const [currentRecipe, setCurrentRecipe] = useState({progress: 0});
    function getCurrentCourse() {
        const accessToken = localStorage.getItem('accessToken');
        axios.get('http://localhost:3002/currentCourse', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })
        .then(res => {
          const currentCourse = res.data;
          setCurrentCourse({
                course: currentCourse.course,
                lesson: currentCourse.lesson,
                progress: currentCourse.progress,
                courseUrl: currentCourse.courseUrl,
                lessonUrl: currentCourse.lessonUrl
          });
        });
      }

      function getCurrentRecipe() {
        const accessToken = localStorage.getItem('accessToken');
        axios.get('http://localhost:3002/currentRecipe', {
          headers: {
            'Authorization': `Bearer ${accessToken}`
          }
        })
        .then(res => {
          const currentRecipe = res.data;
          setCurrentRecipe({
                course: currentRecipe.course,
                lesson: currentRecipe.lesson,
                progress: currentRecipe.progress,
                courseUrl: currentRecipe.courseUrl,
                lessonUrl: currentRecipe.lessonUrl
          });
        });
      }

    useEffect(() => {
        getCurrentCourse();
        getCurrentRecipe();
    }, []);

    

    return (
        <React.Fragment>
        <Header />
        <Container maxWidth="lg">
            <Grid container spacing={2} sx={{mt: 5, mb: 3}}>
                <Grid item xs={12} sm={12} md={6} sx={{minHeight: 120}}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 120
                        }}>
                            <CurrentCourse params={currentCourse}/>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={6} sx={{minHeight: 120}}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            height: 120
                        }}>
                            <CurrentCourse params={currentRecipe}/>
                    </Paper>
                </Grid>        
            </Grid>
            <Grid container spacing={2} sx={{mb: 6}}>
                <CourseListContainer sx={{paddingBottom: 0, paddingTop: 0}}/>
            </Grid>
            <Grid sx={{mb: 6}}>
                <Typography variant="h5" sx={{mb: 3, fontWeight: "500"}}>Рецепты</Typography>
                <RecipesContainer sx={{paddingBottom: 0, paddingTop: 0}}/> 
            </Grid>
        </Container>
        <Footer />
        </React.Fragment>
    );
}