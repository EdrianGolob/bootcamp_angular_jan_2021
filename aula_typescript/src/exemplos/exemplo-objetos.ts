export function filtraAlunoPorNota(turma: Alunos, nota = 10){
    return turma.filter((item) => item.nota === nota);
}

export interface Aluno{
    nome: string;
    nota: number;
}

export interface Professor{
    nome?:string;
    materia?:string;
    eLegal: Function;
}

export interface Turma{
    professor?: Professor;
    alunos?:    Alunos;
}

export type Alunos = Array<Aluno>;

export function ImprimeTurma(turma: Turma) {
    console.log('Turma é composta pelo ');
    console.log('Professor ' + turma?.professor?.nome);
    console.log(turma.professor?.eLegal());

}

export function mostraAluno(){
    const aluno1:Aluno = {
        nome: 'Edrian', nota: 8
    };

    const aluno2:Aluno = {...aluno1, nota: 10};

    aluno2.nome = 'Gabriel';

    console.log(aluno2);
    console.log(aluno1);
}

export function imprimeNomeAluno(aluno: Aluno) {
    const { nome, nota } = aluno;
    

    //console.log('O nome do aluno é ' + nome);
  
    
}

export function retornaAluno(nome:string,nota:number): Aluno {
    const teste = {nome, nota};

    const textoAprovado = nota >= 7 ? 'Aluno aprovado' : 'Aluno reprovado';

    const lAprovado = nota >= 7 || nome === 'Alvaro';
     return{
         nome,
         nota,
     }
    
}

export function estaAprovado(nota?: number) {
    //const notaAvaliada = nota != null && nota != undefined ? nota: 100;
    const notaAvaliada = nota ?? 100;
    const textoNota = nota > 7 ? 'Está aprovado' : 'Está reprovado';
    console.log(notaAvaliada, textoNota);
        
}

