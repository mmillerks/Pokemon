//boilerplate
const React = require('react')
const Default = require('../layout/Default.jsx')

const Index extends React.Component {
    render() {
        const pokemon = this.props.pokemon
        return (
            <Default title ="Index Page">
                <div>
                    <h1>See All the Pokemon!</h1>
                </div>
            </Default>
        )
    }
}

const myStyle = {
    color: '#ffffff',
    backgroundColor: '#000000',
    };
    
    class MyFirstComponent extends React.Component() {
    return (
      <div style={myStyle}>My First React Component!</div>;
    }
    }

module.exports = Index; 