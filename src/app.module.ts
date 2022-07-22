import { InMemoryDBV1Module } from '@nestjs-addons/in-memory-db'
import { Module } from '@nestjs/common';
import { AppController } from "./app.controller";


@Module({
  imports: [InMemoryDBV1Module.forRoot({})],
  controllers: [AppController],

})
export class AppModule {}
