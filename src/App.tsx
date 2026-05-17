import { useState } from "react";
import type { Product } from "./types/product";
import { useProducts } from "./hooks/useProducts";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Modal from "./components/Modal/Modal";
import "./styles/main.scss";

function App() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  if (loading) return <p>Carregando produtos...</p>;
  if (error) return <p>{error}</p>;

  return (
    <main>
      <ProductGrid products={products} onProductClick={setSelectedProduct} />
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </main>
  );
}

export default App;
