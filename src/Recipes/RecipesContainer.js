import axios from "axios";
import React from "react";
import { Grid } from "@mui/material";
import RecipeCard from "./RecipeCard";
import Carousel from "react-material-ui-carousel";


export default class RecipesContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {'recipes': [], 'startRecipeIndex': 0, 'itemsInCarousel': 4};
    }

    getRecipes() {
        const accessToken = localStorage.getItem('accessToken');
        axios.get('http://localhost:3002/recipes', {
            headers: {
                'Authorization': `Bearer ${accessToken}`
            }
        })
        .then(res => {
            const recipes = res.data;
            this.setState({recipes: recipes});
        })
    }

    componentDidMount() {
        this.getRecipes();
    }

    next() {
        if (this.state.startRecipeIndex >= this.state.recipes.length - 1) {
            this.setState({'startRecipeIndex': 0})
        } else {
            this.setState({'startRecipeIndex': this.state.startRecipeIndex + 1})
        }
    }

    prev() {
        if (this.state.startRecipeIndex <= 0) {
            this.setState({'startRecipeIndex': this.state.recipes.length - 1})
        } else {
            this.setState({'startRecipeIndex': this.state.startRecipeIndex - 1})
        }
    }

    render() {

        const recipesForCarousel = [];
        for(let i = 0; this.state.itemsInCarousel > i; i++) {
            if (this.state.startRecipeIndex + i < this.state.recipes.length) {
                recipesForCarousel.push(this.state.recipes[this.state.startRecipeIndex + i])
            }
        }

        const recipesForCarouselLength = recipesForCarousel.length;
        if (recipesForCarousel.length < 4 && this.state.recipes.length > 0) {
            for (let i = 0; i < this.state.itemsInCarousel - recipesForCarouselLength; i++) {
                recipesForCarousel.push(this.state.recipes[i]);
            }
        }
       
        return (
                <Carousel navButtonsAlwaysVisible 
                fullHeightHover
                animation="fade"
                autoPlay={false}
                next={ (next, active) => this.next()}
                prev={ (prev, active) => this.prev()}
                >
                <Grid container alignItems="center" justifyContent="space-between" sx={{height: '400px'}}>
                {recipesForCarousel.map((recipe) => {
                    return (
                        <Grid item key={`recipe_${recipe.id}`}>
                        <RecipeCard 
                            title={recipe.title}
                            description={recipe.description}
                            imageUrl={`/static/${recipe.imageUrl}`}
                            imageAlt={recipe.imageAlt}
                            url={recipe.url}
                        />
                        </Grid>
                    );
                })}
                    </Grid>
                </Carousel>
        )
    }
}