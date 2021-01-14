export function exemploTipos(){
    const numero: number = 5;
    const nome: string = 'Edrian';
    const ehHumano: boolean = false;

    console.log('O número é ' + numero.toString())
    console.log(`O nome é ${nome}`) //Forma de digitar com variavel dentro do texto, dando correto espacamento
    console.log('Ele é humano? ' + ehHumano)
}

export function exemploIfLoop(){
    let contador = 0;
    while (contador <= 5) {
        let nome = 'Edrian';
        if (contador === 2 || nome === 'Edrian'){
            console.log('Chegou ao dois');
        } else{
            console.log('Não chegou ao dois ainda');
        }
        console.log('Contador ' + contador);
        contador = contador + 1;
              
    }
}