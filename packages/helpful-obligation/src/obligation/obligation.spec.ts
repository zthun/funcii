/* eslint-disable require-jsdoc */
import { describe, expect, it } from 'vitest';
import { optional, required } from './obligation';

describe('Obligation', () => {
  describe('Required', () => {
    it('should return a rejected promise if the value is null', async () => {
      await expect(required(null)).rejects.toBeTruthy();
    });

    it('should return a rejected promise if the value is undefined', async () => {
      await expect(required(undefined)).rejects.toBeTruthy();
    });

    it('should return a rejected promise if a promise resolves to undefined', async () => {
      await expect(required(Promise.resolve())).rejects.toBeTruthy();
    });

    it('should return a rejected promise if a promise resolves to null', async () => {
      await expect(required(Promise.resolve(null))).rejects.toBeTruthy();
    });

    it('should return a rejected promise if a promise rejects', async () => {
      await expect(required(Promise.reject(new Error('Something went wrong elsewhere')))).rejects.toBeTruthy();
    });

    it('should resolve with a truthy value', async () => {
      const expected = 'Value is set';
      await expect(required(expected)).resolves.toEqual(expected);
    });

    it('should resolve with a value of 0', async () => {
      await expect(required(0)).resolves.toEqual(0);
    });

    it('should resolve with a value of the empty string', async () => {
      await expect(required('')).resolves.toEqual('');
    });

    it('should resolve with a value of false', async () => {
      await expect(required(false)).resolves.toEqual(false);
    });

    it('should resolve with a truthy promise', async () => {
      await expect(required(Promise.resolve(true))).resolves.toEqual(true);
    });
  });

  describe('Optional', () => {
    it('should return val if it is not null', async () => {
      const expected = 'yes';
      await expect(optional(expected)).resolves.toEqual(expected);
    });

    it('should return the empty string', async () => {
      await expect(optional('')).resolves.toEqual('');
    });

    it('should return false', async () => {
      await expect(optional(false)).resolves.toEqual(false);
    });

    it('should return 0', async () => {
      await expect(optional(Promise.resolve(0))).resolves.toEqual(0);
    });

    it('should return null if val is null', async () => {
      await expect(optional(null)).resolves.toEqual(null);
    });

    it('should return null if val is undefined', async () => {
      await expect(optional(undefined)).resolves.toEqual(null);
    });

    it('should return null if a promise rejects', async () => {
      await expect(optional(Promise.reject(new Error('Failed')))).resolves.toEqual(null);
    });

    it('should return fallback if val is null', async () => {
      const expected = 'ok';
      await expect(optional(Promise.resolve(null), expected)).resolves.toEqual(expected);
    });

    it('should return null if val is undefined', async () => {
      const expected = 'ok';
      await expect(optional(undefined, expected)).resolves.toEqual(expected);
    });

    it('should return null if a promise rejects', async () => {
      const expected = 'ok';
      await expect(optional(Promise.reject(new Error('Failed')), expected)).resolves.toEqual(expected);
    });
  });
});
