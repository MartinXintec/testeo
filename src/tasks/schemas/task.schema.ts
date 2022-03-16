import { Schema } from "mongoose";


export const TaskSchema = new Schema({
    titulo: String,
    descripcion: String,
    done: Boolean
})