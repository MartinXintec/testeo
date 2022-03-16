import { Document } from "mongoose"


export interface Task extends Document {

id?: number   
titulo: string
descripcion: string
done: boolean

}