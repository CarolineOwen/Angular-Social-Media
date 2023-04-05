import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { env } from 'src/env/env';
import { Post } from '../models/post.model';

@Injectable()
export class PostsService{
    constructor(private http: HttpClient){

    }

    getPosts(): Observable<Post[]>{
        return this.http.get<Post[]>(`${env.apiUrl}/posts`);
    }
}