import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HomeCardData from '../components/HomeCardData';
import HomeCard from '../components/HomeCard';
import './home.scss';
const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProdutcs = async () => {
      const { data } = await axios.get('/api/products');
      setProducts(data);
      console.log(data);
    };
    fetchProdutcs();
  }, []);

  return (
    <div className="homePage-div">
      <h1>WELCOME TO DASHBOARD</h1>
      <div className="DashboardOv">
        {HomeCardData.map((product) => (
          <HomeCard key={product._id} data={product} />
        ))}
      </div>
      <div className="latest-selling-products">
        <h2>TOP “10” SELLING PRODUCTS</h2>
        <div className="latest-selling-products-table">
          <ul>
            <li>1</li>
            <li> 2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
            <li>8</li>
            <li>9</li>
            <li>10</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
