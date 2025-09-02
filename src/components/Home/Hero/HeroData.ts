

export interface IHeroItem {
  id: number;
  percent: number;
  title: string;
  description: string;
  image: string;
}

export const heroItems: IHeroItem[] = [
  {
    id: 1,
    percent: 30,
    title: 'Auscultadores sem fios com Cancelamento de ruído',
    description: 'Dê aos seus ouvidos mais segurança e bastante conforto e claro viva da música e aproveite.',
    image: '/images/hero/hero-01.png'
  },
  {
    id: 2,
    percent: 15,
    title: 'Auscultadores Gamer absoluto',
    description: 'Bons jogos têm bons efeitos sonoros, cuide da sua audição, jogue melhor e finalize seus desafios.',
    image: '/images/hero/hero-05.png'
  }
]