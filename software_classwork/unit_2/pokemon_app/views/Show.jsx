const React = require('react')
    class Show extends React.Component {
       render () {
         const pokemon = this.props.pokemon
         return (
            <div>
                  <h1>Gotta Catch 'Em All</h1>
                  <h2>{pokemon.name}</h2>
                  <a href="/pokemon">Back to Index</a>
                  <img src={`${pokemon.img}.jpg`}></img>
                  <a href='/'>Go Back to Index</a>
            </div>
         );
        }

      }
     module.exports  = Show;