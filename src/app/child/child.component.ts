import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TagService } from '../tag.service';
import { Tag } from '../Tag/tag.model';
import { isUndefined } from 'util';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  public newTags:Tag;
  public stringTest:string="doron maman";
  // @Input() Text;
  @Output() recipeSelected = new EventEmitter<Tag>();

  constructor(private httpService:TagService){}

  ngOnInit(){
    this.httpService.getAll().subscribe(
       tags=>{
        if(isUndefined(tags)){

        }
         console.log(tags)
        this.newTags=tags;
         console.log("New Tag %o", this.newTags);
       },
       (err: HttpErrorResponse) => {
        if (err.error instanceof Error) {
          console.log("Client-side error occured.");
        } else {
          console.log("Server-side error occured.");
        }
      }
     )
 
 }
 onClickChild(){
    this.recipeSelected.emit(this.newTags)
    sessionStorage.setItem("myText",this.stringTest);
   }
}
