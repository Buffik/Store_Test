import React, { useState } from 'react';

import styles from './Order.module.scss';
import CartContainer from 'src/UI/Layouts/CartContainer/CartContainer';
import TextItem from 'src/UI/TextItem/TextItem';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';

type PersonalData = {
  name: string;
  phone: string;
  mail: string;
  creditCardNumber: string;
  creditCardDate: string;
  creditCardOwner: string;
  location: string;
};

function Order() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    mail: '',
    creditCardNumber: '',
    creditCardDate: '',
    creditCardOwner: '',
    location: '',
  });

  return (
    <CartContainer>
      <TextItem as="h2" className={styles.header}>
        Order
      </TextItem>
      <BreadCrumbs step={step} setStep={setStep} />
    </CartContainer>
  );
}

export default Order;
