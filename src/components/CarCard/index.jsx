import { Card, Button, Image } from 'react-bootstrap';
import styles from './index.module.css';
import { rupiahFormat } from '../../utils/rupiahFormat';
import PropTypes from 'prop-types';

export default function CarCard({ image, manufacture, model, rentPerDay, description, available, transmission, year, capacity }) {
    return (
        <Card className={styles.card}>
            <Card.Img variant='top' src={image} srcSet='' alt={manufacture} className={styles.card__image} />
            <Card.Body className={styles.card__body}>
                <p className={styles.card__body__model}>
                    {manufacture} {model}
                </p>
                <p className={`my-3 ${styles.card__body__price}`}>Rp {rupiahFormat(rentPerDay)} / hari</p>
                <p className={`mb-4 ${styles.card__body__desc}`}>{description}</p>
                <div className='d-flex gap-3'>
                    <div>
                        <Image src='./images/users.svg' alt='' srcSet='' width='20' />
                    </div>
                    <p className={styles.card__body_utils}>{capacity} Orang</p>
                </div>
                <div className='d-flex gap-3 my-3'>
                    <div>
                        <Image src='./images/settings.svg' alt='' srcSet='' width='20' />
                    </div>
                    <p className={styles.card__body_utils}>{transmission}</p>
                </div>
                <div className='d-flex gap-3 mb-5'>
                    <div>
                        <Image src='./images/calendar.svg' alt='' srcSet='' width='20' />
                    </div>
                    <p className={styles.card__body_utils}>Tahun {year}</p>
                </div>
                {available ? (
                    <Button className={styles.card__btn}>Pilih Mobil</Button>
                ) : (
                    <Button disabled className={styles.card__btn}>
                        Unavailable
                    </Button>
                )}
            </Card.Body>
        </Card>
    );
}

CarCard.propTypes = {
    image: PropTypes.string,
    manufacture: PropTypes.string,
    model: PropTypes.string,
    rentPerDay: PropTypes.number,
    description: PropTypes.string,
    available: PropTypes.bool,
    transmission: PropTypes.string,
    year: PropTypes.number,
    capacity: PropTypes.number,
};
