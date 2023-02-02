import { Controller, Get, Post, Put, Delete, Res, HttpStatus, Body} from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';

@Controller('user')
export class UserController {

    @Post('/create')
    createPost(@Res() res, @Body() createUserDTO: CreateUserDTO){
        // console.log(createUserDTO);
        return res.status(HttpStatus.OK).json({
            message: 'Recibido'
        });
    }
}
