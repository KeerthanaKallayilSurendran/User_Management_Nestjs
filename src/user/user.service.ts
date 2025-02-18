import { InjectModel } from '@nestjs/mongoose';
import { User } from './Schema/users.schema';
import * as mongoose from 'mongoose';
import { Injectable } from '@nestjs/common';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: mongoose.Model<User>
    ){}

    async getAllUsers() {
        const users = await this.userModel.find()
        return users
    }
}
