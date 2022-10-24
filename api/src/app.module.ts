import { Module } from '@nestjs/common';
import { TodoService } from './todo/todo.service';
import { AuthResolver } from "./auth/auth.resolver";
import { TodoResolver } from "./todo/todo.resolver";
import { ConfigModule } from "@nestjs/config"
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true
    }),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      typePaths: ["./**/*.graphql"],
    })
  ],
  providers: [
    //services
    TodoService,

    //resolvers
    AuthResolver,
    TodoResolver
  ],
})
export class AppModule { }
