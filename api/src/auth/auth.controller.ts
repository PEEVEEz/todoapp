import { LoginUserDTO, NewUserDTO } from "./auth.dto";
import { Controller, Post } from "@nestjs/common";

@Controller()
export class AuthController {
    constructor() { }

    @Post("login")
    login() {
        return "";
    }

    @Post("register")
    register() {
        return "";
    }
}