import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import logo from './assets/logo.svg'
import './App.css'
import { Button, Col } from 'antd'
import PokemonList from './components/PokemonList'
import { useEffect } from 'react'
import { getPokemon } from './api'
import { setPokemons as setPokemonsActions } from './actions'
import { connect } from 'react-redux'

function App({ pokemons, setPokemons }) {
  console.log('🚀 ~ file: App.js ~ line 12 ~ App ~ pokemons', pokemons)
  useEffect(() => {
    const fetchPokemons = async () => {
      const pokemonsRes = await getPokemon()
      console.log('datos', pokemonsRes)

      setPokemons(pokemonsRes || [])
    }
    fetchPokemons()
  }, [])
  return (
    <>
      <div className="App">
        <Col span={6}>
          <img src={logo} alt="Pokedux" />
        </Col>
        <Col></Col>
        <PokemonList pokemons={pokemons} />
      </div>
    </>
  )
}
const mapStateToProps = (state) => ({
  pokemons: state.pokemons,
})

const mapDispatchToProps = (dispatch) => ({
  setPokemons: (value) => dispatch(setPokemonsActions(value)),
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
