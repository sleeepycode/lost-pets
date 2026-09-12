import type { Pet } from '../types/Pet'

export const pets: Pet[] = [
  {
    id: 1,
    name: 'Барсик',
    type: 'Кот',
    location: 'Москва, парк Сокольники',
    lostDate: '10.09.2026',
    description: 'Серый кот с белой грудкой. Пугливый, может прятаться.',
    contact: '+7 999 000-00-01',
    status: 'SEARCHING',
  },
  {
    id: 2,
    name: 'Рекс',
    type: 'Собака',
    location: 'Москва, район Измайлово',
    lostDate: '08.09.2026',
    description: 'Немецкая овчарка, чёрно-коричневый окрас.',
    contact: '+7 999 000-00-02',
    status: 'FOUND',
  },
  {
    id: 3,
    name: 'Мия',
    type: 'Кошка',
    location: 'Москва, ул. Лесная',
    lostDate: '11.09.2026',
    description: 'Белая кошка с серым пятном возле правого уха.',
    contact: '+7 999 000-00-03',
    status: 'SEARCHING',
  },
]