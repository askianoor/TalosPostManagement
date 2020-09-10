import { Component, OnInit } from '@angular/core';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { Post } from '../../_Models/post';
import { APIService } from '../../_Services/api.service';
import { Router, NavigationExtras } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  faPlus = faPlus;
  Posts: Post[];
  Loading = false;
  ApiPath = environment.ApiUrl;

  items: string[] = ['Link 1', 'Link 2', 'Link 3', 'Link 4'];

  constructor(private apiService: APIService, private router: Router) { }

  ngOnInit(): void {
    this.getPosts();
  }

  getPosts(): void {
    this.Loading = true;

    this.apiService.getPosts()
      .subscribe(response => {
        this.Posts = response;
      });

    this.Loading = false;
  }

  ViewPostDetails(postItem): void {
    const navigationExtras: NavigationExtras = {
      queryParams: { PostId:  postItem.id }
    };

    this.router.navigate(['/ViewPost'], navigationExtras);
  }

}
