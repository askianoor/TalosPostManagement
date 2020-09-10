import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { NavigationExtras, Router, ActivatedRoute } from '@angular/router';
import { APIService } from '../../_Services/api.service';
import { environment } from '../../../environments/environment';
import { Post } from '../../_Models/post';
import { faPlus, faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.css']
})
export class ViewPostComponent implements OnInit {

  faPlus = faPlus;
  faSpinner = faSpinner;
  PostId = '';
  Post: Post = {
    id: '',
    title: '',
    description: '',
    tags: [],
    photoUrl: ''
  };

  items: string[] = ['Link 1', 'Link 2', 'Link 3', 'Link 4'];

  Loading = true;
  ApiPath: string;

  constructor(private apiService: APIService, private route: ActivatedRoute, private router: Router, private ref: ChangeDetectorRef) {
    this.route.queryParams.subscribe(params => {
      this.Post.id = params.PostId;
    });
   }

  ngOnInit(): void {
    this.getPostById(this.Post.id);
    this.ApiPath = environment.ApiUrl;
  }

  getPostById(id): void {
    this.Loading = true;
    this.ref.detectChanges();
    this.apiService.getPostById(id)
      .subscribe(response => {
        this.Post = response;
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
