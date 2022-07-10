import { Entity, Column, PrimaryGeneratedColumn,CreateDateColumn,UpdateDateColumn } from "typeorm";



@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type:"char", length: 50})
    firstName: string;

    @Column({type:"char", length: 50})
    lastName: string;

    @Column({type:'char', unique:true})
    email: string;
    
    @Column({type: 'char', length:50, nullable:true})
    facultyOf: string;

    @Column({type: 'char', length:3})
    department: string;

    @Column({type: 'char', length:2})
    year:string;

    @Column({type:'char', length:13})
    nationalExamId:string;

    @Column({type:'char'})
    password: string;

    @Column({type:"char", length: 50, unique:true})
    schoolID: string;

    @Column({type:'bool', default:true})
    isStudent: boolean;

    @Column({type:'bool', default:false})
    isActive: boolean;

    @Column({type:'bool', default:false})
    isresultOfficer: boolean;

    // @Column()
    // isSenateApproved: boolean;

    @Column({type:'bool', default:false})
    isSenateCommtieeMember: boolean;

    @CreateDateColumn({type:'timestamptz'})
    dateCreated: Date;

    @UpdateDateColumn({type: 'timestamptz'})
    dateUpdated: Date;
}


