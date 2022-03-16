import { Injectable } from '@nestjs/common';
import { Task } from './interfaces/Task'
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateTaskDto } from './dto/create-task.dto';


@Injectable()
export class TasksService {


constructor(@InjectModel('Task') private taskModel: Model<Task>) {}


async getTasks(): Promise<Task[]>{  // Comentario de testeo para git, version 2.0 recargado

    const tasks = await this.taskModel.find();
        console.log(tasks);
        return tasks;
 }

async getTask(id: string): Promise<Task>{
    return await this.taskModel.findById(id)
}

async createTask(Task: CreateTaskDto): Promise<Task> {
    const newTask = new this.taskModel(Task)
    await newTask.save()
    return newTask
    

}


}
