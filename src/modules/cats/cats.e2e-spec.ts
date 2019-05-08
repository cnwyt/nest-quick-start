import * as request from 'supertest';
import { Test } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import { CatsService } from './cats.service';
import { CatsModule } from './cats.module';

describe('Cats', () => {
  let app: INestApplication;
  let catsService = { 
    findAll: () => ['id'] 
  };

  beforeAll(async () => {
    const module = await Test.createTestingModule({
      imports: [CatsModule],
    })
      .overrideProvider(CatsService)
      .useValue(catsService)
      .compile();

    app = module.createNestApplication();
    await app.init();
  });

  it(`/GET cats`, () => {
    var a = request(app.getHttpServer())
      .get('/cats')
      .expect(200)
      .expect(function(res) {
        console.log(res)
        res.body.id = 'some fixed id';
        res.body.name = res.body.name.toLowerCase();
      })
    //   .then(response => {
    //     console.log(response)
    //     // expect(response.body).toContain('content')
    // })
      // .expect({
      //   data: catsService.findAll(),
      // });

    
  });

  afterAll(async () => {
    await app.close();
  });
});