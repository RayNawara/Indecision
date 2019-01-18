console.log('App.js is running');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};
const template = (
    <div>
    <h1>{app.title}</h1>
    {(app.subtitle) && <p>{app.subtitle}</p>}
    {(app.options ? <p>Here are your options: {app.options[0]} {app.options[1]}</p> : <p>No options</p>)}
    <ol>
        <li>Item one</li>
        <li>Item two</li>
    </ol>
    </div>
);

const user = {
    name: 'Ray',
    age: 70,
    location: 'Brooksville'
};
function getLocation(location) {
    if (location) {
        return <p>Location: {location}</p>;
    }
};

const templateTwo = (
    <div>
    <h1>{user.name.toUpperCase() + '!'}</h1>
    <h1>{user.name ? user.name : 'Anonymous'}</h1>
    {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
    </div>
);
const appRoot = document.getElementById('app');

ReactDOM.render(template, appRoot);