import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import React from 'react'
import './PokemonList.css'

const PokemonCard = ({ name }) => {
  return (
    <>
      <Card
        title={name}
        cover={
          <img
            src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/132.png"
            alt="Ditto"
          />
        }
        extra={<StarOutlined />}
      ></Card>
    </>
  )
}

export default PokemonCard
