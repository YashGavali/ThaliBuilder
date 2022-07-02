import styles from './SingleIngredient.module.css';
import { connect } from 'react-redux';
import {
  addtoThali,
  removeFromThali,
} from '../../redux/shopping/shopping-actions';

const SingleIngredient = ({ ingredientData, addtoThali, removeFromThali }) => {
  return (
    <div className={styles.main}>
      <button
        onClick={() => {
          removeFromThali(ingredientData.id);
        }}
      >
        -
      </button>
      <span>{ingredientData.name}</span>
      <button
        onClick={() => {
          addtoThali(ingredientData.id);
        }}
      >
        +
      </button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addtoThali: (id) => dispatch(addtoThali(id)),
    removeFromThali: (id) => dispatch(removeFromThali(id)),
  };
};

export default connect(null, mapDispatchToProps)(SingleIngredient);
