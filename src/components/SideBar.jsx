import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";


const SideBar = ({selectedCategory,setSelectedCategory}) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      flexDirection: { md: "column" },
      height: { md: "95%", sx: "auto" },
    }}
  >
    {categories.map((category) => (
      <button
      className="category-btn"
      onClick={() => setSelectedCategory(category.name)}
      style={{
        background: category.name === selectedCategory && "#FC1503",
        color: "white",
      }}
      key={category.name}
      >
        <span style={{color: category.name === selectedCategory ? 'white' : 'red', marginRight:"10px"}}>{category.icon}</span>
        <span style={{ opacity: category.name === selectedCategory ? '1' : '0.8'}}>{category.name}</span>
      </button>
    ))}
  </Stack>
);

export default SideBar;
