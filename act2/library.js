const books = [
    {
      id: 1,
      title: 'Memoirs of Hadrian',
      author: 'Marguerite Yourcenar',
      likedby: 1,
      instock: false
    },
    {
      id: 2,
      title: 'The Abyss',
      author: 'Marguerite Yourcenar',
      likedby: 3,
      instock: true
    },
    {
      id: 3,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
      likedby: 5,
      instock: true
    },
    {
      id: 4,
      title: 'The Girl Who Played Go',
      author: 'Shan Sa',
      likedby: 2,
      instock: true
    },
    {
      id: 5,
      title: 'Treasure Island',
      author: 'Shan SaRobert Louis Stevenson',
      likedby: 4,
      instock: true
    },
  ]
  const users = [
    { id: 1, name: 'Ahmed', pass: 'sing' },
    { id: 2, name: 'Piotr', pass: 'sing' },
    { id: 3, name: 'Evariste', pass: 'sing' },
    { id: 4, name: 'Naipeng', pass: 'sing' },
    { id: 5, name: 'Aminata', pass: 'sing' },
  ]
  module.exports = { books, users }