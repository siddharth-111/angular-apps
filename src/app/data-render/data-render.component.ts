import { Component, OnInit } from '@angular/core';
import { Comment } from '../comment';
import { PlaceHolderDataServiceService } from '../place-holder-data-service.service';

@Component({
  selector: 'app-data-render',
  templateUrl: './data-render.component.html',
  styleUrls: ['./data-render.component.css']
})
export class DataRenderComponent implements OnInit {
  comments: Comment[] = [];

  constructor(private placeHolderDataService: PlaceHolderDataServiceService ) { }

  ngOnInit(): void {
    this.getComments();
  }

  getComments(): void {
    this.placeHolderDataService.getComments()
      .subscribe(comments => this.comments = comments);
  }
}
