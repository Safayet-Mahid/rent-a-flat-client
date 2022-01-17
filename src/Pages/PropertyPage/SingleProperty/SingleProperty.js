import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


import { Link } from 'react-router-dom';


const SingleProperty = ({ propertyInfo }) => {
    const { property_name, address, type, room, image2, bathroom, area, _id } = propertyInfo
    console.log(_id)
    return (
        <Grid item xs={12} md={4}>

            <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    component="img"
                    height="400"
                    image={image2}
                />
                <CardContent>
                    <Typography variant="h5" color="text.secondary">
                        {property_name}
                    </Typography>
                    <Typography gutterBottom variant="body2" component="div">
                        {address}
                    </Typography>
                </CardContent>
                <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center" }}>
                    <Typography gutterBottom variant="p" color="text.secondary">
                        {room} Rooms
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        {bathroom} beds
                    </Typography>
                    <Typography gutterBottom variant="p" component="div">
                        Area {area} Ft²
                    </Typography>

                </div>
                <CardActions>
                    <Link to={`/PropertyDetails/${_id}`}><Button size="small">More Details</Button>  </Link>



                </CardActions>
            </Card>

        </Grid >
    );
};

export default SingleProperty;