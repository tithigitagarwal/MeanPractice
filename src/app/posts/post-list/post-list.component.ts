import { Component, OnInit, OnDestroy } from '@angular/core';
import { Post } from '../post.model';
import { Subscription } from 'rxjs';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {
  posts: Post [] = [];
  private postSub: Subscription;
  constructor(public postService: PostService){}
  // posts = [
  //   {
  //     title: 'First Post', content: 'The First Post Content'
  //   },
  //   {
  //     title: 'Second Post', content: 'The Second Post Content'
  //   },
  //   {
  //     title: 'Third Post', content: 'The Third Post Content'
  //   },
  //   {
  //     title: 'Forth Post', content: 'The Forth Post Content'
  //   }
  // ]

  ngOnInit() {
    this.posts = this.postService.getPost()
    this.postSub = this.postService.getPostUpdate().subscribe((posts: Post[]) => {
      this.posts = posts;
    })
  }
  ngOnDestroy() {
    this.postSub.unsubscribe();
  }

}
