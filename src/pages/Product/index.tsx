import { useParams } from 'react-router-dom'

import Hero from '../../components/Hero'
import Section from '../../components/Section'
import Gallery from '../../components/Gallery'

import resident from '../../assets/imgs/resident.png'

const Product = () => {
  const { id } = useParams()
  return (
    <>
      <Hero />
      <Section title="Sobre o Jogo" background="black">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          accusamus quasi eum ea fuga. Cumque esse fugit corporis consectetur
          deleniti veniam velit non rem ullam tempore. Laborum cupiditate nobis
          beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
          pariatur, tempora suscipit ab hic amet dolore? Vitae voluptate et ad
          dolore cumque, facilis illo sint pariatur similique perferendis
          consectetur quia! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Rem ea doloremque eum deleniti soluta nemo, accusamus
          accusantium officia quisquam sapiente consectetur qui a perferendis
          laudantium excepturi quo? Ratione, fugiat unde?
        </p>
      </Section>
      <Section title="Mais Detalhes" background="gray">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore
          accusamus quasi eum ea fuga. Cumque esse fugit corporis consectetur
          deleniti veniam velit non rem ullam tempore. Laborum cupiditate nobis
          beatae. Lorem ipsum dolor sit, amet consectetur adipisicing elit. A
          pariatur, tempora suscipit ab hic amet dolore? Vitae voluptate et ad
          dolore cumque, facilis illo sint pariatur similique perferendis
          consectetur quia! Lorem ipsum dolor, sit amet consectetur adipisicing
          elit. Rem ea doloremque eum deleniti soluta nemo, accusamus
          accusantium officia quisquam sapiente consectetur qui a perferendis
          laudantium excepturi quo? Ratione, fugiat unde?
        </p>
      </Section>
      <Gallery name="Nome do Jogo" defaultCover={resident} />
    </>
  )
}

export default Product
