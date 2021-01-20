import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alunos } from '../alunos';

@Component({
  selector: 'app-exemplos-angular',
  templateUrl: './exemplos-angular.component.html',
  styleUrls: ['./exemplos-angular.component.css']
})
export class ExemplosAngularComponent {

  @Input()
  nomeAluno = 'Edrian';  

  @Input()
  listaAlunos!: Alunos;
  
  turma     = 'Angular';

  mostraLista = false;


  @Output() 
  selecaoTurma = new EventEmitter<string>();

  atualizaTurma(input: any){  

    console.log('Botão');
    this.turma = input.value;
    console.log(this.listaAlunos);
    this.selecaoTurma.emit(this.turma)  

  }
  abrilista(){
    this.mostraLista = !this.mostraLista;
  }
}

