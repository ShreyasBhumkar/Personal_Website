import React from "react";
import {
  Typography,
  Box,
  Grid,
  Paper,
  Container,
  Button,
  Card,
  CardMedia,
  CardContent,
} from "@mui/material";

const ServicesBannerCard = ({
    CardImage,
    CardTitle,
    Description,
}) => {
  return (
    <Card className="rounded rounded-4">
      <CardMedia
        component="img"
        alt="green iguana"
        height="auto"
        className="p-2 object-cover object-center"
        image={CardImage}
      />
      <CardContent>
        <Typography variant="h6" component="div">
          {CardTitle}
        </Typography>
        <Typography variant="body2" className="my-1">
          {Description}
        </Typography>
      </CardContent>
    </Card>
  );
};

export default ServicesBannerCard;
