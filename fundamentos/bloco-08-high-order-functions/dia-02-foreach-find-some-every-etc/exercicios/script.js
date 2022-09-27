const books = [
    {
      id: 1,
      name: 'As Crônicas de Gelo e Fogo',
      genre: 'Fantasia',
      author: {
        name: 'George R. R. Martin',
        birthYear: 1948,
      },
      releaseYear: 1991,
    },
    {
      id: 2,
      name: 'O Senhor dos Anéis',
      genre: 'Fantasia',
      author: {
        name: 'J. R. R. Tolkien',
        birthYear: 1892,
      },
      releaseYear: 1954,
    },
    {
      id: 3,
      name: 'Fundação',
      genre: 'Ficção Científica',
      author: {
        name: 'Isaac Asimov',
        birthYear: 1920,
      },
      releaseYear: 1951,
    },
    {
      id: 4,
      name: 'Duna',
      genre: 'Ficção Científica',
      author: {
        name: 'Frank Herbert',
        birthYear: 1920,
      },
      releaseYear: 1965,
    },
    {
      id: 5,
      name: 'A Coisa',
      genre: 'Terror',
      author: {
        name: 'Stephen King',
        birthYear: 1947,
      },
      releaseYear: 1986,
    },
    {
      id: 6,
      name: 'O Chamado de Cthulhu',
      genre: 'Terror',
      author: {
        name: 'H. P. Lovecraft',
        birthYear: 1890,
      },
      releaseYear: 1928,
    },
  ];
  
  // Adicione o código do exercício aqui:

const firstNameDate = (obj) => obj.find((nome) => nome.author.birthYear === 1947).author.name;
   

console.log(firstNameDate(books))


function authorBornIn1947(obj) {
    let save;
    obj.forEach(element => {
       if (!save || element.name.length < save.length) {
        save = element.name
       }
    });
    return save
  }

  console.log(authorBornIn1947(books))

  function getNamedBook(obj) {
    return obj.find((book) => book.name.length === 26);
  }
  console.log(getNamedBook(books))


  function booksOrderedByReleaseYearDesc(obj) {
   return obj.sort((a, b) => b.releaseYear - a.releaseYear)
    
  }

  console.log (booksOrderedByReleaseYearDesc(books))

  function everyoneWasBornOnSecXX(obj) {
    return obj.every((people) => people.author.birthYear > 1900)
  }

  console.log(everyoneWasBornOnSecXX(books))

  function someBookWasReleaseOnThe80s(obj) {
    return obj.some((book) => book.releaseYear > 1979 && book.releaseYear < 1989)
  }

  console.log(someBookWasReleaseOnThe80s(books))

  function authorUnique() {
    return books.every((book) =>
      !books.some((bookSome) =>
        (bookSome.author.birthYear === book.author.birthYear)
        && (bookSome.author.name !== book.author.name)));
  }

  console.log(authorUnique(books))