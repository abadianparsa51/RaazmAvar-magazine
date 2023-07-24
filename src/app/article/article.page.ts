import { ArticleService } from './../services/article.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-article',
  templateUrl: './article.page.html',
  styleUrls: ['./article.page.scss']
})
export class ArticlePage implements OnInit {
  data: any;
  lastStore: any[];
  articleData: any;
  constructor(private route: ActivatedRoute, private article: ArticleService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.article.getArticleInfo(id).subscribe(data => {
      this.articleData = data;
    });
  }
}
