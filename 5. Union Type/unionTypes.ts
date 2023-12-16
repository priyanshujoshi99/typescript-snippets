let score: number | string = 33;

score = 44;
score = '55';

type User = {
    name: string;
    id: number
}

type Admin = {
    username: string;
    id: number
}

let user: User | Admin = {
    name: 'hero',
    id: 12
}

user = {
    username: 'hero2',
    id: 23  
}

function getId(id: string | number): void {
    if(typeof id === "string") id.toUpperCase();
    if(typeof id === "number") id.toFixed(0);
    console.log('id: ', id)
}

const data: number[] = [1, 2, 3];
const data2: string[] = ['1', '2', '3'];
const data3: (string | number)[] = [1, '2'];

export { };
