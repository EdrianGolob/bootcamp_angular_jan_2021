import { mostraArray } from './exemplos/arrays';
import {estaAprovado, filtraAlunoPorNota, imprimeNomeAluno, ImprimeTurma, mostraAluno, retornaAluno, Turma} from './exemplos/exemplo-objetos';
import { exemploTipos } from './exemplos/primitivos';


mostraAluno();

mostraArray();
//imprimeNomeAluno();

const alunoNovo = retornaAluno('Lucas', 8);
console.log(alunoNovo);

estaAprovado(0);
exemploTipos();

/*const turma:Turma = {
    professor:{
        nome: "Matheus",
        materia:'informatica',
        
    }
}
ImprimeTurma(turma);*/





