import Character from './Character';

export default class Swordsman extends Character {
  constructor(name, type) {
    super(name, type, health, level);
    if (type === 'Swordsman') {
      this.attack = 40;
      this.defence = 10;
    }
  }
}
