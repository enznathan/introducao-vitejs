import { useState } from 'react';

import styles from './index.module.css';

export default function Atividade2() {

    const [num, setNum] = useState(10);

    function somarUm() {
        setNum(num + 1);
    }

    function subtrairUm() {
        setNum(num - 1);
    }

    function zerar() {
        setNum(0);
    }

    return (
        <div className={styles.container}>
            <div className={styles.botoes}>
                <label
                    className={styles.botao}
                    onClick={() => subtrairUm()}
                >-1</label>
                <label className={styles.texto}>{`Contador ${num}`}</label>
                <label
                    className={styles.botao}
                    onClick={() => somarUm()}
                >+1</label>
            </div>

            <div>
                <label
                    className={styles.botao}
                    onClick={() => zerar()}
                >Zerar</label>
            </div>
        </div>
    );
}