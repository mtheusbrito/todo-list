import { ActionTypes, ITask } from "./types";

export function addTaskRequest(description: string){
  return {
    type: ActionTypes.addTaskRequest,
    payload: {
      description,
    },
  };
  
}

export function addTaskSuccess(task: ITask){
  return {
    type: ActionTypes.addTaskSuccess,
    payload: {
       task
    }
  }
}

export function addTaskFailure(message: string){
  return {
    type: ActionTypes.addTaskFailure,
    payload: {
      message
    }
  }
}

export function changeTaskStatusRequest(id: string){
return {
  type: ActionTypes.changeTaskStatusRequest,
  payload: {
    id,
  },
};
}

export function changeTaskStatusSuccess(id: string) {
  return {
    type: ActionTypes.changeTaskStatusSuccess,
    payload: {
      id,
    },
  };
}
export function changeTaskStatusFailure(message: string){
   return {
     type: ActionTypes.changeTaskStatusFailure,
     payload: {
       message,
     },
   };
}

export function deleteTaskRequest(id: string) {
  return {
    type: ActionTypes.deleteTaskRequest,
    payload: {
      id,
    },
  };
}

export function deleteTaskSuccess(id: string) {
  return {
    type: ActionTypes.deleteTaskSuccess,
    payload: {
      id,
    },
  };
}
export function deleteTaskFailure(message: string) {
  return {
    type: ActionTypes.deleteTaskFailure,
    payload: {
      message,
    },
  };
}