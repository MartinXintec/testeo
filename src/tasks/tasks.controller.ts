import { Controller, Delete, Get, Post, Put, Body, Param, Req, Res } from '@nestjs/common';
import {CreateTaskDto} from "./dto/create-task.dto"
import { Request, Response } from "express";
import { TasksService } from "./tasks.service";
import { Task } from "./interfaces/Task";

@Controller('tasks') // Ruta por defecto
export class TasksController {

    constructor(private taskService: TasksService){}
@Get() // Decorador, especifica el metodo de request que se recibe
/* getTasks(): {hello: string} { // Declara metodo y tipo de dato de retorno

return {"hello" : "world"}

} */
getTasks(): Promise<Task[]>  {

    return this.taskService.getTasks()

}
@Get(':taskId')
getTask(@Param('taskId') taskId: string){

    return this.taskService.getTask(taskId)
}  

@Post() // Mismo que arriba, pero este responde al metodo POST
createTask(@Body() task: CreateTaskDto): Promise<Task> {   // ... Metodo recibe POST con un JSON en el Body
return this.taskService.createTask(task)

}


@Delete(':id')
deleteTask(@Param('id') id): string {
console.log(id)
return 'Borrando tarea numero ' + id + '...'

}

@Put(':id')
updateTask(@Body() task:CreateTaskDto, @Param('id') id): string {
    console.log(task)
    console.log(id)
    return "Actualizando tarea..."
    
}


}
