import { fakerEN as faker } from '@faker-js/faker';
import { createGuid } from '@zthun/helpful-fn';
import { IZMetadata, ZMetadataBuilder, ZWellKnownIconClasses } from '@zthun/helpful-query';
import { sample } from 'lodash';

/**
 * Represents an individual.
 */
export interface IZPerson {
  id: string;
  prefix: string;
  firstName: string;
  middleName: string;
  lastName: string;
  job: string;
  suffix: string;
  bio: string;
  birthday: string;
  gender: string;
  consolePreference: string;
}

export class ZPersonBuilder {
  private _person: IZPerson;

  /**
   * Returns a random built person.
   *
   * @returns
   *        A random person.
   */
  private static random(): IZPerson {
    const sex = faker.person.sexType();
    const gender = sample(['male', 'female', 'transgender'])!;
    const consolePreference = sample(['xbox', 'playstation'])!;

    return {
      id: createGuid(),
      prefix: faker.person.prefix(sex),
      suffix: faker.person.suffix(),
      firstName: faker.person.firstName(sex),
      middleName: faker.person.middleName(sex),
      lastName: faker.person.lastName(sex),
      bio: faker.person.bio(),
      job: faker.person.jobTitle(),
      birthday: faker.date.birthdate({ min: 1, max: 100, mode: 'age' }).toJSON(),
      gender,
      consolePreference
    };
  }

  /**
   * Gets metadata about a person object.
   *
   * @returns -
   *      A list of metadata objects about the data.
   */
  public static metadata(): IZMetadata[] {
    return [
      new ZMetadataBuilder().id('id').name('Id').path('id').sortable().text().build(),
      new ZMetadataBuilder().id('first-name').name('First Name').path('firstName').sortable().editable().text().build(),
      new ZMetadataBuilder()
        .id('middle-name')
        .name('Middle Name')
        .path('middleName')
        .sortable()
        .editable()
        .text()
        .build(),
      new ZMetadataBuilder().id('last-name').name('Last Name').path('lastName').sortable().editable().text().build(),
      new ZMetadataBuilder().id('prefix').name('Prefix').path('prefix').sortable().editable().text().build(),
      new ZMetadataBuilder().id('suffix').name('Suffix').path('suffix').sortable().editable().text().build(),
      new ZMetadataBuilder()
        .id('birthday')
        .name('Birthday')
        .path('birthday')
        .sortable()
        .editable()
        .date()
        .format('L')
        .build(),
      new ZMetadataBuilder().id('job').name('Job').path('job').sortable().editable().text().build(),
      new ZMetadataBuilder()
        .id('gender')
        .name('Gender')
        .path('gender')
        .sortable()
        .editable()
        .icon()
        .cls(ZWellKnownIconClasses.Material)
        .build(),
      new ZMetadataBuilder()
        .id('console-preference')
        .name('Console Preference')
        .path('consolePreference')
        .sortable()
        .editable()
        .icon()
        .cls(ZWellKnownIconClasses.FontAwesomeBrands)
        .build()
    ];
  }

  public constructor() {
    this._person = ZPersonBuilder.random();
  }

  public random() {
    this._person = ZPersonBuilder.random();
    return this;
  }

  public build() {
    return structuredClone(this._person);
  }
}
