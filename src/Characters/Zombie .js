import Character from './Character';

export default class Zombie extends Character {
  constructor(name, type) {
    super(name, type, health, level);
    if (type === 'Zombie') {
      this.attack = 40;
      this.defence = 10;
    }
  }
}
