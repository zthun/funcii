import { IZDataSourceStaticOptions, ZDataRequestBuilder, ZDataSourceStaticOptionsBuilder } from '@zthun/helpful-query';
import { describe, expect, it } from 'vitest';
import { IZPerson } from '../person/person';
import { ZDataSourcePeople } from './data-source-people';

describe('Data Source People', () => {
  let count: number | undefined;
  let options: IZDataSourceStaticOptions<IZPerson> | undefined;

  const createTestTarget = () => new ZDataSourcePeople(count, options);

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
    options = new ZDataSourceStaticOptionsBuilder().delay(0).build();
    const request = new ZDataRequestBuilder().size(100).build();
    const target = createTestTarget();
    // Act.
    const actual = await target.count(request);
    // Assert.
    expect(actual).toEqual(count);
  });
});
