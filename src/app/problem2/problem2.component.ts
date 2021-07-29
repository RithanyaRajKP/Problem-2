import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-problem2',
  templateUrl: './problem2.component.html',
  styleUrls: ['./problem2.component.scss']
})
export class Problem2Component {

  constructor() { }

  a:number=0;
  result:number[]=[];
  submitclicked(n:number){
    for(var i=0;i<n;i++){
      this.result.push(2*i+1);
    }
  }
  resetclicked(){
    {
      this.a=0;
      this.result=[];
  }
  }

}
