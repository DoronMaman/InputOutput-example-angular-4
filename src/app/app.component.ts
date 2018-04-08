import { Component, OnInit } from '@angular/core';
import { TagService } from './tag.service';
import { Tag } from './Tag/tag.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public newTags:Tag[]=[];
  

  title = 'app';


  ngOnInit(){

  
  }

  onchangetext(event){
      this.newTags=event;
      console.log("doron %o",this.newTags);
  }

}
