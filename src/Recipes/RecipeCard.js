import React from "react";
import { Card, CardMedia } from "@mui/material";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { ButtonBase } from "@mui/material";
import { useNavigate } from "react-router";
import { CardActionArea } from "@mui/material";

export default function RecipeCard(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate(props.url);
    }
    return(
        <Card sx={{ maxWidth: 270 }}>
            <CardActionArea onClick={handleClick}>
            <Box sx={{ position: 'relative' }}>
                <CardMedia 
                    component="img"
                    height="400"
                    alt={props.imageAlt}
                    image={props.imageUrl}
                />
                
                    <Box 
                        sx={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            bgcolor: 'rgba(0, 0, 0, 0.54)',
                            color: 'white',
                            pl: 2,
                            pb: 1.5,
                            pr: 2
                            
                        }}
                        >
                        <Typography variant="h5">{props.title}</Typography>
                        <Typography variant="body2">{props.description}</Typography>
                    </Box>
            </Box>
            </CardActionArea>
        </Card>
    );
}