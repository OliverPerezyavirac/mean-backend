import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist';

import { User } from './interfaces/interfaces';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    constructor(@InjectModel('User') private readonly userModel: Model<User>){}

    async getUsers(): Promise<User[]>{
        const user = await this.userModel.find()
        return user;
    }

    async getUser(userID:string): Promise<User>{
        const user = await this.userModel.findById(userID);
        return user;
    }

    async createUser(createUserDTO: CreateUserDTO): Promise<User>{
        const user = await new this.userModel(createUserDTO);
        return await user.save();
    }

    async deleteUser(userID: string): Promise<User>{
        const deleteUser = await this.userModel.findByIdAndDelete(userID);
        return deleteUser;
    }

    async updateUser(userID: string, createUserDTO: CreateUserDTO): Promise<User>{
        const updateUser = await this.userModel.findByIdAndUpdate(userID, 
            createUserDTO, {new:true});
        return updateUser;

    }
}
