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
                            //I know I need to add the dynamic hrf tag above inside the curly braces, 
                            //but do I concantenate with what's there already???
                        )
                    })
                }
                </ul> 
            </div>
        )
    }
}    

module.exports = Index;