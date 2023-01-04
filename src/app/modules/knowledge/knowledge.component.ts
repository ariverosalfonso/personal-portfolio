import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { knowledgeLanguage, languageFrontBack } from 'src/app/shared/interfaces/knowledge-language';
import * as data from '../../../assets/data/knowledge-language.json'
@Component({
  selector: 'app-knowledge',
  templateUrl: './knowledge.component.html',
  styleUrls: ['./knowledge.component.scss'],
})
export class KnowledgeComponent implements OnInit {
  public frontend!: languageFrontBack[];
  public backend!: languageFrontBack[];


  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit() {
   this.getLanguageJson();
  }
  getLanguageJson() {
    this.httpClient.get("../../../assets/data/knowledge-language.json").subscribe(
      (data) => {
        let listData: knowledgeLanguage[] = Object.values(data);
        this.frontend = listData[0].frontend;
        // this.backend = listData.filter(x => x.backend);
        this.backend = listData[1].backend;
      }
      
     )
  }


}
