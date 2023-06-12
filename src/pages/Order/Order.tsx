import { useState } from 'react';
import { Link } from 'react-router-dom';
import CartContainer from 'src/UI/Layouts/CartContainer/CartContainer';
import TextItem from 'src/UI/TextItem/TextItem';
import BreadCrumbs from './BreadCrumbs/BreadCrumbs';
import { useAppSelector } from 'src/hooks/storeHooks';
import { countPrice } from 'src/utils/countItems';
import formatPrice from 'src/utils/formatPrice';
import { PersonalDataTypes } from 'types/types';
import PurchaseInfo from './PurchaseInfo/PurchaseInfo';
import PersonalData from './PersonalData/PersonalData';
import LocationData from './Location/LocationData';
import SiteContainer from 'src/UI/Layouts/SiteContainer/SiteContainer';
import emptyCartImg from 'assets/icons/emptyCart.svg';
import styles from './Order.module.scss';

function Order() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState<PersonalDataTypes>({
    name: '',
    phone: '',
    mail: '',
    creditCardNumber: '',
    creditCardDate: '',
    creditCardOwner: '',
    cvv: '',
    location: '',
  });

  const cartData = useAppSelector((state) => state.cart.list);
  const fullPrice = countPrice(cartData);

  if (!cartData.length) {
    return (
      <SiteContainer>
        <section className={styles.empty__wrapper}>
          <img className={styles.empty__img} src={emptyCartImg} alt="" />
          <h1 className={styles.empty__title}>Cart is empty</h1>
          <Link to="/" className={styles.empty__link}>
            Back to main
          </Link>
        </section>
      </SiteContainer>
    );
  }

  return (
    <CartContainer>
      <TextItem as="h2" className={styles.header}>
        <>{`Order ${formatPrice(fullPrice)}`}</>
      </TextItem>
      <BreadCrumbs step={step} setStep={setStep} formData={formData} />
      {step > 1 ? (
        step > 2 ? (
          <LocationData />
        ) : (
          <PurchaseInfo
            formData={formData}
            setFormData={setFormData}
            setStep={setStep}
          />
        )
      ) : (
        <PersonalData
          formData={formData}
          setFormData={setFormData}
          setStep={setStep}
        />
      )}
    </CartContainer>
  );
}

export default Order;
