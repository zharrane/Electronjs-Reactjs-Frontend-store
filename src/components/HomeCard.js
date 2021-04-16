import React from 'react';
import './homecard.scss';
import { FaShoppingBasket, FaBuffer } from 'react-icons/fa';
const HomeCard = ({ data }) => {
  const info = ['TODAY', 'MONTH', 'RANDOM ITEM'];
  return (
    <>
      <div className={'HomeCard card' + data._id}>
        <div className="HomeCardInfo">
          <div className="HomeCardDate">
            <div className="dates-separator">
              <div className="separator-circle"></div>
              <div className="separator-line"></div>
              <div className="separator-circle"></div>
            </div>
            <div>
              <div className="HomeCardDates">{data.start_date}</div>
              <hr className="hr-between-dates"></hr>
              <div className="HomeCardDates">{data.end_date}</div>
            </div>
          </div>
          <div className="HomeCardInformation">
            <div className="HomeCardOrders">
              <div>
                <div>{'ORDERS'}</div>

                <div className="Orders">
                  <div className="Basket">
                    <FaShoppingBasket />
                  </div>
                  <div className="BasketData">{data.orders}</div>
                </div>
              </div>
            </div>
            <div className="HomeCardOrders">
              <div>
                <div>{'PRODUCTS'}</div>

                <div className="Orders">
                  <div className="Basket">
                    <FaBuffer />
                  </div>
                  <div className="BasketData">{data.quantity}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="HomeCardDateAndRevenu">
          <hr></hr>
          <div className="HomeCardDateOfRevenu">{info[data._id - 1]}</div>
          <div className="HomeCardPriceOfRevenu">
            <div className="HomeCardPrice">{data.revenu}</div>
            <div className="HomeCardCurrency">{'DA'}</div>
          </div>
        </div>
      </div>
    </>
  );
  // <div className="HomeCardWrapper">
  //   <div>
  //     <h1>Item</h1>
  //   </div>
  //   <div className="HomeCardLeft">
  //     <Col>Name : {data.revenu}</Col>
  //   </div>
  //   <div className="HomeCardRight">
  //     <p>start Date: {data.start_date}</p>
  //     <br />
  //     <p>End Date: {data.end_date}</p>
  //   </div>
  // </div>
};

export default HomeCard;
