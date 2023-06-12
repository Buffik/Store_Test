import React from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styles from './PersonalData.module.scss';
import { PersonalDataTypes } from 'src/types/types';
import TextItem from 'src/UI/TextItem/TextItem';

type PropTypes = {
  formData: PersonalDataTypes;
  setFormData: React.Dispatch<React.SetStateAction<PersonalDataTypes>>;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

type FormValues = {
  userName: string;
  userPhone: string;
  userMail: string;
};

function PersonalData({ formData, setFormData, setStep }: PropTypes) {
  const onSubmit: SubmitHandler<FormValues> = (data) => {
    const { userName, userPhone, userMail } = data;

    setFormData({
      ...formData,
      name: userName,
      phone: userPhone,
      mail: userMail,
    });

    setStep(2);
  };
  const {
    register,
    formState: { errors, isValid },
    handleSubmit,
    setValue,
  } = useForm<FormValues>({
    defaultValues: {
      userName: formData.name,
      userPhone: formData.phone,
      userMail: formData.mail,
    },
    mode: 'onBlur',
  });

  return (
    <div className={styles.personalData}>
      <TextItem className={styles.personalData__title}>Personal data</TextItem>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className={styles.personalData__formWrapper}
      >
        <label className={styles.personalData__label}>
          Name:
          <input
            type="text"
            {...register('userName', {
              required: 'Required field',
              minLength: {
                value: 5,
                message: 'At least 5 chars required',
              },
              onChange: (e) => {
                setValue(
                  'userName',
                  e.target.value.replace(/[^А-яЁё A-Za-z]/g, '')
                );
              },
            })}
          />
        </label>
        <TextItem className={styles.personalData__errorMessage}>
          <>
            {errors?.userName &&
              (errors?.userName?.message || 'Required field')}
          </>
        </TextItem>
        <label className={styles.personalData__label}>
          Phone:
          <input
            type="number"
            {...register('userPhone', {
              required: 'Required field',
              pattern: {
                value: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
                message: 'Invalid phone',
              },
            })}
          />
        </label>
        <TextItem className={styles.personalData__errorMessage}>
          <>
            {errors?.userPhone &&
              (errors?.userPhone?.message || 'Required field')}
          </>
        </TextItem>
        <label className={styles.personalData__label}>
          Mail:
          <input
            type="mail"
            {...register('userMail', {
              required: 'Required field',
              pattern: {
                value:
                  /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu,
                message: 'Invalid mail',
              },
            })}
          />
        </label>
        <TextItem className={styles.personalData__errorMessage}>
          <>
            {errors?.userMail &&
              (errors?.userMail?.message || 'Required field')}
          </>
        </TextItem>
        <input
          type="submit"
          value={'Next'}
          className={styles.personalData__submitButton}
          disabled={!isValid}
        />
      </form>
    </div>
  );
}

export default PersonalData;
