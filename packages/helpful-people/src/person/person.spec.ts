import { describe, expect, it } from 'vitest';
import { ZPersonBuilder } from './person';

describe('ZPersonBuilder', () => {
  const createTestTarget = () => new ZPersonBuilder();

  describe('Random', () => {
    it('should generate the first name', () => {
      expect(createTestTarget().random().build().firstName).toBeTruthy();
    });

    it('should generate the last name', () => {
      expect(createTestTarget().random().build().lastName).toBeTruthy();
    });

    it('should generate a birthday', () => {
      expect(createTestTarget().random().build().birthday).toBeTruthy();
    });

    it('should generate the gender', () => {
      expect(createTestTarget().random().build().gender).toBeTruthy();
    });
  });

  describe('Metadata', () => {
    it('should generate the metadata', () => {
      expect(ZPersonBuilder.metadata()).toBeTruthy();
    });
  });
});
