import { describe, expect, it } from 'vitest';
import { $attr, stringifyAttribute } from './stringify-attribute.mjs';

describe('stringifyAttribute', () => {
  describe('Null', () => {
    it('should return the empty string', () => {
      expect($attr('name', null)).toEqual('');
    });
  });

  describe('Undefined', () => {
    it('should return the empty string', () => {
      expect($attr('name', undefined)).toEqual('');
    });
  });

  describe('String', () => {
    it('should return the empty string for an empty string', () => {
      expect($attr('name', '')).toEqual('');
    });

    it('should return attr="value"', () => {
      expect($attr('name', 'value')).toEqual('name="value"');
    });
  });

  describe('Boolean', () => {
    it('should return the empty string for false', () => {
      expect(stringifyAttribute('name', false)).toEqual('');
    });

    it('should return the attribute name for true', () => {
      expect(stringifyAttribute('name', true)).toEqual('name');
    });
  });

  describe('Number', () => {
    it('should return attr="number"', () => {
      expect($attr('name', 4)).toEqual('name="4"');
    });
  });

  describe('Object', () => {
    it('should return attr="object" where object is JSON', () => {
      const o = { id: 4, name: 'four' };
      const expected = `name="${JSON.stringify(o)}"`;
      expect($attr('name', o)).toEqual(expected);
    });
  });
});
