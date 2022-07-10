import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule,ConfigService } from '@nestjs/config';
import { parse } from 'path';
import { User } from './auth/auth.entity';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal:true,
      envFilePath: `.env.${process.env.NODE_ENV}`

    }),
    TypeOrmModule.forRoot(),AuthModule],
  controllers: [AppController],
  providers: [AppService, ],
})
export class AppModule {
  constructor(private configService: ConfigService){}
}
console.log(process.env.DB_TYPE)