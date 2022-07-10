import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): object {
    return {
      message: "Hi welcome to the Server, I am groot.",
      docs: "/docs",
      project: "Result based API service demoing Access Control system, Permissions and Role based system, built with NodeJs (NestJs Framework)."

    };
  }
}
