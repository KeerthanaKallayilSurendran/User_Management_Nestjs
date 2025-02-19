import { InjectModel } from '@nestjs/mongoose';
import { User } from './Schema/users.schema';
import * as mongoose from 'mongoose';
import { HttpStatus, Injectable } from '@nestjs/common';
import { STATUS_CODES } from 'http';

@Injectable()
export class UserService {
    constructor(
        @InjectModel(User.name) private userModel: mongoose.Model<User>
    ){}


    // to get all user list
    async getAllUsers() {
        try {
            const users = await this.userModel.find()
            return users
        } catch (error) {
            return {statusCode: HttpStatus.INTERNAL_SERVER_ERROR, error:error.message}
        }
    }

    // add a new user
    async addUser(user:User){
        try {
            const newUser = await this.userModel.create(user)
            return {statusCode: HttpStatus.CREATED, meassage:'User Created Successfully', data:newUser}
        } catch (error) {
            return {statusCode: HttpStatus.INTERNAL_SERVER_ERROR, error:error.message}
        }
    }

    // update an existing user by userId
    async updateUser(id:string, user:User){
        try {
            const updatedUser = await this.userModel.findByIdAndUpdate(id, user, {new:true})
            
            if(!updatedUser){
                return {statusCode: HttpStatus.NOT_FOUND, meassage:'User Not Found'}
            }
            
            return {statusCode: HttpStatus.OK, meassage:'User Updated', data:updatedUser}

        } catch (error) {
            return {statusCode: HttpStatus.INTERNAL_SERVER_ERROR, error:error.message}
        }
    }

    // delete a user by userId
    async deleteUser(id:string){
        try {
            const deletedUser = await this.userModel.findByIdAndDelete(id)
            if(!deletedUser){
                return {statusCode: HttpStatus.NOT_FOUND, meassage:'User Not Found'}
            }
            return {statusCode: HttpStatus.CREATED, meassage:'User Deleted Successfully', data:deletedUser}
        } catch (error) {
            return {statusCode: HttpStatus.INTERNAL_SERVER_ERROR, error:error.message}
        }
    }

}
