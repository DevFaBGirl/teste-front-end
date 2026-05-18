import { useState } from "react";
import type { Product } from "./types/product";
import { useProducts } from "./hooks/useProducts";
import { Header } from "./components/Header/Header";
import Banner from "./components/Banner/Banner"; 
import { Categories } from "./components/Categories/Categories";
import { Footer } from "./components/Footer/Footer";
import ProductGrid from "./components/ProductGrid/ProductGrid";
import Modal from "./components/Modal/Modal";
import "./styles/main.scss";

function App() {
  const { products, loading, error } = useProducts();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  return (
    <>
      <a href="#main-content" className="skip-link">
        Ir para o conteúdo principal
      </a>
      <Header />
      <Banner /> 
      <Categories />
      <main id="main-content">
        {loading && (
          <p style={{ textAlign: "center", padding: "40px" }}>
            Carregando produtos...
          </p>
        )}
        {error && (
          <p style={{ textAlign: "center", padding: "40px", color: "red" }}>
            {error}
          </p>
        )}
        {!loading && !error && (
          <ProductGrid
            products={products}
            onProductClick={setSelectedProduct}
          />
        )}
      </main>
      <Footer />
      {selectedProduct && (
        <Modal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}

export default App;
