import express, { Application, Request, Response } from 'express';
import  { connect } from 'mongoose';
import { addUser, getAllUsers, getUserById, deleteUser } from './handlers/User';
import { addTask, getAllTasks, getTaskById, getTasksByUser, deleteTask } from './handlers/Task';

const port: number = 8080;
var cors = require('cors');

const app: Application = express();
app.use(express.json());
app.use(cors());

//Routes for users
app.post('/users', addUser);
app.get('/users', getAllUsers );
app.get('/users/:id', getUserById);
app.delete('/deleteuser/:id', deleteUser);

//Routes for tasks
app.post('/addtask', addTask);
app.get('/tasks', getAllTasks);
app.get('/task/:id', getTaskById);
app.get('/users/:id/tasks', getTasksByUser);
app.delete('/deletetask/:id', deleteTask);

const databaseConnect = async (): Promise<void> => {
    const uri: string = "mongodb+srv://MG15:CNAM42CNAM@clustermg.tug1xqj.mongodb.net/?retryWrites=true&w=majority";
    try {
        const connection = await connect(uri);
        console.log('Connected to Database');
    } 
    catch (error) {console.log(error);}
}

//Start server
app.listen(port, async () => {
    //Connection to DB
    await databaseConnect();
    console.log('Server listening on port', port);
});