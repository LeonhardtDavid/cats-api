import { Component, OnChanges, SimpleChanges, Input, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Component({
  selector: 'cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.css']
})
export class CatsComponent implements OnChanges {

  @Input()
  public category: string;

  public images: CatItem[];

  constructor(private http: HttpClient) { }

  ngOnChanges(changes: SimpleChanges) {
    this.updateImages(changes.category.currentValue);
  }

  private updateImages = (category: string) => {
    const url = category && category !== '' ?
      `${environment.catsBaseUrl}/cats?category=${category}` :
      `${environment.catsBaseUrl}/cats`

    this.http.get(url).subscribe((res: { data: CatItem[] }) => {
      this.images = res.data;
    })
  }

}

class CatItem {
  public id: string;
  public url: string;
  public sourceUrl: string;
}
