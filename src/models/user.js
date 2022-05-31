import { Schema, model, models } from "mongoose";
import bcrypt from "bcryptjs/dist/bcrypt";

const userSchema = new Schema({
    name:{
        type: String,
        required: [true,"Nombre requerido"],
    },
    email:{
        type:String,
        required:[true,"Email requerido"],
        unique: true,
        trim:true,
    },
    password:{
        type:String,
        required:[true,"Contraseña requerida"],
    },
    school:{
        required:false,
        name:{
            type:String
        },
        cp:{
            type:Number
        },
        location:{
            type:String
        },
        tel:{
            type:Number
        },
        cc:{
            type:Number
        },
        email:{
            type:String
        },
        web:{
            type:String
        }
    },
    notes:[{type:Schema.Types.ObjectId,ref:'Note'}]
},{
    timestamps:true,
    versionKey:false
})

userSchema.methods.encryptPassword = async (password) => {
    const salt = await bcrypt.genSalt(10)
    return bcrypt.hash(password,salt)
}

userSchema.methods.matchPassword = async function(password){
    return await bcrypt.compare(password,this.password)
}

export default models.User || model("User",userSchema)