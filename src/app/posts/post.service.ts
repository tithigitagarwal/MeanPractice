import { Post } from './post.model';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({providedIn: 'root'})
export class PostService {
    private posts: Post [] =  [];
    private postUpdated = new Subject<Post[]>();
    getPost () {
        return [...this.posts]
    }
    addPost(title: string, content: string) {
        const post = { title: title, content: content }
        this.posts.push(post);
        this.postUpdated.next({...this.posts})
    }
    getPostUpdate(){
        return this.postUpdated.asObservable();
    }
}