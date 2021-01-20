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
  mostrar     = '0';

  @Output()
  abrir = new EventEmitter<string>();
  

  @Output() 
  selecaoTurma = new EventEmitter<string>();

  atualizaTurma(input: any){
  

    if (this.mostrar === '1'){
      this.mostrar = '0';
  } else{
    this.mostrar = '1'
  }
    console.log(this.mostrar);
    this.abrir.emit(this.mostrar)
    console.log('Botão');
    this.turma = input.value;
    console.log(this.listaAlunos);
    this.selecaoTurma.emit(this.turma)

  }
}

