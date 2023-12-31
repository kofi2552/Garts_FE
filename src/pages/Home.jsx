import React from "react";
import Meta from "../components/Meta";
import "./css/Home.css"
import ProductCard from "../components/Card/ProductCard";
import { Grid } from "@mui/material";

const Home = () => {
  return (
        <section className="home-wrapper">
          <Meta title="Collections" />
            <div className="CardGrid-Container">
                <div className="Card-grid-content">
                  <div className="CardGrid-list">
                  <Grid container spacing={3}>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                    <Grid item xs={12} sm={6} md={4} lg={3}>
                      <ProductCard />
                    </Grid>
                   </Grid>
                  </div>
                </div>
            </div>
        </section>

  );
};

export default Home;
