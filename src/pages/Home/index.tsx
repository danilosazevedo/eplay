import ProductList from '../../components/ProductList'
import Banner from '../../components/Banner'

import resident from '../../assets/imgs/resident.png'
import diablo from '../../assets/imgs/diablo.png'
import zelda from '../../assets/imgs/zelda.png'
import starWars from '../../assets/imgs/star_wars.png'
import { useEffect, useState } from 'react'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../services/api'

export interface GalleryItem {
  type: 'image' | 'video'
  url: string
}

export type Game = {
  id: number
  name: string
  description: string
  release_date?: string
  prices: {
    discount?: number
    old?: number
    current?: number
  }
  details: {
    category: string
    system: string
    developer: string
    publisher: string
    languages: string[]
  }
  media: {
    thumbnail: string
    cover: string
    gallery: GalleryItem[]
  }
}

const Home = () => {
  const { data: onSaleGames } = useGetOnSaleQuery()
  const { data: soonGames } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="onSale"
        />
        <ProductList
          games={soonGames}
          title="Em Breve"
          background="black"
          id="Soon"
        />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
