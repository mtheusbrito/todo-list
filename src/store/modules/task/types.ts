export interface ITask {
  id: string;
  description: string;
  done: boolean | false;
}

export interface ITaskState {
  tasks: ITask[];
}

export enum ActionTypes {
  addTaskRequest = 'ADD_TASK_REQUEST',
  addTaskSuccess = 'ADD_TASK_SUCCESS',
  addTaskFailure = 'ADD_TASK_FAILURE',
  
  changeTaskStatusRequest = 'CHANGE_TASK_STATUS_REQUEST',
  changeTaskStatusSuccess = 'CHANGE_TASK_STATUS_SUCCESS',
  changeTaskStatusFailure = 'CHANGE_TASK_STATUS_FAILURE',

  deleteTaskRequest = 'DELETE_TASK_REQUEST',
  deleteTaskSuccess = 'DELETE_TASK_SUCCESS',
  deleteTaskFailure = 'DELETE_TASK_FAILURE',
}