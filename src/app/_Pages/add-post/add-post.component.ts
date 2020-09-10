import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { APIService } from '../../_Services/api.service';
import { CreatePostDTO, Post } from '../../_Models/post';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  NewPostForm: FormGroup;
  createRequest: CreatePostDTO = {
    title: '',
    description: '',
    tags: []
  };

  Post: Post = {
    id: '',
    title: '',
    description: '',
    tags: [],
    photoUrl: ''
  };

  tempTag = '';
  faTimes = faTimes;

  loading = false;
  submitted = false;

  items: string[] = ['Link 1', 'Link 2', 'Link 3', 'Link 4'];

  photo: any;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private apiService: APIService,
    private router: Router) {}

  ngOnInit(): void  {
    this.NewPostForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      tags: ['', Validators.required],
      photoUrl: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f(): any  { return this.NewPostForm.controls; }

  addTag(): void {
    const index = this.createRequest.tags.indexOf(this.tempTag, 0);
    if (!this.tempTag)
    {
      Swal.fire({
        title: 'Operation Failed',
        text: 'Tag name is required!',
        icon: 'error'
      });
      return;
    }
    if (index <= -1) {
      this.createRequest.tags.push(this.tempTag);
      this.tempTag = '';
    }
    else
    {
      Swal.fire({
        title: 'Operation Failed',
        text: 'Tag ' + this.tempTag + ' is already exist!',
        icon: 'error'
      });
    }
  }

  removeTag(tag): void {
    const index = this.createRequest.tags.indexOf(tag, 0);
    if (index > -1) {
      this.createRequest.tags.splice(index, 1);
    }
    else
    {
      Swal.fire({
        title: 'Operation Failed',
        text: 'Tag ' + tag + ' is not found!',
        icon: 'error'
      });
    }
  }

  onFileSelect(event): void {
    const fileList: FileList = event.target.files;
    if (fileList.length > 0) {

      const file = fileList[0];
      this.NewPostForm.get('photoUrl').setValue(file);

      const reader = new FileReader();

      reader.onload = (e) => {
        this.photo = e.target.result;
      };

      reader.onerror = (e) => {
        console.log('File could not be read: ' + e.target.error.code);
      };

      reader.readAsDataURL(event.target.files[0]);
    }
  }

  onSubmit(): void {
    this.submitted = true;

    if (this.createRequest.tags.length > 0)
    {
      this.NewPostForm.get('tags').setValue('OK');
    }

    // stop here if form is invalid
    if (this.NewPostForm.invalid) { return; }

    this.NewPostForm.value.tags = this.createRequest.tags;

    const formData = new FormData();
    const file = this.NewPostForm.get('photoUrl').value;
    formData.append('image', file , file.name);

    this.loading = true;

    this.apiService.createPost(this.NewPostForm.value).subscribe(
        response => {
          this.Post = response;
          this.apiService.uploadPostImage(this.Post.id, formData).subscribe(
              res => {
              Swal.fire({
                title: 'Successful Operation',
                text: 'Post Created! Now Add an Image to the Post',
                icon: 'success'
              });
              this.router.navigate(['/Main']);
            },
            error => {
              console.log(error);
            });

          this.loading = false;
          // this.router.navigate(['/Main']);
        },
        error => {
          console.log(error);
        }
      );
  }

}
