import ThaliDisplayItem from '../ThaliDisplayItem/ThaliDisplayItem';
import styles from './ThaliContent.module.css';

const ThaliContent = ({ finalThaliData }) => {
  console.log(finalThaliData);
  return (
    <div className={styles.thaliContent}>
      {finalThaliData.length === 0 && (
        <div style={{ color: 'white' }}>Add items to Thali</div>
      )}
      {finalThaliData.map((ingredient) => {
        return (
          <ThaliDisplayItem key={ingredient.id} ingredientData={ingredient} />
        );
      })}
    </div>
  );
};

export default ThaliContent;
