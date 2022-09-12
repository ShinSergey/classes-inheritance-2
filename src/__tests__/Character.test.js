import Character from '../Characters/Character';

test('should create character', () => {
    const newChar = new Character('Sergey', 'Magician');

    expect(newChar).toEqual({
        name: 'Sergey',
        type: 'Magician',
        health: 100,
        level: 1,
    });
});

test('should throw error with name', () => {
    expect(new Character('Sergeyyyyy', 'Magician')).toThrow(new Error('Параметр name должен содержать от 2 до 10 символов'));
});

test('should throw error with type', () => {
    expect(new Character('Sergey', 'Berserker')).toThrow(new Error('Класс не найден'));
});

test('should level up', () => {
    const newChar = new Character('Sergey', 'Magician');
    const lvlUp = newChar.levelUp();

    expect(lvlUp).toEqual({
        name: 'Sergey',
        type: 'Magician',
        health: 100,
        level: 2,
        attack: 12,
        defence: 48
    });
})

test('should throw error with type', () => {
    const newChar = new Character('Sergey', 'Magician');
    const noHp = newChar.damage(100);

    expect(noHp.levelUp()).toThrow(new Error('Нельзя повысить уровень умершего'));
});