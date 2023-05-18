import ProductList from '../../components/ProductList'
import resident from '../../assets/imgs/resident.png'
import diablo from '../../assets/imgs/diablo.png'
import zelda from '../../assets/imgs/zelda.png'
import starWars from '../../assets/imgs/star_wars.png'
import { Game } from '../Home'
import { useEffect, useState } from 'react'

import {
  useGetActionGamesQuery,
  useGetFightGamesQuery,
  useGetRpgGamesQuery,
  useGetSimulationGamesQuery,
  useGetSportGamesQuery
} from '../../services/api'

const Categories = () => {
  const { data: actionGames } = useGetActionGamesQuery()
  const { data: fightGames } = useGetFightGamesQuery()
  const { data: rpgGames } = useGetRpgGamesQuery()
  const { data: simulationGames } = useGetSimulationGamesQuery()
  const { data: sportGames } = useGetSportGamesQuery()

  if (actionGames && fightGames && rpgGames && simulationGames && sportGames) {
    return (
      <>
        <ProductList
          games={actionGames}
          title="Acao"
          background="black"
          id="action"
        />
        <ProductList
          games={sportGames}
          title="Esportes"
          background="gray"
          id="sport"
        />
        <ProductList
          games={fightGames}
          title="Luta"
          background="black"
          id="fight"
        />
        <ProductList games={rpgGames} title="Rpg" background="black" id="rpg" />
        <ProductList
          games={simulationGames}
          title="Simulation"
          background="gray"
          id="simulation"
        />
      </>
    )
  }
  return <h4>Carregando...</h4>
}

export default Categories
