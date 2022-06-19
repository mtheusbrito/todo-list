import { PlusCircle } from 'phosphor-react';
import React, { ChangeEvent, FormEvent, InvalidEvent, useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IState } from '../../store';
import { addTaskRequest } from '../../store/modules/task/actions';
import { ITask } from '../../store/modules/task/types';
import EmptyList from '../EmptyList';
import TaskItem from '../TaskItem';

// import { Container } from './styles';
import styles from './index.module.css'

const TodoList: React.FC = () => {
  const tasks = useSelector<IState, ITask[]>(state => {return state.task.tasks});
  const [newTaskText, setNewTaskText] = useState<string>('');
  const dispatch = useDispatch();
  const tasksIsComplete = tasks.filter((task)=>{return task.done === true}).length ?? 0
  const isNewTaskEmpty = newTaskText.length === 0;
  
  const handleCreateNewTask = useCallback((event: FormEvent)=>{
    event.preventDefault();
    if(newTaskText.length > 0){
      dispatch(addTaskRequest(newTaskText))
      setNewTaskText('')
    }

    
    
    

  },[dispatch, newTaskText])

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity('Esse campo é obrigatório!');
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity('');
    setNewTaskText(event.target.value);
  }
  return (
    <div className={styles.container}>
      <form className={styles.taskForm} onSubmit={handleCreateNewTask}>
        <input type="text" value={newTaskText} required onInvalid={handleNewTaskInvalid} onChange={handleNewTaskChange} />
        <button type="submit" disabled={isNewTaskEmpty}>
          Criar <PlusCircle />
        </button>
      </form>
      <div className={styles.tasks}>
        <header className={styles.header}>
          <p>
            Tarefas criadas <span>{tasks.length}</span>
          </p>
          <p>
            Concluídas <span>{tasksIsComplete}</span>
          </p>
        </header>
        <div className={styles.list}>
          {tasks.length > 0 ? (
            tasks.map((task) => {
              return <TaskItem key={task.id} task={task} />;
            })
          ) : (
            <EmptyList />
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoList;