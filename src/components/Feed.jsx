import { useState, useEffect } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { SideBar, Videos } from "./index";
import { fetchFromAPI } from "../utils/fetchFromAPI";

const Feed = () => {
  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    // setVideos(null);

    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
      .then((data) => setVideos(data.items))
    }, [selectedCategory]);

  return (
    <Stack sx={{ flexDirection: { sx: "coloumn", md: "row" } }}>
      <Box
        sx={{
          height: { sx: "auto", md: "92vh" },
          borderRight: "1px solid #3d3d3d",
          px: { sx: 0, md: 5 },
        }}
      >
        <SideBar
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
        <Typography
          className="copyright"
          variant="body2"
          sx={{ mt: 1.5, color: "#fff" }}
        >
          Copyright AbhijitSingha
        </Typography>
      </Box>
      <Box p={2} sx={{ overflowY: "auto", height: "80vh", flex: "2" }}>
        <Typography
          variant="h4"
          sx={{ color: "white", fontWeight: "bold", mb: 2 }}
        >
          {selectedCategory} <span style={{ color: "#F35103" }}> Videos</span>
        </Typography>

        <Videos videos={videos}/>
      </Box>
    </Stack>
  );
};

export default Feed;
