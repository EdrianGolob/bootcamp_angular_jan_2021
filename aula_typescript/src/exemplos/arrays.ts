const aluno = ['Edrian','Mario','Gabriel',123];

export function listaDeAluno(){
   /* for (let contador = 0; contador < alunos.length; contador++) {
        const element = alunos[contador];
        console.log(element);
        
    }

    for (const element of alunos) {
        console.log(element);
        
    }*/
/*
    alunos.forEach(
        (itemdoArray => {
            console.log(itemdoArray)
        })
    );*/

    //meuForEach(alunos,mostraAluno);
}

function mostraAluno(item: any){
    console.log(item);
}

function meuForEach(colecao: Array<any>, callback: Function){
    for (const element of colecao) {
        callback(element);        
    }
}

export function somaNotas(notas:Array<number>){
    /*let soma = 0;
        for (const nota of notas){
            soma = soma + nota;
        }
        return soma;*/
        return notas.reduce((soma,nota) => soma + nota ,0);
}

class Aluno {
    constructor(public nome: string, public nota: number) {}
}

export function montaTurma(){
    return [
        new Aluno('Edrian', 10),
        new Aluno('Mario', 3),
        new Aluno('Gabriel',8),
    ]
}

export function filtraAlunoPorNota(turma:Array<Aluno>, nota:number){
  /*  let turmaFiltrada: any = [];
    
    for (const aluno of turma) {
        if (aluno.nota === nota) {
            turmaFiltrada.push(aluno);

        }
        
    }
    return turmaFiltrada;*/
    return turma.filter((aluno) => aluno.nota === nota);

}

export function buscaAlunoPorNota(turma:Array<Aluno>, nota:number){
    return turma.find((aluno) => aluno.nota === nota);
}

export function tirarPontoTurma(turma: Array<Aluno>, pontoNegativo:number){
    let turmaNegativa: Array<Aluno> = [];

    turmaNegativa = turma.map((aluno) =>{
        aluno.nota = aluno.nota - pontoNegativo;
        return aluno;
    })

    return turmaNegativa;

}
export function mostraArray(){
    const cliente1 = ['Edrian', 'Gabriel'];
    const cliente2 = [...cliente1];
    
    const [primeiro, outroItem, terceiro] = cliente1;
    
    cliente2.push('Ricardo');

    console.log(cliente2);
    console.log(cliente1);
    console.log([primeiro, outroItem, terceiro]);
}
    
