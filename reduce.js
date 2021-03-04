const friends = [
    {name: 'Hasan', salary: '20'},
    {name: 'Jhankar', salary: '50'},
    {name: 'Monir', salary: '17'},
    {name: 'Imran', salary: '85'},
    {name: 'Hashmi', salary: '71'},
];

const total = friends.reduce((sum, friend) => sum + friend.salary,0);
console.log(total);