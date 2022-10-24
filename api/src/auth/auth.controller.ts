import { Controller, Post } from '@nestjs/common';

@Controller("auth")
export class AuthController {
    constructor() { }

    @Post("login")
    login(): string {
        return "";
    }

    @Post("register")
    register(): string {
        return "";
    }
}