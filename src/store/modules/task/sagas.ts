import { all, put, select, takeLatest } from "redux-saga/effects";
import { ActionTypes, ITask } from "./types";
import { v4 } from 'uuid'
import { addTaskRequest, addTaskSuccess, changeTaskStatusFailure, changeTaskStatusRequest, changeTaskStatusSuccess, deleteTaskFailure, deleteTaskRequest, deleteTaskSuccess } from "./actions";
import { IState } from "../..";
import task from "./reducer";

type CreateNewTaskRequest = ReturnType<typeof addTaskRequest>;
type ChangeTaskStatusRequest = ReturnType<typeof changeTaskStatusRequest>
type DeleteTaskRequest = ReturnType<typeof deleteTaskRequest>;
export function* createNewTask(action : CreateNewTaskRequest){

const { description } = action.payload;
  const task :ITask =  {
    id: v4(),
    description,
    done: false
    
  };

  yield put(addTaskSuccess(task))
}
export function* changeTaskStatus(action: ChangeTaskStatusRequest){
  const { id } = action.payload;
  const  currentTasks : ITask[] = yield select((state: IState)=>{return state.task.tasks ?? []});
  const taskExists = currentTasks.find((task)=> task.id === id );
  

  if(!taskExists){
    yield put(changeTaskStatusFailure('Tarefa não encontrada!'))
  }else{
    yield put(changeTaskStatusSuccess(id))
  }
  
};

export function* deleteTask(action : DeleteTaskRequest)
{
   const { id } = action.payload;

   const currentTasks: ITask[] = yield select((state: IState) => {
     return state.task.tasks ?? [];
   });
   const taskExists = currentTasks.find((task) => task.id === id);

   if (!taskExists) {
     yield put(deleteTaskFailure('Tarefa não encontrada!'));
   } else {
     yield put(deleteTaskSuccess(id));
   }

}


export default all([
  takeLatest(ActionTypes.addTaskRequest, createNewTask),
  takeLatest(ActionTypes.changeTaskStatusRequest, changeTaskStatus),
  takeLatest(ActionTypes.deleteTaskRequest, deleteTask),
]);