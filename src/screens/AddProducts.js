import React, { useEffect, useState } from 'react';
import './productlist.scss';
import { listProductsAction } from '../actions/productActions';
import Loader from '../components/Loader';
import Message from '../components/Message';
import { useDispatch, useSelector } from 'react-redux';
import { BiCog, BiDetail, BiShieldX } from 'react-icons/bi';
import { Link } from 'react-router-dom';
import AddingProduct from './AddingProduct';
import SearchBox from './SearchBox';
import { Route } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const AddProducts = ({ match }) => {
  /////////////////////
  const keyword = match.params.keyword;
  /////////////////////
  ///////////////////////
  const [categoryOfProducts, updateCategoryOfProducts] = useState([]);
  ///
  const [advancedButton, setAdvancedBar] = useState(false);
  const showAdvancedBar = () => {
    if (!advancedButton) {
      const categoryOfProductsArray = products
        .map((item) => item.category)
        .filter((value, index, self) => self.indexOf(value) === index);
      updateCategoryOfProducts(categoryOfProductsArray);
    }
    setAdvancedBar(!advancedButton);
  };
  console.log('Outside useState ' + categoryOfProducts);

  //
  const dispatch = useDispatch();
  //
  const productList = useSelector((state) => state.productList);
  const { loading, error, products } = productList;
  //
  useEffect(() => {
    dispatch(listProductsAction(keyword));
  }, [dispatch, match]);
  return (
    <div className="homePage-div">
      <div classname="popup-add-product-div">
        <AddingProduct />
      </div>
      <h1>MANAGE PRODUCTS</h1>
      <div>
        <div className="DashboardOv">
          {/* /////////////////////////// */}
          <div className=" SearchFormBox">
            <Route render={({ history }) => <SearchBox history={history} />} />
          </div>
          {/* /////////////////////////////////// */}
          <div>
            <Button
              variant="outline-success"
              className="p-2"
              onClick={showAdvancedBar}
            >
              ADVANCED SEARCH
            </Button>
          </div>
          <div>
            <Button variant="outline-success" className="p-2">
              {' '}
              ADD PRODUCT
            </Button>
          </div>
        </div>
        {advancedButton ? (
          <div className="advancedButton-clicked">
            {/* *Here to switch between codebar and name*/}
            <select name="category" className="category-advanced-search">
              {categoryOfProducts.map((item, index) => (
                // console.log('Product :' + item + 'index is : ' + index)
                <option value={item} key={index}>
                  {item}
                </option>
              ))}
            </select>
          </div>
        ) : (
          <div></div>
        )}
        <>
          {loading ? (
            <Loader />
          ) : error ? (
            <Message variant="danger">{error}</Message>
          ) : (
            <section>
              <h2>Product List</h2>
              <div class="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                  <thead>
                    <tr>
                      <th>Nº</th>
                      <th>Code Bar</th>
                      <th>Name</th>
                      <th>Brand</th>
                      <th>category</th>
                      <th>Stock</th>
                      <th>Reduction %</th>
                      <th>Buying Price</th>
                      <th>Reseller Price</th>
                      <th>Selling Price</th>
                      <th>TVA</th>
                      <th>Actions</th>
                    </tr>
                  </thead>
                </table>
              </div>
              <div class="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                    {products.map((product, index) => (
                      <tr>
                        <td>{index}</td>
                        <td>{product.codeBar}</td>
                        <td>{product.name} </td>
                        <td>{product.brand}</td>
                        <td>{product.category}</td>
                        <td>{product.countInStock}</td>
                        <td>{product.reductionAmount}</td>
                        <td>
                          <span classname="selling-red">
                            {product.priceOfBuying}
                          </span>
                        </td>
                        <td classname="selling-orange">
                          {product.priceOfReseller}
                        </td>
                        <td classname="selling-green">
                          {product.priceOfSelling}
                        </td>
                        <td>{product.tva}</td>
                        <td>
                          <span className="action-icons-span">
                            <Link>
                              <BiDetail classname="Products-Icons" />
                            </Link>
                            <Link>
                              <BiCog classname="Products-Icons" />
                            </Link>
                            <Link>
                              <BiShieldX classname="Products-Icons" />
                            </Link>
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          )}
        </>
      </div>
    </div>
  );
};

export default AddProducts;
