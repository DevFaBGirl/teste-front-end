import type { Product } from "../../types/product";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductGrid.module.scss";

interface ProductGridProps {
  products: Product[];
  onProductClick: (product: Product) => void;
}

function ProductGrid({ products, onProductClick }: ProductGridProps) {
  return (
    <section className={styles.section}>
      <h2 className={styles.title}>Produtos relacionados</h2>
      <div className={styles.grid}>
        {products.map((product, index) => (
          <ProductCard key={index} product={product} onClick={onProductClick} />
        ))}
      </div>
    </section>
  );
}

export default ProductGrid;
