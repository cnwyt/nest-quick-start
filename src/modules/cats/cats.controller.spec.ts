import { Test } from '@nestjs/testing';
import { CatsController } from './cats.controller';
import { CatsService } from './cats.service';

describe('CatsController', () => {
  let catsController: CatsController;
  let catsService: CatsService;

  beforeEach(async () => {
    const module = await Test.createTestingModule({
        controllers: [CatsController],
        providers: [CatsService],
      }).compile();

    catsService = module.get<CatsService>(CatsService);
    catsController = module.get<CatsController>(CatsController);
  });
  describe('root', () => {
    it('should contain string: test', () => {
      expect(catsController.runTest()).toContain('test');
    });
  });
  it('should be defined', () => {
    expect(catsController).toBeDefined();
  });
  // describe('findAll', () => {
  //   it('should return an array of cats', async () => {
  //     const result = ['test'];
  //     jest.spyOn(catsService, 'findAll').mockImplementation(() => result);
  //     expect(await catsController.findAll()).toBe(result);
  //   });
  // });
});