const React = require('react');

class Index extends React.Component {
    render(){
        const pokemons = this.props.pokemons
        console.log(pokemons)
        return (
            <div>
                <h1>See All the Pokemon!</h1>
                <nav>
                    <a href="/pokemon/new">Go to the new page</a>
                </nav>
                <ul>
                {
                   pokemons.map((pokemon, i) => {
                        return (
                            <li><a href={`/pokemon/${i}`}>{pokemon.name}</a> </li>
                        )
                    })
                }
                </ul> 
            </div>
        )
    }
}    

module.exports = Index;