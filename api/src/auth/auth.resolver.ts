import { LoginUserDTO, NewUserDTO } from "./auth.dto";
import { Resolver, Query, Args } from "@nestjs/graphql";

@Resolver()
export class AuthResolver {
    constructor() { }

    @Query()
    login(@Args("user") user: LoginUserDTO) {
        return user.username;
    }

    @Query()
    register(@Args("user") user: NewUserDTO) {
        return user.username;
    }
}