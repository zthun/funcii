import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import request from 'supertest';
import { describe, expect, it } from 'vitest';
import { ZHealthModule } from './health.module';

describe('ZHealthController', () => {
  const endpoint = 'health';

  let _target: INestApplication<any>;

  const createTestTarget = async () => {
    const module = await Test.createTestingModule({ imports: [ZHealthModule] }).compile();

    _target = module.createNestApplication();
    await _target.init();
    return _target;
  };

  describe('Get', () => {
    it('should return a 204 No Content if healthy', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const actual = await request(target.getHttpServer()).get(`/${endpoint}`);
      // Assert.
      expect(actual.status).toEqual(204);
    });
  });
});
