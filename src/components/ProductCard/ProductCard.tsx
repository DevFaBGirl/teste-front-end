import type { Product } from "../../types/product";
import styles from "./ProductCard.module.scss";

interface ProductCardProps {
  product: Product;
  onClick: (product: Product) => void;
}

function ProductCard({ product, onClick }: ProductCardProps) {
  return (
    <article className={styles.card} onClick={() => onClick(product)}>
      <img
        src={product.photo}
        alt={product.productName}
        className={styles.image}
      />
      <div className={styles.info}>
        <p className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
        <p className={styles.oldPrice}>R$ 30,90</p>
        <p className={styles.price}>R$ 28,90</p>
        <p className={styles.installment}>ou 2x de R$ 49,95 sem juros</p>
        <p className={styles.shipping}>Frete grátis</p>
        <button className={styles.button}>COMPRAR</button>
      </div>
    </article>
  );
}

export default ProductCard;
