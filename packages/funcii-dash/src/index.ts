import _ from 'lodash';

import firstDefined from './first-defined/first-defined';
import joinChoice from './join-choice/join-choice';
import sleep from './sleep/sleep';

export = Object.assign({}, _, { firstDefined }, { joinChoice }, { sleep });
