import React from "react";
import { Link } from "react-router-dom";
import { Typography, Card, CardContent, CardMedia } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import {
  demoChannelUrl,
  demoVideoUrl,
  demoChannelTitle,
  demoVideoTitle,
} from "../utils/constants";

const VideoCard = ({
  video: {
    id: { videoId },
    snippet,
  },
}) => {
  return (
  <Card sx={{ width:{xs:'350px', sm:'330px', md:'300px'}, boxShadow:'0 2px 3px rgba(255,255,255,0.2)', borderRadius:'10px', mb:3}}>
    <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
      <CardMedia image={snippet?.thumbnails?.high?.url}
      alt={snippet?.title}
      sx={{width: {xs:'350px', sm:'330px', md:'300px'} , height: 180}}
      /> 
    </Link>
    <CardContent sx={{ background:"#000", height:"90px"}}>
      <Link to={videoId ? `/video/${videoId}` : demoVideoUrl}>
        <Typography variant="subtitle2" fontWeight='bold' color='#fff'>
          {snippet?.title.slice(0,60) || demoVideoTitle.slice(0,60)}
        </Typography>
      </Link>
      <Link to={snippet?.channelId ? `/channel/${snippet?.channelId}` : demoChannelUrl}>
        <Typography variant="subtitle2" fontWeight='bold' color='gray'>
          {snippet?.channelTitle || demoChannelTitle}
          <CheckCircle sx={{fontSize:12 ,color:'gray', ml:'5px'}}/>
        </Typography>
      </Link>
    </CardContent>
  </Card>
)};

export default VideoCard;
