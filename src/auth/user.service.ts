import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import {User} from './auth.entity';
import { NotFoundException } from "@nestjs/common";




@Injectable()
export class UserService{
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>){}
    
    getSchoolId(depart:string, year:string){
        return this.userRepository.createQueryBuilder()
        .select('schoolID')
        .where('department=:department',{department:depart})
        .andWhere('year=:year', {year})
        .orderBy("user.id", "DESC")
        .limit(1)
        .getRawOne();
    }






    findOne(schoolID:string):Promise<User>{
        let user = this.userRepository.findOneBy({schoolID});


        return user;
    }

    create(firstName:string, lastName:string, email:string, department:string,facultyOf:string, nationalExamId:string,password:string){


        let year:string = new Date().getFullYear().toString().slice(2)
        
        let existingSerialData = this.getSchoolId(department.toUpperCase(),year)
        let formatedSerialNumber:any;

        if (!existingSerialData){
            const origin = 1
            const originSerial = ("0000" + origin)
            formatedSerialNumber = originSerial.substring(String(origin).length)


        }else{
            console.log(existingSerialData)
        }
        let schoolID:string = `${department.toUpperCase()}/${year}/${formatedSerialNumber}`
        const user = this.userRepository.create({firstName, lastName, email, department,facultyOf, year,nationalExamId, password, schoolID})
        return this.userRepository.save(user)
    }

    

}





