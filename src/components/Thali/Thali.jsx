import { connect } from 'react-redux/es/exports';
import SingleIngredient from '../singleIngredient/SingleIngredient';
import ThaliContent from '../ThaliContent/ThaliContent';
import styles from './Thali.module.css';

const Thali = ({ ingredients, finalThali }) => {
  return (
    <div className={styles.thal}>
      <ThaliContent finalThaliData={finalThali} />
      {ingredients.map((ingredient) => (
        <SingleIngredient key={ingredient.id} ingredientData={ingredient} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    ingredients: state.shop.ingredients,
    finalThali: state.shop.finalThali,
  };
};

export default connect(mapStateToProps)(Thali);
