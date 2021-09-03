import json from './parser';
import read from './reader';
import GameSaving from './gamesaving';

export default class GameSavingLoader {
  static load() {
    return read().then((data) => json(data)).then((saving) => new GameSaving(JSON.parse(saving)));
  }
}
