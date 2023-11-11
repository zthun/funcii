import { INestApplication } from '@nestjs/common';
import { Test } from '@nestjs/testing';
import { createGuid } from '@zthun/helpful-fn';
import request from 'supertest';
import { afterEach, describe, expect, it } from 'vitest';
import { ZGuidsModule } from './guids-module';

describe('ZGuidsApi', () => {
  const endpoint = 'guids';

  let _target: INestApplication<any>;

  const createTestTarget = async () => {
    const module = await Test.createTestingModule({ imports: [ZGuidsModule] }).compile();

    _target = module.createNestApplication();
    await _target.init();
    return _target;
  };

  afterEach(async () => {
    await _target?.close();
  });

  describe('Create', () => {
    it('should return a 200 (ok) response.  No items are stored for retrieval later.', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const actual = await request(target.getHttpServer()).post(`/${endpoint}`);
      // Assert.
      expect(actual.status).toEqual(200);
    });

    it('should return a content type of text.', async () => {
      // Arrange.
      const target = await createTestTarget();
      // Act.
      const result = await request(target.getHttpServer()).post(`/${endpoint}`);
      const actual = result.type;
      // Assert.
      expect(actual).toEqual('text/plain');
    });

    it('should return a constructed guid (uuid).', async () => {
      // Arrange.
      const target = await createTestTarget();
      const expected = createGuid().length;
      // Act.
      const actual = await request(target.getHttpServer()).post(`/${endpoint}`);
      // Assert.
      expect(actual.text).toBeTruthy();
      expect(actual.text.length).toEqual(expected);
    });
  });
});
