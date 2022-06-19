import { Trash } from 'phosphor-react';
import React from 'react';

// import { Container } from './styles';
import styles from './index.module.css'
const TaskItem: React.FC = () => {
  return (
    <div className={styles.item}>
      <div>
          <input type={'checkbox'} />
        <span>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </span>
      </div>

      <button>
        <Trash />
      </button>
    </div>
  );
}

export default TaskItem;