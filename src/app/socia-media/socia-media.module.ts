import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SociaMediaRoutingModule } from './socia-media-routing.module';
import { PostsService } from './services/posts.service';
import { PostsResolver } from './resolvers/posts.resolver';
import { PostListComponent } from './components/post-list/post-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    PostListComponent
  ],
  imports: [
    CommonModule,
    SociaMediaRoutingModule,
    SharedModule
  ],
  providers:[
    PostsService,
    PostsResolver
  ]
})
export class SociaMediaModule { }
