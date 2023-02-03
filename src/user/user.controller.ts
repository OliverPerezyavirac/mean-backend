import { Controller, Get, Post, Put, Delete,NotFoundException, Res, HttpStatus,Param ,Body, Query} from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {

    constructor(private userService: UserService){}

    @Post('/create')
    async createPost(@Res() res, @Body() createUserDTO: CreateUserDTO){

        const user = await this.userService.createUser(createUserDTO)
        return res.status(HttpStatus.OK).json({
            message: 'Userio creado exitosamente',
            user
        });
    }

    @Get('/')
    async getUsers(@Res()res) {
        const users = await this.userService.getUsers();
        return res.status(HttpStatus.OK).json({
            users
        })
    }

    @Get('/:userID')
    async getUser(@Res() res, @Param('userID')userID) {
        const user = await this.userService.getUser(userID);
        if(!user) throw new NotFoundException('El usuario no existe');
        return res.status(HttpStatus.OK).json(user)
    }
    
    @Delete('/delete')
    async deleteUser(@Res() res, @Query('userID') userID) {
        const userDelete = await this.userService.deleteUser(userID);
        if (!userDelete) throw new NotFoundException('El usuario no existe');
        return res.status(HttpStatus.OK).json({
            message: 'Usuario eliminado con exito',
            userDelete
        });
    }

    @Put('/update')
    async updateUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Query('userID') userID) {
        const userUpdate = await this.userService.updateUser(userID, createUserDTO);
        if (!userUpdate) throw new NotFoundException('El usuario no existe');
        return res.status(HttpStatus.OK).json({
            message: 'Usuario actualizado con exito',
            userUpdate 
        });
    }
}
