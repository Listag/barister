import React from "react";
import { Typography } from "@mui/material";
import { LinearProgress } from "@mui/material";
import { Box } from "@mui/system";
import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Link } from "@mui/material";

export default function CurrentCourse(props) {
    const navigate = useNavigate();

    function handleClick() {
        navigate('/lesson');
    }
    
        return (
            <React.Fragment>    
                <Link href={props.params.courseUrl} variant="h5" underline="none" color="#212123">{props.params.course}</Link>
                <Link href={props.params.lessonUrl} variant="span" underline="none" color="#616063">{props.params.lesson}</Link>            
                <Box sx={{
                        display: 'flex', 
                        alignItems: 'center',
                        mr: 1, mt: 3
                        }}>
                    <Box sx={{position: 'relative', display: 'inline-flex', width: '100%'}}>
                        <LinearProgress  variant="determinate" value={props.params.progress} sx={{backgroundColor: "#ccb9b1", minHeight: 40, borderRadius:1, width:'100%', mr: 1}}></LinearProgress>
                        <Box
                            sx={{
                            top: 0,
                            left: 0,
                            bottom: 0,
                            right: 0,
                            position: 'absolute',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            }}>
                            <Typography variant="caption" component="div" color='white' sx={{fontSize: 17}}>{props.params.progress}%</Typography>
                        </Box>
                        
                    </Box>       
                    <Button variant="outlined" onClick={handleClick}>Учиться</Button>           
                </Box> 
            </React.Fragment>
        );

}