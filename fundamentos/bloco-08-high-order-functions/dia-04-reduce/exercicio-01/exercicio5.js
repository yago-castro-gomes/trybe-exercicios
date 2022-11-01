const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
  const expectedResult = 20;
  
  function containsA() {
    let count = 0;
    names.forEach((name) => {
        const letterFromName = name.split('');
        count += letterFromName.reduce((lettersAinName, currentLetter) => {
            if(currentLetter === 'a' || currentLetter === 'A') {
                return lettersAinName + 1;
            }
            return lettersAinName;
         }, 0)
    })
    return count;
  }

  console.log(containsA())