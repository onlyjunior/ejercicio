import { Test, TestingModule, } from '@nestjs/testing';
import { AppController } from "./app.controller";
import { InMemoryDBV1Module } from '@nestjs-addons/in-memory-db';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
    }).compile();

    appController = app.get<AppController>(AppController);
  })})
