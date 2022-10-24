import { Module } from '@nestjs/common';
import { TodoService } from './todo/todo.service';
import { AuthController } from "./auth/auth.controller";
import { TodoController } from "./todo/todo.controller";
import { ConfigModule, ConfigService } from "@nestjs/config"

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    })
  ],
  controllers: [
    AuthController,
    TodoController
  ],
  providers: [TodoService],
})
export class AppModule { }
