import { StarOutlined } from '@ant-design/icons'
import { Card } from 'antd'
import Meta from 'antd/lib/card/Meta'
import './PokemonList.css'

const PokemonCard = ({ name, url }) => {
  return (
    <Card
      title={name}
      cover={<img src={url} alt={name} />}
      extra={<StarOutlined />}
    >
      <Meta description="fire, fairy" />
    </Card>
  )
}

export { PokemonCard }
