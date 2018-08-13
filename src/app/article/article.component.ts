import { Component, OnInit, HostBinding,Input } from '@angular/core';
import {Article} from './article.model';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {
  @HostBinding('attr.class') cssClases='row';
  @Input() article:Article;
  //article:Article;

  constructor() {
    /*
      Ya no se necesita esta linea:
    */
    //this.article=new Article('Angular verga','http://angular.io', 10);
   }

   voteUp():boolean {
     this.article.voteUp();
     return false;
  }
  voteDown(): boolean {
    //console.log('antes de modificar votos '+ this.article.votes);
    this.article.voteDown();
    //console.log('Se resto '+ this.article.votes);
    return false;
  }
  ngOnInit() {
  }

}
