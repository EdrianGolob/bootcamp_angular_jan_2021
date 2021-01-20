import { Component } from '@angular/core';
import { Alunos } from './alunos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'aula-angular';
  nome = "Gabriel";

  listaAlunos:Alunos  =[
    {nome: 'Edrian',
  dataNascimento: '1990-01-09'},
  {nome:'Gabriel',
dataNascimento:'2017-06-29'},
  ]

  alertaTurma(turma: string){
   alert(`Turma ${turma} selecionada.`);
   /*(selecaoTurma)="alertaTurma($event) pertence ao app.component.html*/
  }

}
