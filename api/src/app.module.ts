import { Module } from '@nestjs/common';
import { ConfigModule } from "@nestjs/config"
import { UserSchema } from './user/user.schema';
import { TodoService } from './todo/todo.service';
import { MongooseModule } from "@nestjs/mongoose";
import { AuthService } from "./auth/auth.service";
import { AuthController } from "./auth/auth.controller";
import { TodoController } from "./todo/todo.controller";

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URL),
    MongooseModule.forFeature([
      { name: "users", schema: UserSchema }
    ])
  ],
  controllers: [
    AuthController,
    TodoController
  ],
  providers: [
    TodoService,
    AuthService
  ],
})
export class AppModule { }