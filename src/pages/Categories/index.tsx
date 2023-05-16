import ProductList from '../../components/ProductList'
import resident from '../../assets/imgs/resident.png'
import diablo from '../../assets/imgs/diablo.png'
import zelda from '../../assets/imgs/zelda.png'
import starWars from '../../assets/imgs/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

const Categories = () => {
  const [gamesAcao, setGamesAcao] = useState<Game[]>([])
  const [gamesEsporte, setGamesEsporte] = useState<Game[]>([])
  const [gamesSimulacao, setGamesSimulacao] = useState<Game[]>([])
  const [gamesLuta, setGamesLuta] = useState<Game[]>([])
  const [gamesRpg, setGamesRpg] = useState<Game[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/eplay/acao')
      .then((res) => res.json())
      .then((res) => setGamesAcao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/esportes')
      .then((res) => res.json())
      .then((res) => setGamesEsporte(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/simulacao')
      .then((res) => res.json())
      .then((res) => setGamesSimulacao(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/luta')
      .then((res) => res.json())
      .then((res) => setGamesLuta(res))

    fetch('https://fake-api-tau.vercel.app/api/eplay/rpg')
      .then((res) => res.json())
      .then((res) => setGamesRpg(res))
  }, [])
  return (
    <>
      <ProductList games={gamesAcao} title="Acao" background="gray" />
      <ProductList games={gamesEsporte} title="Esportes" background="black" />
      <ProductList games={gamesLuta} title="Luta" background="gray" />
      <ProductList games={gamesRpg} title="Rpg" background="black" />
    </>
  )
}

export default Categories
