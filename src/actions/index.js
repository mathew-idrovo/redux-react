import React from 'react'
import { SET_POKEMONS } from './types'
import { getPokemonsDetail } from '../api'

export const setPokemons = (payload) => ({
  type: SET_POKEMONS,
  payload,
})

export const getPokemonsWithDetail = (pokemons = []) => {
  return async (dispatch) => {
    console.log('ejecuta ', pokemons)

    // ✅ Ahora Redux Thunk reconoce la función correctamente
    const detailPokemons = await Promise.all(
      pokemons.map((pokemon) => getPokemonsDetail(pokemon))
    )
    console.log('detalle', detailPokemons)

    dispatch(setPokemons(detailPokemons))
    console.log('ejecutando setpokemos')
    // ✅ Ahora `dispatch` está dentro de la función correcta
  }
}
