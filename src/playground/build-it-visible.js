class VisibilityToggle extends React.Component {
    constructor(props) {
        super(props);
        this.handleToggle = this.handleToggle.bind(this);
        this.state = {
            visibility: false
        }
    }
    
    handleToggle() {
        this.setState((prevState) => {
            return {
                visibility: !prevState.visibility
            };
        });
    }
    render() {
        return (
            <div>
                <h1>Visibility Toggle</h1>
                <button onClick={this.handleToggle}>{this.state.visibility ? 'Hide details' : 'Show details'}</button>
                <p>{this.state.visibility ? 'Hey. These are some details you can now see!' : ''}</p>
            </div>
        );
    }
};

ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));



// let visibility = false;

// const doToggle = () => {
//     visibility = !visibility;
//     render();
// };

// const render = () => {
//     const jsx = (
//         <div>
//             <h1>Visibility Toggle</h1>
//             <button onClick={doToggle}>
//             {visibility ? 'Hide details' : 'Show details'}
//             </button>
//             <p>{visibility ? 'Hey. These are some details you can now see!' : ''}</p>
//         </div>
//     );

//     ReactDOM.render(jsx, document.getElementById('app'));
// };

// render();
