import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from "@nestjs/mongoose";
import { UserDocument } from '../user/user.schema';

@Injectable()
export class AuthService {
    constructor(@InjectModel("users") private userModel: Model<UserDocument>) { }


}
