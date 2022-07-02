import styles from './CheckoutItem.module.css';
import { connect } from 'react-redux';
import { removeFromThali } from '../../../redux/shopping/shopping-actions';

const CheckoutItem = ({ itemData, removeFromThali }) => {
  return (
    <div className={styles.mainContainer}>
      <div>{itemData.name}</div>
      <div className={styles.qtyContainer}>{itemData.qty}</div>
      <div>
        <button
          onClick={() => {
            removeFromThali(itemData.id);
          }}
          className={styles.buttonContainer}
        >
          X
        </button>
      </div>
      <div>{`₹ ${itemData.price}`}</div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeFromThali: (id) => dispatch(removeFromThali(id)),
  };
};

export default connect(null, mapDispatchToProps)(CheckoutItem);
