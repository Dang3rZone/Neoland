import { Component, OnInit } from '@angular/core';
import { RandomService } from './random.service';
import { PostsService } from './services/posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(
    private postsService: PostsService,
    private randomService: RandomService
  ) { }

  // ngOnInit() {
  //   this.postsService.getAll()
  //     .then(response => {
  //       console.log(response);
  //     });

  //   this.postsService.createPost()
  //     .then(response => {
  //       console.log(response);
  //     })
  // }

  async ngOnInit() {
    const responseAll = await this.postsService.getAll();
    console.log(responseAll);

    const responsePost = await this.postsService.createPost();
    console.log(responsePost);

    const responsePut = await this.postsService.updatePost(6);
    console.log(responsePut);

    const responseRandom = await this.randomService.getNumAleatorio(12, 50);
    console.log(responseRandom);
  }

}
