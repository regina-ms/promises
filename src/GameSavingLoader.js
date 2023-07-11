/* eslint-disable class-methods-use-this */
import read from './reader';
import json from './parser';

export default class GameSavingLoader {
  load() {
    return new Promise((resolve) => {
      resolve(read());
    })
      .then((buffer) => json(buffer))
      .then((string) => JSON.parse(string));
  }
}
