import { useEffect } from 'react';
import styles from './SuccessPurchase.module.scss';
import { useNavigate } from 'react-router-dom';
import CartContainer from 'src/UI/Layouts/CartContainer/CartContainer';
import LoadingSpinner from 'src/UI/LoadingSpinner/LoadingSpinner';

function SuccessPurchase() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeOut = setTimeout(() => {
      navigate('/');
    }, 3000);
    return () => {
      clearTimeout(timeOut);
    };
  }, [navigate]);

  return (
    <CartContainer>
      <h1 className={styles.title}>
        Thank you for the order! Go to home page in 3 s...
      </h1>
      <LoadingSpinner />
    </CartContainer>
  );
}

export default SuccessPurchase;
