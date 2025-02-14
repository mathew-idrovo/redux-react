import React from 'react'
import { SET_POKEMONS } from '../actions/types'

export const logger = (store) => (next) => (action) => {
  console.log('Middleware logger - Acción recibida:', action)
  next(action) // ✅ Pasa la acción sin modificar al siguiente middleware o reducer
}
export const sortPokemonsMiddleware = (store) => (next) => (action) => {
  if (action.type === SET_POKEMONS) {
    console.log('Ejecutando Middleware')

    const sortedPayload = [...action.payload].sort((a, b) =>
      a.name.localeCompare(b.name)
    )

    const updateAction = {
      ...action,
      payload: sortedPayload,
    }
    console.log('orden', sortedPayload)

    return next(updateAction)
  }
  return next(store)
}
