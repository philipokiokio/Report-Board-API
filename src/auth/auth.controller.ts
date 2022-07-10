import { Controller, Body,Get,Post, Patch, NotFoundException,Param } from '@nestjs/common';
import { UserService } from './user.service';
import { AuthService } from './auth.service';


@Controller('auth')
export class AuthController {
    
    
    constructor(private usersService:UserService, private authService:AuthService){}


    @Get('/:schoolId')
    async findUser(@Param('schoolId') schoolId:string){
        console.log(schoolId)
        const user=this.findUser(schoolId);
        if (!user){
            throw new NotFoundException(`User with ${schoolId} does not exist` )
        }
        return user;
    }




}

