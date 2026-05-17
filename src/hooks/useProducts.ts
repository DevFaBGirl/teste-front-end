import { useState, useEffect } from "react";
import type { Product } from "../types/product";
import { getProducts } from "../services/api";

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    getProducts()
      .then(setProducts)
      .catch(() => setError("Erro ao carregar produtos"))
      .finally(() => setLoading(false));
  }, []);

  return { products, loading, error };
}
