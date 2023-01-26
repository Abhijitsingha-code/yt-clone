import { useState, useEffect } from "react";
import { Box, Typography } from "@mui/material";
import { Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";
import { useParams } from "react-router-dom";

const SearchFeed = () => {
  const [videos, setVideos] = useState([])
  const {searchTerm} = useParams();

  useEffect(() => {

    fetchFromAPI(`search?part=snippet&q=${searchTerm}`)
      .then((data) => setVideos(data.items))
    }, [searchTerm]);

  return (
      <Box p={2} sx={{ overflowY: "auto", height: "90vh", flex: "2" }}>
        <Typography
          variant="h4"
          sx={{ color: "white", fontWeight: "bold", mb: 5 }}
        >
          Search Results For : <span style={{ color: "#F35103" }}>{searchTerm}</span> Videos
        </Typography>

        <Videos videos={videos} marginLeft='100px'/>
      </Box>
  );
};

export default SearchFeed;
