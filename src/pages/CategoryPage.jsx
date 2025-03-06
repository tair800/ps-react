import React from "react";
import { useParams } from "react-router-dom";

const CategoryPage = () => {
  const { id } = useParams();
  return (
    <div className="container mt-5">
      <h1>Category: {id.replace("-", " ")}</h1>
      <p>Showing games for {id.replace("-", " ")}</p>
    </div>
  );
};

export default CategoryPage;
