import { Component } from '@angular/core';

@Component({
  selector: 'app-parentcounter',
  templateUrl: './parentcounter.component.html',
  styleUrls: ['./parentcounter.component.css']
})
export class ParentcounterComponent {
  name = "Divya"
 
  likes : number = 0;
  dislikes : number = 0;

  clearOnClick()
  {
    this.likes = 0;
    this.dislikes = 0;
  }

  

}
