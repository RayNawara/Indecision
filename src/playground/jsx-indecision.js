console.log('App.js is running');

// JSX - JavaScript XML

const app = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: ['One', 'Two']
};

const onFormSubmit = (e) => {
    e.preventDefault();

    const option = e.target.elements.option.value;

    if (option) {
        app.options.push(option);
        e.target.elements.option.value = '';
        renderItemList();
    }
};

const makeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    alert(option);
};

const removeAll = () => {
    app.options = [];
    renderItemList();
}

const appRoot = document.getElementById('app');

const renderItemList = () => {
    const template = (
        <div>
        <h1>{app.title}</h1>
        {(app.subtitle) && <p>{app.subtitle}</p>}
        <p>{app.options.length > 0 ? 'Here are your options' : 'No options'}</p>
        <button disabled={app.options.length === 0} onClick={makeDecision}>What should I do?</button>
        <button onClick={removeAll}>Remove All</button>
        <ol>
        {
            app.options.map((item) => <li key={item}>{item}</li>)
        }    
        </ol>
        <form onSubmit={onFormSubmit}>
            <input type="text" name="option" />
            <button>Add option</button>
        </form>
        </div>
    );

    ReactDOM.render(template, appRoot);
};

renderItemList();