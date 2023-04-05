import { Component, OnInit } from '@angular/core';
import { Post } from '../../models/post.model';
import { PostsService } from '../../services/posts.service';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent implements OnInit{
  dataPosts: Post[]=[];
  comments: Comment[] = [];
  constructor(public postsService: PostsService){}
  ngOnInit(): void {
    this.postsService.getPosts().subscribe((posts: Post[])=>this.dataPosts = posts);
  }

}
