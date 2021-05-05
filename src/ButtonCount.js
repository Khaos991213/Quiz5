const Title = (props) => {
    return (
        <h2 onClick={props.handleClick}>點⼀一下</h2>)
}
class App extends React.Component {
    constructor() {
        super();
        this.state = { counter: 1 }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick() { this.setState({ counter: this.state.counter + 1 }) }
    render() {
        return (
            <div>
                <h1>爸爸的：{this.state.counter}</h1>
                <Title handleClick={this.handleClick} text={this.state.counter} />
            </div>)
    }
}