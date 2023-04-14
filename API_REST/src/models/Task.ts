import mongoose, { Schema , Model , model } from "mongoose";
import { User, IUser } from "./User";
import { finished } from "stream";
import { boolean } from "webidl-conversions";

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
    cdate : {type : Date,required : false},
    edate : {type : Date},
    finishTask : {type : Boolean}
});

const Task : Model<ITask> = model('Task',TaskSchema);

export {Task, ITask}
