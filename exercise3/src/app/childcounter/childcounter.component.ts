
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-childcounter',
  templateUrl: './childcounter.component.html',
  styleUrls: ['./childcounter.component.css']
})
export class ChildcounterComponent  {
  
  @Input()
  username : String = undefined;

  @Input()
  LikesAfterClear : number = undefined;

  @Input()
  DislikesAfterClear : number = undefined;

  likes : number = 1;
  dislikes : number = 1;

  @Output()
  likesCount : EventEmitter<number> = new EventEmitter<number>();

  @Output()
  dislikesCount : EventEmitter<number> = new EventEmitter<number>();

  likeOnClick(){
    if(this.LikesAfterClear==0)
    {
      this.likes = 1;
      this.LikesAfterClear = undefined;
    }
    this.likesCount.emit(this.likes++);
  }

  dislikeOnClick()
  {
    if(this.DislikesAfterClear==0)
    {
      this.dislikes = 1;
      this.DislikesAfterClear = undefined;
    }
    this.dislikesCount.emit(this.dislikes++);
  }

}
