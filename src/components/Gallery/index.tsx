import Section from '../Section'

import { Action, Item, Items, Modal, ModalContent } from './styles'

import spiderman from '../../assets/imgs/banner-homem-aranha.png'
import starwars from '../../assets/imgs/star_wars.png'

import play from '../../assets/imgs/play.png'
import zoom from '../../assets/imgs/zoom.png'
import fechar from '../../assets/imgs/fechar.png'

type GalleryItem = {
  type: 'image' | 'video'
  url: string
}

const mock: GalleryItem[] = [
  {
    type: 'image',
    url: spiderman
  },
  {
    type: 'image',
    url: starwars
  },
  {
    type: 'video',
    url: 'https://www.youtube.com/embed/9WFYuIu7BKA'
  }
]

type Props = {
  defaultCover: string
  name: string
}
const Gallery = ({ defaultCover, name }: Props) => {
  const getMediaCover = (item: GalleryItem) => {
    if (item.type === 'image') return item.url
    return defaultCover
  }

  const getMediaIcon = (item: GalleryItem) => {
    if (item.type === 'image') return zoom
    return play
  }

  return (
    <>
      <Section title="Galeria" background="black">
        <Items>
          {mock.map((media, index) => (
            <Item key={media.url}>
              <img
                src={getMediaCover(media)}
                alt={`Mídia ${index + 1} de Nome do Jogo`}
              />
              <Action>
                <img src={getMediaIcon(media)} alt="clique para ampliar" />
              </Action>
            </Item>
          ))}
        </Items>
      </Section>
      <Modal>
        <ModalContent className="container">
          <header>
            <h4>{name}</h4>
            <img src={fechar} alt="" />
          </header>
          <img src={spiderman} alt="" />
        </ModalContent>
        <div className="overlay"></div>
      </Modal>
    </>
  )
}

export default Gallery
