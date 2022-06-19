import React from 'react';

// import { Container } from './styles';
import clipboard from './../../assets/clipboard.svg'
import styles from './index.module.css'
const EmptyList: React.FC = () => {
  return (
    <div className={styles.empty}>
      <img src={clipboard} alt="Imagem de nenhuma tarefa cadastrada"></img>
      <div>
        <p>Você ainda não tem tarefas cadastradas</p>
        <span>Crie tarefas e organize seus itens a fazer</span>
      </div>
    </div>
  );
}

export default EmptyList;