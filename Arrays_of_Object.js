const array = [
    { name: 'Ron', jobTitle: 'Fullstack Developer', boss: 'Mr Bossman'},
    { name: 'Christian', jobTitle: 'Fullstack Developer', boss: 'Mr Bossman'},
    { name: 'Frodo', jobTitle: 'Hobbit', boss: 'Mr Bossman'},
    { name: 'Mr Bossman', jobTitle: 'Boss'}
];

array.forEach(obj => {
    if (!obj.boss) {
        console.log(`${obj.jobTitle} ${obj.name} doesn't report to anybody.`);
    }
    else {
        console.log(`${obj.jobTitle} ${obj.name} reports to ${obj.boss}`);
    }
});
