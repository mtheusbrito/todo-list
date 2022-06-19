import { PlusCircle } from 'phosphor-react';
import React from 'react';
import TaskItem from '../TaskItem';

// import { Container } from './styles';
import styles from './index.module.css'

const TodoList: React.FC = () => {
  return (
    
    <div className={styles.container}>
      <form action="" className={styles.taskForm}>
        <input type="text" />
        <button type="submit">
          Criar <PlusCircle />
        </button>
      </form>
      <div className={styles.tasks}>
         <header className={styles.header}>
          <p>Tarefas criadas <span>0</span></p>
          <p>Concluidas <span>0</span></p>
        </header>
        <div className={styles.list}>
          <TaskItem/>
        </div>
      </div>
     
    </div>
  );
}

export default TodoList;