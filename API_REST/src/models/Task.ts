import mongoose, { Schema , Model , model } from "mongoose";
import { User, IUser } from "./User";

interface ITask {
    title : string;
    description : string;
    category : string;
    user : IUser;
    cdate : Date;
    edate : Date;
    finishTask : boolean;
}; 

const TaskSchema  = new Schema<ITask>({
    title : {type : String,required : true},
    description : {type : String},
    category : {type : String},
    user: {type: Schema.Types.ObjectId,ref: 'User'},
    cdate : {type : Date},
    edate : {type : Date},
});

const Task : Model<ITask> = model('Task',TaskSchema);

export {Task, ITask}
