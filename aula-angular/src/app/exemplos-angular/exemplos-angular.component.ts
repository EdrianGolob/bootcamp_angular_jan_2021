import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-exemplos-angular',
  templateUrl: './exemplos-angular.component.html',
  styleUrls: ['./exemplos-angular.component.css']
})
export class ExemplosAngularComponent {
  nomeAluno = 'Edrian';  
  turma     = 'Angular';

  atualizaTurma(input: any){
    this.turma = input.value;
  }
}

