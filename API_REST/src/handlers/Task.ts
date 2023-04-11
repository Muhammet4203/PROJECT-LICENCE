import { Request, Response } from "express";
import { Task, ITask } from "../models/Task";

//Create new task
const addTask = async (request: Request, response: Response): Promise<void> => {
    
    const task = new Task(request.body);
    try {
        await task.save();
        response.json(task);
    } 
    catch (e) {response.status(500).json({error : e});}  
}

//Get all tasks
const getAllTasks = async (request: Request, response: Response): Promise<void> => {
    try {
        const task : ITask[] = await Task.find();
        task ? response.json(task) : response.status(404).send({error : {
            code : 404,
            message : "Not found - please try again (Get all tasks)"
        }});
    } 
    catch (e) {response.status(500).json({error : e});}
}

//Get task by id
const getTaskById = async (request: Request, response: Response): Promise<void> => {

    const id = request.params.id;
    try {
        const task = await Task.findById(id);
        task ? response.json(task) : response.status(404).send({error : {
            code : 404,
            message : "Not found - please try again (Get task by id)"
        }});
    } 
    catch (e) {response.status(500).json({error : e});}
}

//Get all tasks by users
const getTasksByUser = async (request: Request, response: Response): Promise<void> => {
    const id = request.params.id;
    try {
        const task : ITask[] = await Task.find({"user": id});
        task ? response.json(task) : response.status(404).send({error : {
            code : 404,
            message : "Not found - please try again (Get all tasks by id)"
        }});
    }
    catch(e) {response.status(500).json({error : e});}
}

//Delete task by id
const deleteTask = async (request: Request, response: Response): Promise<void> => {

    const id = request.params.id;
    try {
        const task = await Task.findById(id);
        task?.deleteOne({id});
        task ? response.json(task) : response.status(404).send({error : {
            code : 404,
            message : "Not found - please try again (Delete)"
        }});
    }
    catch (e) {response.status(500).json({error : e});}
}

export { addTask, getAllTasks, getTaskById, getTasksByUser, deleteTask };