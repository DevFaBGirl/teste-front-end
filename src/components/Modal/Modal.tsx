import { useEffect, useState } from "react";
import type { Product } from "../../types/product";
import styles from "./Modal.module.scss";

interface ModalProps {
  product: Product;
  onClose: () => void;
}

function Modal({ product, onClose }: ModalProps) {
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    document.body.style.overflow = "hidden"; // ← adiciona aqui, primeira linha do useEffect
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = ""; // ← e aqui, antes de fechar o return
    };
  }, [onClose]);

  return (
    <div
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button
          className={styles.closeButton}
          onClick={onClose}
          aria-label="Fechar modal"
        >
          ✕
        </button>
        <div className={styles.content}>
          <img
            src={product.photo}
            alt={product.productName}
            className={styles.image}
          />
          <div className={styles.info}>
            <h2 className={styles.name} id="modal-title">
              {product.productName}
            </h2>
            <p className={styles.price}>
              R${" "}
              {product.price.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
              })}
            </p>
            <p className={styles.description}>
              Confira todos os detalhes e especificações técnicas do produto
              antes de realizar sua compra.
            </p>
            <a
              href="https://www.apple.com/br/iphone/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.detailsLink}
            >
              Veja mais detalhes do produto &gt;
            </a>
            <div className={styles.actions}>
              <div className={styles.quantity}>
                <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>
                  −
                </button>
                <span>{String(quantity).padStart(2, "0")}</span>
                <button onClick={() => setQuantity((q) => q + 1)}>+</button>
              </div>
              <button className={styles.buyButton}>COMPRAR</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
