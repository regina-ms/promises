import read from './reader';
import json from './parser';

export default function load() {
  return new Promise((resolve) => {
    resolve(read());
  }).then((result) => json(result)).then((result) => JSON.parse(result));
}
