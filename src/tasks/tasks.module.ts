import { Module } from '@nestjs/common';
import { TaskServices } from './shared/task.services';
import { TasksController } from './tasks.controller';

@Module({
    controllers: [TasksController],
    providers: [TaskServices]
    
})
export class TasksModule {}
