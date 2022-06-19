import { Trash } from 'phosphor-react';
import React, { ChangeEvent, useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { take } from 'redux-saga/effects';
import { changeTaskStatusRequest, deleteTaskRequest } from '../../store/modules/task/actions';
import task from '../../store/modules/task/reducer';
import { ITask } from '../../store/modules/task/types';

// import { Container } from './styles';
import styles from './index.module.css'
interface ITaskItemProps{
  task: ITask
}
const TaskItem: React.FC<ITaskItemProps> = ({task}) => {
  const [checked, setChecked ] = useState<boolean>(false);
  const dispatch = useDispatch();


  

  const handleStatusTaskChange = useCallback(() => {

      dispatch(changeTaskStatusRequest(task.id))
    },
    [dispatch, task.done]
  );
  const handleDeleteTask = useCallback(()=>{
      dispatch(deleteTaskRequest(task.id))
  },[dispatch,task])

  return (
    <div className={styles.item}>
      <div>
        <div className={styles.round}>
          <input
            type="checkbox"
            id={`checkbox-${task.id}`}
            checked={task.done}
            onChange={handleStatusTaskChange}
          />
          <label htmlFor={`checkbox-${task.id}`}></label>
        </div>
        <span className={task.done ? styles.done: '' }>{task.description}</span>
      </div>

      <button type="button" onClick={handleDeleteTask}>
        <Trash />
      </button>
    </div>
  );
}

export default TaskItem;