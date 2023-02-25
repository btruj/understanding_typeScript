const person: {
    name: string;
    age: number;
       hobbies: string[];
         role: [number, string];
} = {
name: 'Max',
age: 30,
hobbies: ['Sports', 'Cooking'], 
role: [2, 'author']
};

//person.role.push('admin'); // push is an exception to the tuple, typescript cant catch this error
// person.role[1] = 10; error its expecting a string

// person.role = [0, 'admin', 'user']; error its expecting a tuple or specific length and type line 5

let favoriteActivities: string[];
favoriteActivities = ['Sports'];

console.log(person.name);

for (const hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
    // console.log(hobby.map()); // !!! ERROR !!!
}