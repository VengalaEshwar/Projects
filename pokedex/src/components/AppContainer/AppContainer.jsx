import Search from '../search/Search'
import PokemonGrid from '../pokemon_grid/PokemonGrid'
function AppContainer(){
    return (
      <div className='app-container'>
          <Search/>
          <PokemonGrid/>
      </div>
    );
}
export default AppContainer;