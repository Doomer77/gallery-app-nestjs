import { Injectable } from '@nestjs/common';

@Injectable()
export class ArticleService {
  async createArticle () {
    return 'create Article in service'
  }
}