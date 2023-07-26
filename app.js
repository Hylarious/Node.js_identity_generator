const os = require('os');
const fs = require('fs');

const genders = ['m', 'f'];
const maleNames = [
    'Howard',
    'Kane',
    'Ismael',
    'Guillermo',
    'Aaden',
    'Jeramiah',
    'Duncan',
    'Prince',
    'Romeo',
    'Milo',
    'Tomas',
    'Ernesto',
    'Brock',
    'Stephen',
    'Jan',
    'Joe',
    'Pranav',
    'Ian',
    'Davion',
    'Camden',
];
const femaleNames = [
    'Bryana',
    'Macy',
    'Shayla',
    'Liliana',
    'Nicole',
    'Kiara',
    'Katelyn',
    'Amber',
    'Nicole',
    'Lana',
    'Laura',
    'Aspen',
    'Kelsie',
    'Selah',
    'Isla',
    'Karlie',
    'Patricia',
    'Alejandra',
    'Aryana',
    'Sara',
];
const lastNames = [
    'Nielsen',
    'Weeks',
    'Burgess',
    'Elliott',
    'Bird',
    'Scott',
    'Walter',
    'Yang',
    'Clark',
    'Martin',
    'Wood',
    'Simon',
    'Kaufman',
    'Vincent',
    'Duffy',
    'Neal',
    'Blackwell',
    'Cline',
    'Reid',
    'Summers',
];

function randChoice(arg) {
     const rand = Math.floor(Math.random() * arg.length)
     return arg[rand]
};

let people = []

for (let i = 0; i < 20; i++) {
    const gender = randChoice(genders)
    const minAge = 18;
    const maxAge = 78

    people[i] = {
        gender: gender,
        name: gender === 'm' ? randChoice(maleNames) : randChoice(femaleNames),
        lastName: randChoice(lastNames),
        age: Math.floor(Math.random() * (maxAge - minAge + 1) + minAge)
    }
}



fs.writeFile('people.json', JSON.stringify(people), (err) => {
    if (err) console.log("Something went wrong");
    console.log('File has been successfully generated! Check people.json')
}
)