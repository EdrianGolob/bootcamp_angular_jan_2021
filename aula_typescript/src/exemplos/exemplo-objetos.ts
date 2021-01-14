export function filtraAlunoPorNota(turma: Alunos, nota = 10){
    return turma.filter((item) => item.nota === nota);
}

export interface Aluno{
    nome: string;
    nota: number;
}


export type Alunos = Array<Aluno>;
