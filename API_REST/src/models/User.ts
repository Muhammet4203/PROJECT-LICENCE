import { Schema , Model , model } from "mongoose";

interface IUser {
    email : string;
    username : string;
    firstname : string;
    lastname : string;
    dobirth : Date;
}; 

const UserSchema  = new Schema<IUser>({
    email : {type : String,unique : true,required : true},
    username : {type : String, unique : true, required : true},
    firstname : {type : String},
    lastname : {type : String},
    dobirth : {type : Date}
});

const User : Model<IUser> = model('User',UserSchema);

export {User, IUser}