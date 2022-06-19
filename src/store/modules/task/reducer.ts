import { Reducer } from "@reduxjs/toolkit";
import produce from "immer";
import { ActionTypes, ITaskState } from "./types";
import { v4 } from 'uuid' ; 
import { toast } from "react-toastify";

const INITIAL_STATE: ITaskState = {
  tasks: []
};

const task : Reducer<ITaskState> = (state = INITIAL_STATE, action )=>{
  return produce(state, (draft) => {
    switch (action.type) {
      case ActionTypes.addTaskSuccess: {
        const { task } = action.payload;

        draft.tasks = [...draft.tasks, task]
        break;
      }
      case ActionTypes.addTaskFailure: {
        toast.error(action.payload.message);
        break;
      }

      case ActionTypes.changeTaskStatusSuccess: {
        const { id } = action.payload;
        const currentTasks = draft.tasks;
        const index = currentTasks.findIndex((task) => task.id === id);
        
        currentTasks[index].done = !currentTasks[index].done;
       
        draft.tasks = currentTasks;
       
        break;
      }

      case ActionTypes.changeTaskStatusFailure: {
        toast.error(action.payload.message);
        break;
      }

      case ActionTypes.deleteTaskSuccess: {
        const { id } = action.payload;
        
        const currentTasks = draft.tasks;
        draft.tasks = currentTasks.filter((task) => task.id!== id)

        break;
      }

      case ActionTypes.deleteTaskFailure: {
        toast.error(action.payload.message);
        break;
      }
      default: {
        return draft;
      }
    }
  })
}

export default task;