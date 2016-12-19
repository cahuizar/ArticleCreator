import { Component } from '@angular/core';
import { Article } from './article/article.model'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  articles : Article[];

  constructor() {
    this.articles = [
      new Article('angular site', 'http://angular.io', 10),
      new Article('Google', 'http://google.com', 8),
      new Article('Carlos', 'http://carloshuizar.com', 50)
    ];
  }
  sortedArticles() : Article[] {
    return this.articles.sort((a: Article, b: Article) => b.votes - a.votes);
  }

  addArticle(title : HTMLInputElement, link : HTMLInputElement) : boolean {
      console.log(`Adding article title: ${title.value} and link ${link.value}`);
      this.articles.push(new Article(title.value, link.value, 0));
      title.value = '';
      link.value = '';
      return false;
  }
}
