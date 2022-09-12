export default class Character {
  constructor(name, type) {
    const types = ['Bowerman', 'Swordsman', 'Magician', 'Daemon', 'Undead', 'Zombie'];

    if (name.length < 1 || name.length > 9) {
      throw new Error('Параметр name должен содержать от 2 до 10 символов');
    }
    if (!types.includes(type)) {
      throw new Error('Класс не найден');
    }
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
  }

  levelUp() {
    if (this.health < 1) {
      throw new Error('Нельзя повысить уровень умершего');
    }
    this.level += 1;
    this.attack += this.attack / 100 * 20;
    this.defence += this.defence / 100 * 20;
    this.health = 100;
  }

  damage(points) {
    this.health -= points * (1 - this.defence / 100)
    if (this.health < 1) {
      this.health = 0;
    }
  }
}
