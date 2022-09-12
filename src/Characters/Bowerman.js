import Character from './Character';

export default class Bowerman extends Character {
  constructor(name, type) {
    super(name, type, health, level);
    if (type === 'Bowman') {
      this.attack = 25;
      this.defence = 25;
    }
  }
}
