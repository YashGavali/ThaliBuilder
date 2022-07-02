import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import styles from './Checkout.module.css';
import CheckoutItem from './CheckoutItem/CheckoutItem';

const Checkout = ({ finalThali }) => {
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    if (finalThali.length === 0) {
      setTotalItems(0);
      setTotalPrice(0);
    }
    let items = 0;
    let price = 0;
    finalThali.forEach((item) => {
      items += item.qty;
      price += item.qty * item.price;

      setTotalItems(items);
      setTotalPrice(price);
    });
  }, [finalThali, totalPrice, totalItems, setTotalItems, setTotalPrice]);

  return (
    <div>
      <div className={styles.mainContainer}>
        <h3>Thali items</h3>
        <div>
          {finalThali.map((item) => {
            return <CheckoutItem key={item.id} itemData={item} />;
          })}
        </div>
      </div>
      <div className={styles.thaliSummary}>
        <span
          className={styles.itemTotal}
        >{`TOTAL: (${totalItems} Items)`}</span>
        <span className={styles.priceTotal}>₹ {totalPrice}</span>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    finalThali: state.shop.finalThali,
  };
};

export default connect(mapStateToProps)(Checkout);
