import { describe, expect, it } from 'vitest';
import { ZDataRequestBuilder } from './data-request';

describe('ZDataRequestBuilder', () => {
  const createTestTarget = () => new ZDataRequestBuilder();

  describe('Query', () => {
    describe('Page', () => {
      it('should be set', () => {
        expect(createTestTarget().query({ page: '4' }).build().page).toEqual(4);
      });

      it('should be kept if not set', () => {
        expect(createTestTarget().page(2).query({}).build().page).toEqual(2);
      });

      it('should be kept if not a number', () => {
        expect(createTestTarget().page(2).query({ page: 'not-a-page' }).build().page).toEqual(2);
      });

      it('should be set to 1 if it evaluates to less than 0', () => {
        expect(createTestTarget().page(2).query({ page: '-1' }).build().page).toEqual(1);
      });

      it('should be set to 1 if it evaluates equal to 0', () => {
        expect(createTestTarget().page(2).query({ page: '0' }).build().page).toEqual(1);
      });
    });

    describe('Size', () => {
      it('should be set', () => {
        expect(createTestTarget().query({ size: '4' }).build().size).toEqual(4);
      });

      it('should be kept if not set', () => {
        expect(createTestTarget().size(2).query({}).build().size).toEqual(2);
      });

      it('should be kept if not a number', () => {
        expect(createTestTarget().size(2).query({ size: 'not-a-size' }).build().size).toEqual(2);
      });

      it('should be set to 0 if it evaluates to less than 0', () => {
        expect(createTestTarget().size(2).query({ size: '-1' }).build().size).toEqual(0);
      });

      it('should be set to 0 if it evaluates equal to 0', () => {
        expect(createTestTarget().size(2).query({ size: '0' }).build().size).toEqual(0);
      });
    });

    describe('Search', () => {
      it('should be set', () => {
        expect(createTestTarget().query({ search: 'foo-bar' }).build().search).toEqual('foo-bar');
      });

      it('should be kept if not set', () => {
        expect(createTestTarget().search('foo').query({}).build().search).toEqual('foo');
      });
    });
  });
});
