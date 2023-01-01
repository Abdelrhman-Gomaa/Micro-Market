import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from './../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/ (GET)', () => {
    return request(app.getHttpServer())
      .get('/')
      .expect(200)
      // Beacuse we put Forced API_KEY 
      .set('Authorization', process.env.API_KEY)
      .expect(`Hello World That's Micro Shop!`);
  });

  // we add this for asynchronize operation in project to shutdown project after all operation testing...
  afterAll(async () =>{
    await app.close();
  })
});
