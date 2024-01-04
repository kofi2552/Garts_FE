import React, { useEffect, useRef, useState} from "react";
import Meta from "../components/Meta";
import "./css/Home.css"
import ProductCard from "../components/Card/ProductCard";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Home = () => {

  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["projects"], // Adjust the queryKey as needed
    queryFn: () => newRequest.get("/lessons").then((res) => res.data),
  });

  // console.log("Rendering Home Component...");
  // console.log("Data:", data);
  // console.log("Error:", error);

  const renderGigs = () => {
    // console.log("Rendering gigs....");

    if (isLoading) {
      return (
        <div className="skeleton-card" key={0}>
          <Skeleton height={200} width={300} />
        </div>
      );
    } else if (error) {
      return <div>Something went wrong!</div>;
    } else {
      const filteredGigs = data.filter((gig) => !gig.disabled);
      return filteredGigs.map((gig) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={gig._id}>
          <ProductCard gig={gig} />
        </Grid>
      ));
    }
  };


  return (
        <section className="home-wrapper">
          <Meta title="Collections" />
            <div className="CardGrid-Container">
                <div className="Card-grid-content">
                  <div className="CardGrid-list">
                  <Grid container spacing={3}>
                    {renderGigs()}
                   </Grid>
                  </div>
                </div>
            </div>
        </section>

  );
};

export default Home;
