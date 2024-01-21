import React, { useEffect, useRef, useState} from "react";
import Meta from "../components/Meta";
import "./css/Home.css"
import ProductCard from "../components/Card/ProductCard";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";

const Home = ({ filterParams, sort }) => {


  const { search } = useLocation();
  const categoryId = new URLSearchParams(location.search).get("cat");
  const searchQuery = new URLSearchParams(search).get("search");

  const ToggleRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ToggleRef.current && !ToggleRef.current.contains(event.target)) {
        // setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);


  const { isLoading, error, data, refetch } = useQuery({
    queryKey: ["projects", categoryId, searchQuery, filterParams, sort],
    queryFn: async () => {
      try {
        const response = await newRequest.get("/projects", {
          params: {
            cat: categoryId,
            ...(searchQuery && { search: searchQuery }),
            // min: minRef.current?.value,
            // max: maxRef.current?.value,
            min:  filterParams?.min,
            max: filterParams?.max,
            sort: filterParams?.sort,
          },
        });
  
        // console.log("API Response:", response.data);
        return response.data;
      } catch (error) {
        console.error("Error fetching projects:", error);
        throw error;
      }
    },
  });


  useEffect(() => {
    if (!searchQuery) {
      refetch();
    }
  }, [sort, categoryId, searchQuery]);



  const renderGigs = () => {
    if (isLoading) {
      return (
        <div className="skeleton-card" key={0}>
          <Skeleton height={200} width={300} />
        </div>
      );
    } else if (error) {
      return <div>Something went wrong!</div>;
    } else {
      const filteredGigs = data?.filter((gig) => !gig.disabled);
      return filteredGigs?.map((gig) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={gig._id}>
          <ProductCard gig={gig} />
        </Grid>
      ));
    }
  };

 
  
  return (
        <section className="home-wrapper" ref={ToggleRef}>
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
