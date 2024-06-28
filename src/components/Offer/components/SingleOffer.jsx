import styles from "./SingleOffer.module.css";

const SingleOffer = (props) => {
  return (
    <div className={styles.box}>
      <p>{props.offer.title}</p>
      {props.offer.isNew ? <div> New offer </div> : null}
    </div>
  );
};

export default SingleOffer;
