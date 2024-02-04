import React, { useEffect, useRef, useState} from "react";
import Meta from "../components/Meta";
import "./css/Home.css"
import ProductCard from "../components/Card/ProductCard";
import { Grid } from "@mui/material";
import { useQuery } from "@tanstack/react-query";
import newRequest from "../utils/newRequest";
import { useLocation } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import { HiOutlineEmojiSad } from "react-icons/hi";

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


  const { isLoading, error, data, refetch,status } = useQuery({
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
        if (error.message === "Network Error") {
          // Handle the specific "Network Error" case
          throw new Error("No internet connection");
        } else {
          console.error("Error fetching projects:", error);
          throw error;
        }
      }
    },
    
  });

  console.log("Query Status:", status);

  useEffect(() => {
    if (!searchQuery) {
      refetch();
    }
  }, [sort, categoryId, searchQuery]);

{/* <div className="loader-page">
         <Loader type="Oval"  height={100} width={100} />
         </div> */}

  const renderGigs = () => {

    const skeletonGrid = Array.from({ length: 8 }).map((_, index) => (
      
      <Grid item xs={12} sm={6} md={4} lg={3} key={index}>
       <div className="skeleton-card">
          <Skeleton/>
          </div>
      </Grid>
    ))
    if (error) {
      if (error.message === "No internet connection") {
        return <div className="no-internet"><HiOutlineEmojiSad size={30} color="#999"/>  No internet connection!</div>;
      } else {
        return <div className="no-internet">Something went wrong!</div>;
      }
    } else if (!data) {
      return (
        <div className="skel-card-Ct">
        <div key={0} className="skel-Container">
          <Grid container spacing={2}>
          {skeletonGrid}
        </Grid>
        </div>
        </div>
      );
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
          <Meta title="Projects" />
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
