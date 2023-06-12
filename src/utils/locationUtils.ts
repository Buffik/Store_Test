import React from 'react';
import { PersonalDataTypes } from 'src/types/types';

export const mapOptions = {
  modules: ['geocode', 'SuggestView'],
  defaultOptions: { suppressMapOpenBlock: true },
  width: 600,
  height: 400,
};

export const geolocationOptions = {
  defaultOptions: { maxWidth: 128 },
};

export const initialState = {
  title: '',
  center: [55.749451, 37.542824],
  zoom: 12,
};

export const handleReset = (
  setState: React.Dispatch<React.SetStateAction<PersonalDataTypes>>
) => {
  setState({
    name: '',
    phone: '',
    mail: '',
    creditCardNumber: '',
    creditCardDate: '',
    creditCardOwner: '',
    cvv: '',
    location: '',
  });
};
