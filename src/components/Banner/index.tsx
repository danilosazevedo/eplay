import bannerImg from '../../assets/imgs/banner-homem-aranha.png'
import Button from '../Button'
import Tag from '../Tag'
import { Imagem, Preco, Titulo } from './styles'

const Banner = () => (
  <Imagem style={{ backgroundImage: `url(${bannerImg})` }}>
    <div className="container">
      <Tag size="big">Destaques do dia</Tag>
      <div>
        <Titulo>Marvel&apos;s Spider-Man: Miles Morales PS4 & PS5</Titulo>
        <Preco>
          De <span>R$ 250,00</span> <br />
          Por apenas R$ 99,90
        </Preco>
      </div>
      <Button
        type="link"
        to="/produto"
        title="Clique aqui para aproveitar esta oferta "
      >
        Aproveitar
      </Button>
    </div>
  </Imagem>
)

export default Banner
