import cn from 'classnames';
import styles from './BreadCrumbs.module.scss';
import Button from 'src/UI/Button/Button';

type PropsType = {
  step: number;
  setStep: React.Dispatch<React.SetStateAction<number>>;
};

function BreadCrumbs({ step, setStep }: PropsType) {
  const activeClass = cn(
    styles.breadCrumbs__text,
    styles.breadCrumbs__text_active
  );
  return (
    <div className={styles.breadCrumbs}>
      <Button className={activeClass} onClick={() => setStep(1)}>
        Personal data
      </Button>
      <Button
        className={step > 1 ? activeClass : styles.breadCrumbs__text}
        onClick={() => setStep(2)}
      >
        Payment
      </Button>
      <Button
        className={step > 2 ? activeClass : styles.breadCrumbs__text}
        onClick={() => setStep(3)}
      >
        Location
      </Button>
    </div>
  );
}

export default BreadCrumbs;
