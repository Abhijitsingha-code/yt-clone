import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { ThumbUpAlt } from "@mui/icons-material";

import { Videos, Loader } from "./";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const VideoDetail = () => {

  const [videoDetails, setVideoDetails] = useState(null)
  const [video, setVideos] = useState([])

  const {id} = useParams();
  
  useEffect(() => {

    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
      .then((data) => setVideoDetails(data.items[0]))
   
    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}`)
      .then((data) => setVideos(data.items))
    }, [id]);

  if(!videoDetails?.snippet) return <Loader/>;

  const { snippet:{  title, channelTitle},statistics:{viewCount, likeCount} } = videoDetails;

  return (
    <Box minHeight='95vh'>
      <Stack direction={{xs:'coloum', md:'row'}}>
        <Box flex={1}>
          <Box sx={{width:'100%', position:"sticky", top:'50px'}}>
          <ReactPlayer url={`http://www.youtube.com/watch?v=${id}`} className="react-player" controls />
            <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
              {title}
            </Typography>
            <Stack direction='row' justifyContent="space-between" color="#fff" py={1} px={2}>
              <Link to={`/channel/${videoDetails?.snippet?.channelId}`}>
                <Typography variant="h6" color="#fff">
                  {channelTitle}
                  <CheckCircleIcon sx={{fontSize:'12px' , color:"gray", ml:1 }} />
                </Typography>
              </Link>
              <Stack direction="row" gap='20px' alignContent='center'>
                <Typography variant="body2" sx={{opacity:'0.6'}}>                  
                  <ThumbUpAlt sx={{fontSize:'16px' , color:"gray", mr:1 }}/>
                  {parseInt(likeCount).toLocaleString()} likes
                </Typography>
                <Typography variant="body1" sx={{opacity:'0.6'}}>
                  {parseInt(viewCount).toLocaleString()} views
                </Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
        <Box px={2} py={{xs:5 , md:1}} justifyContent='center' alignItems='center'>
          <Videos videos={video} direction='column'/>
        </Box>
      </Stack>
    </Box>
  )
}

export default VideoDetail;