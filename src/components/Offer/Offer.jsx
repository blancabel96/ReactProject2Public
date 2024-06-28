import offers from "./data";
import SingleOffer from "./components/SingleOffer";
import styles from "./Offer.module.css";

const Offer = () => {
  return (
    <section>
      <h2>Our offers</h2>
      <div className={styles.offersWrapper}>
        {offers.map((offer) => (
          <SingleOffer offer={offer} key={offer.id} />
        ))}
      </div>
    </section>
  );
};

export default Offer;
