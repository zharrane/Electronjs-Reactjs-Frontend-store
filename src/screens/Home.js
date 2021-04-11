import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import HomeCard from '../components/HomeCard';
import './home.scss';
import { listProductsAction } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';

/// Main Func
const Home = () => {
  const dispatch = useDispatch();
  //
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  //
  useEffect(() => {
    dispatch(listProductsAction());
  }, [dispatch]);
  const whatIWantToSend = [];
  for (var i = 0; i < products.length; i++) {
    if (i > 2) continue;
    else {
      const product = {
        name: products[i].name,
        _id: i + 1,
        revenu: products[i].priceOfSelling,
        start_date: products[i].createdAt,
        end_date: products[i].updatedAt,
        quantity: products[i].countInStock,
        orders: products[i].countItemSold,
      };
      console.log(product);
      whatIWantToSend.push(product);
    }
  }
  return (
    <div className="homePage-div">
      <h1>WELCOME TO DASHBOARD</h1>
      {loading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger"> {error}</Message>
      ) : (
        <div>
          <div className="DashboardOv">
            {whatIWantToSend.map((product, index) => (
              <HomeCard key={index} data={product} />
            ))}
          </div>
          <div className="latest-selling-products">
            <h2>TOP “10” SELLING PRODUCTS</h2>
            <div className="latest-selling-products-table">
              <ul>
                {products.map((product, index) => (
                  <li>{`Product name :${product.name} and it's index is : ${index}`}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
