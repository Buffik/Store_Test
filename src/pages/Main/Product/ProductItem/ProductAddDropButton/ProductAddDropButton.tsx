import React from 'react';

import styles from './ProductAddDropButton.module.scss';
import Button from 'src/UI/Button/Button';

interface PropsType {
  isInCart: boolean;
  handleClick: () => void;
}

function ProductAddDropButton({ isInCart, handleClick }: PropsType) {
  return (
    <Button
      className={
        isInCart ? [styles.button, styles.button_drop].join(' ') : styles.button
      }
      type="button"
      onClick={handleClick}
    >
      {isInCart ? 'Drop' : 'Add to Cart'}
    </Button>
  );
}

export default ProductAddDropButton;
