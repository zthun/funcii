import { fakerEN as faker } from '@faker-js/faker';
import { createGuid } from '@zthun/helpful-fn';
import { IZMetadata, ZMetadataBuilder } from '@zthun/helpful-query';
import { sample } from 'lodash';

/**
 * The sex of the person.
 *
 * This is not gender.  Use gender for the persons
 * actual gender.
 */
export type ZSex = 'male' | 'female';

/**
 * Represents an individual.
 */
export interface IZPerson {
  /**
   * The id of the person.
   *
   * This should be a UUID.
   */
  id: string;

  /**
   * The persons first name.
   */
  firstName: string;

  /**
   * The persons last name.
   */
  lastName: string;

  /**
   * The persons birthday as a date string in UTC.
   */
  birthday: string;

  /**
   * The persons gender.
   *
   * See https://en.wikipedia.org/wiki/List_of_gender_identities for possible values.
   */
  gender: string;

  /**
   * The persons sex.
   */
  sex: ZSex;
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
    const sex: ZSex = sample<ZSex>(['male', 'female'])!;

    return {
      id: createGuid(),
      firstName: faker.person.firstName(sex),
      lastName: faker.person.lastName(sex),
      birthday: faker.date.birthdate({ min: 1, max: 100, mode: 'age' }).toJSON(),
      gender: faker.person.gender(),

      sex
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
      new ZMetadataBuilder().id('last-name').name('Last Name').path('lastName').sortable().editable().text().build(),
      new ZMetadataBuilder()
        .id('birthday')
        .name('Birthday')
        .path('birthday')
        .sortable()
        .editable()
        .date()
        .format('L')
        .build(),
      new ZMetadataBuilder().id('gender').name('Gender').sortable().editable().text().build(),
      new ZMetadataBuilder().id('sex').name('Sex').sortable().text().build()
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
