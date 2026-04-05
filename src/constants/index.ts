

export const PATH_IMAGES = `http://localhost:3333` // Path for images local

const STORAGES = [
  { id: 'gb64', value: '64GB', actived: true},
  { id: 'gb128', value: '128GB', actived: false},
  { id: 'gb256', value: '256GB', actived: false},
  { id: 'gb512', value: '512GB', actived: false},
  { id: 'tb1', value: '1TB', actived: false},
]

const STARS = [
  { id: 1, value: 'terrible'},
  { id: 2, value: 'bad'},
  { id: 3, value: 'normal'},
  { id: 4, value: 'good'},
  { id: 5, value: 'better'},
];

export {
  STORAGES,
  STARS 
}