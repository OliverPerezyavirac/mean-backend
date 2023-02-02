import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose/dist';
import { User } from './interfaces/interfaces';
import { CreateUserDTO } from './dto/user.dto';

@Injectable()
export class UserService {
    
}
