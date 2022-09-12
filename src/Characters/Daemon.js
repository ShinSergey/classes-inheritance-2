import Character from './Character';

export default class Daemon extends Character {
  constructor(name, type) {
    super(name, type, health, level);
    if (type === 'Daemon') {
      this.attack = 10;
      this.defence = 40;
    }
  }
}
