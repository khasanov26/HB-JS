const print = (a = 'test') => {
   console.log(a);
}

print()

const user = [1, 2]

const [a, b] = user
console.log(a)
console.log(b)

let users = new Set()

users.add({name: "Andrey"})
users.add({name: "Antion"})

users.forEach(item => console.log(item))



map.set('str', 'string') // Записываем в паре ключ, значение
map.set(1, 'number')
map.set(true, 'boolean')

// общее колчисетво полей смотрится при помощи size
console.log(map.size);
// Что бы вывести одно поле, используют метод .get,
// в скобках указывается ключ этого поля
console.log(map.get('str'));
console.log(map.get(1));
console.log(map.get(true));