import { Component, OnInit } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';
@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.css']
})
export class PostCreateComponent implements OnInit {
  enteredContent = '';
  enterTitle = '';
  constructor(private postService: PostService) { }

  ngOnInit() {
  }
  onAddPost(form: NgForm) {
    if(!form.valid) {
      return;
    }
    this.postService.addPost(form.value.title, form.value.content);
  }
}
