import { HttpModule, Module } from '@nestjs/common';
import { ArticleService } from './article.service';

@Module({
    imports: [HttpModule],
    providers: [ArticleService],
})
export class ArticleModule { }
