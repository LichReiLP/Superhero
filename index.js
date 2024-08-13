document.addEventListener('DOMContentLoaded', () => {
    const url = 'https://akabab.github.io/superhero-api/api/all.json';
    
    fetch(url)
        .then(resposta => resposta.json())
        .then(data => {
            const alterEgos = data.map(personagem => personagem.biography.alterEgos);
            console.log("Alter Egos: ", alterEgos);

            const totalCarac = data.reduce((resultado, personagem) => {
                const firstAppearance = personagem.biography.firstAppearance;
                const publisher = personagem.biography.publisher;

                if(publisher === "Marvel Comics" && typeof firstAppearance === 'string' && firstAppearance.trim().length > 0){
                    return resultado + firstAppearance.length;
                }
                return resultado;
            }, 0);
            console.log("Total de caracteres da Marvel: ", totalCarac);

            const DcCarac = data.filter(personagem => personagem.biography.publisher === "DC Comics");
            console.log("Personagens da DC: ", DcCarac);

            const sortNome = [...data].sort((a, b) => a.name.length - b.name.length);
            console.log("Personagens ordenados pelo tamanho do nome:", sortNome);
        })
        .catch(error => console.error('Erro na requisição:', error));
});