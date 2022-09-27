const expectedResult = {
    id: 1,
    name: 'As Crônicas de Gelo e Fogo',
    genre: 'Fantasia',
    author: {
          name: 'George R. R. Martin',
      birthYear: 1948,
    },
      releaseYear: 1991,
  };

 const getNamedBook = (livros) => livros.name.length === 26 ? livros.name : false

  console.log(getNamedBook(expectedResult))
