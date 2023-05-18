import { useEffect, useState } from 'react'
import Button from '../Button'
import Tag from '../Tag'
import { Imagem, Preco, Titulo } from './styles'

import { formataPreco } from '../ProductList'

import { useGetFeaturedGameQuery } from '../../services/api'

const Banner = () => {
  const { data: game, isLoading } = useGetFeaturedGameQuery()

  if (!game) {
    return <h3>...carregando</h3>
  }

  return (
    <Imagem style={{ backgroundImage: `url(${game.media.cover})` }}>
      <div className="container">
        <Tag size="big">Destaques do dia</Tag>
        <div>
          <Titulo>{game.name}</Titulo>
          <Preco>
            De <span>{formataPreco(game?.prices.old)}</span> <br />
            Por apenas {formataPreco(game?.prices.current)}
          </Preco>
        </div>
        <Button
          type="link"
          to={`/product/${game.id}`}
          title="Clique aqui para aproveitar esta oferta "
        >
          Aproveitar
        </Button>
      </div>
    </Imagem>
  )
}

export default Banner
