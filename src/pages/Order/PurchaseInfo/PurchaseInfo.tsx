import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { PersonalDataTypes } from 'src/types/types';
import styles from './PurchaseInfo.module.scss';
import TextItem from 'src/UI/TextItem/TextItem';

type PropTypes = {
  formData: PersonalDataTypes;
  setFormData: React.Dispatch<React.SetStateAction<PersonalDataTypes>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type FormValues = {
  cardNumber: string;
  cardYear: string;
  cardMonth: string;
  cardHolder: string;
  creditCardCVV: string;
};

function PurchaseInfo({ formData, setFormData, setStep }: PropTypes) {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { cardNumber, cardYear, cardMonth, cardHolder, creditCardCVV } = data;

    setFormData({
      ...formData,
      creditCardNumber: cardNumber,
      creditCardDate: `${cardYear} ${cardMonth}`,
      creditCardOwner: cardHolder,
      cvv: creditCardCVV,
    });

    setStep(3);
  };

  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      cardNumber: formData.creditCardNumber,
      cardYear: formData.creditCardDate.split(' ')[0],
      cardMonth: formData.creditCardDate.split(' ')[1],
      cardHolder: formData.creditCardOwner,
      creditCardCVV: formData.cvv,
    },
    mode: 'onBlur',
  });

  return (
    <div className={styles.cardData}>
      <TextItem className={styles.cardData__title}>
        Payment information
      </TextItem>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.cardData__formWrapper}
      >
        <div>
          <label className={styles.cardData__label}>
            Card Number:
            <input
              className={styles.cardData__input}
              type="text"
              {...register('cardNumber', {
                required: 'Required field',
                minLength: {
                  value: 19,
                  message: 'Invalid card number',
                },
                onChange: (e) => {
                  setValue(
                    'cardNumber',
                    e.target.value
                      .replace(/[^\d]/g, '')
                      .substring(0, 16)
                      .split(/(\d{4})/)
                      .filter((item: string) => item !== '')
                      .join(' ')
                  );
                },
              })}
            />
          </label>
          <TextItem className={styles.cardData__errorMessage}>
            <>
              {errors?.cardNumber &&
                (errors?.cardNumber?.message || 'Required field')}
            </>
          </TextItem>
        </div>
        <div>
          <label className={styles.cardData__label}>
            Card holder:
            <input
              className={styles.cardData__input}
              type="text"
              {...register('cardHolder', {
                required: 'Required field',
                minLength: {
                  value: 5,
                  message: 'Invalid card holder',
                },
              })}
            />
          </label>
          <TextItem className={styles.cardData__errorMessage}>
            <>
              {errors?.cardNumber &&
                (errors?.cardNumber?.message || 'Required field')}
            </>
          </TextItem>
        </div>
        <div className={styles.cardData__row}>
          <div className={styles.cardData__row_2}>
            <div className={styles.cardData__row}>
              <label className={styles.cardData__label}>
                Month:
                <input
                  className={styles.cardData__input_min}
                  type="number"
                  {...register('cardMonth', {
                    required: 'Required field',
                    maxLength: {
                      value: 2,
                      message: 'Invalid month',
                    },
                    max: {
                      value: 12,
                      message: 'Invalid month',
                    },
                    min: {
                      value: 1,
                      message: 'Invalid month',
                    },
                    onChange: (e) => {
                      setValue('cardMonth', e.target.value.substring(0, 2));
                    },
                  })}
                />
              </label>
              <label className={styles.cardData__label}>
                Year:
                <input
                  className={styles.cardData__input_min}
                  type="number"
                  {...register('cardYear', {
                    required: 'Required field',
                    maxLength: {
                      value: 2,
                      message: 'Invalid year',
                    },
                    minLength: {
                      value: 2,
                      message: 'Invalid year',
                    },
                    min: {
                      value: 23,
                      message: 'Invalid year',
                    },
                    onChange: (e) => {
                      setValue('cardYear', e.target.value.substring(0, 2));
                    },
                  })}
                />
              </label>
            </div>
            <TextItem className={styles.cardData__errorMessage}>
              <>
                {(errors?.cardMonth || errors?.cardYear) &&
                  (errors?.cardMonth?.message || errors?.cardYear?.message)}
              </>
            </TextItem>
          </div>
          <div className={styles.cardData__row_2}>
            <label className={styles.cardData__label_cvv}>
              CVV:
              <input
                className={styles.cardData__input_min}
                type="number"
                {...register('creditCardCVV', {
                  required: 'Required field',
                  minLength: {
                    value: 3,
                    message: 'Invalid CVV',
                  },
                  max: {
                    value: 999,
                    message: 'Invalid CVV',
                  },
                  onChange: (e) => {
                    setValue('creditCardCVV', e.target.value.substring(0, 3));
                  },
                })}
              />
            </label>
            <TextItem className={styles.cardData__errorMessage_cvv}>
              <>
                {errors?.creditCardCVV &&
                  (errors?.creditCardCVV?.message || 'Required field')}
              </>
            </TextItem>
          </div>
        </div>
        <input
          type="submit"
          value={'Next'}
          className={styles.cardData__submitButton}
          disabled={!isValid}
        />
      </form>
    </div>
  );
}

export default PurchaseInfo;
