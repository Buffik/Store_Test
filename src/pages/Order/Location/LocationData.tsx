import React, { useEffect, useRef, useState } from 'react';
import {
  YMaps,
  Map,
  Placemark,
  GeolocationControl,
  ZoomControl,
} from '@pbe/react-yandex-maps';
import styles from './LocationData.module.scss';
import TextItem from 'src/UI/TextItem/TextItem';
import LocationPlaceMark from 'assets/icons/logo-icon.png';
import IconItem from 'src/UI/Icons/IconItem';
import Button from 'src/UI/Button/Button';

const mapOptions = {
  modules: ['geocode', 'SuggestView'],
  defaultOptions: { suppressMapOpenBlock: true },
  width: 600,
  height: 400,
};

const geolocationOptions = {
  defaultOptions: { maxWidth: 128 },
};

const initialState = {
  title: '',
  center: [55.749451, 37.542824],
  zoom: 12,
};

function LocationData() {
  const [state, setState] = useState({ ...initialState });
  const [mapConstructor, setMapConstructor] = useState<any>(null);
  const mapRef = useRef<any>(null);
  const searchRef = useRef<any>(null);

  useEffect(() => {
    if (mapConstructor) {
      new mapConstructor.SuggestView(searchRef.current).events.add(
        'select',
        function (e: any) {
          const selectedName = e.get('item').value;
          mapConstructor.geocode(selectedName).then((result: any) => {
            const newCoords = result.geoObjects
              .get(0)
              .geometry.getCoordinates();
            setState((prevState) => ({ ...prevState, center: newCoords }));
          });
        }
      );
    }
  }, [mapConstructor]);

  const handleBoundsChange = (e: any) => {
    const newCoords = mapRef.current.getCenter();
    mapConstructor.geocode(newCoords).then((res: any) => {
      const nearest = res.geoObjects.get(0);
      const foundAddress = nearest.properties.get('text');
      const [centerX, centerY] = nearest.geometry.getCoordinates();
      const [initialCenterX, initialCenterY] = initialState.center;
      if (centerX !== initialCenterX && centerY !== initialCenterY) {
        setState((prevState) => ({ ...prevState, title: foundAddress }));
      }
    });
  };
  return (
    <div className={styles.location}>
      <TextItem className={styles.location__title}>Location</TextItem>
      <input
        type="text"
        ref={searchRef}
        placeholder="Search..."
        className={styles.location__search}
      />
      <YMaps
        query={{
          apikey: 'a572881d-7689-4a0f-8bff-bb91e2c793a2',
          lang: 'en_US',
        }}
      >
        <div className={styles.location__map}>
          <Map
            {...mapOptions}
            state={state}
            onLoad={setMapConstructor}
            onBoundsChange={handleBoundsChange}
            instanceRef={mapRef}
          >
            <IconItem
              linkToIcon={LocationPlaceMark}
              alt={'location'}
              propClasses={styles.location__placeMark}
            />
            <GeolocationControl {...geolocationOptions} />
            <ZoomControl />
          </Map>
        </div>
      </YMaps>
      <TextItem as="p" className={styles.location__address}>
        {state.title}
      </TextItem>

      <Button className={styles.location__submit}>Confirm purchase</Button>
    </div>
  );
}

export default LocationData;
