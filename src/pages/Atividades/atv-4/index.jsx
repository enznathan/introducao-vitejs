import { useState } from "react";
import styles from "./index.module.css";

export default function ListaCompra() {
  const [qtd, setQtd] = useState("");
  const [produto, setProduto] = useState("");
  const [lista, setLista] = useState([]);

  function adicionarItem() {
    if (!qtd || !produto) return;

    const novoItem = `${qtd}x ${produto}`;
    setLista([...lista, novoItem]);

    setQtd("");
    setProduto("");
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.titulo}>Atividade 4 - Lista de compra</h2>

      <div className={styles.form}>
        <input
          className={styles.inputQtd}
          type="number"
          placeholder="Qtd"
          value={qtd}
          onChange={(e) => setQtd(e.target.value)}
        />

        <input
          className={styles.inputProduto}
          type="text"
          placeholder="Produto..."
          value={produto}
          onChange={(e) => setProduto(e.target.value)}
        />

        <button className={styles.botao} onClick={adicionarItem}>
          Adicionar
        </button>
      </div>

      <div className={styles.lista}>
        {lista.map((item, index) => (
          <div key={index} className={styles.item}>
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}