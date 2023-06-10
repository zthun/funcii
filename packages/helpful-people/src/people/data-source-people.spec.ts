import { ZDataRequestBuilder } from '@zthun/helpful-query';
import { describe, expect, it } from 'vitest';
import { ZDataSourcePeople } from './data-source-people';

describe('Data Source People', () => {
  let count: number | undefined;

  const createTestTarget = () => new ZDataSourcePeople(count);

  it('should return a page of people', async () => {
    // Arrange.
    const request = new ZDataRequestBuilder().page(2).size(100).build();
    const target = createTestTarget();
    // Act.
    const actual = await target.retrieve(request);
    // Assert.
    expect(actual.length).toEqual(request.size);
  });

  it('should return the expected number of people', async () => {
    // Arrange.
    count = 2000;
    const request = new ZDataRequestBuilder().size(100).build();
    const target = createTestTarget();
    // Act.
    const actual = await target.count(request);
    // Assert.
    expect(actual).toEqual(count);
  });
});
