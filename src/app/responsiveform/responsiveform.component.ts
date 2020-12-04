import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-responsiveform',
  templateUrl: './responsiveform.component.html',
  styleUrls: ['./responsiveform.component.scss'],
})
export class ResponsiveformComponent implements OnInit {
  isCheckBoxCheck = true;
  checkBoxData = [];
  srcImageUrl;
  moviesData = [];
  cTemperature;
  fTemperature;
  movieArr = [];
  constructor(public http: HttpClient) {}

  ngOnInit(): void {
    this.checkBoxData = [
      { name: 'checkbox1', code: 101 },
      { name: 'checkbox2', code: 102 },
    ];
    this.moviesData = [
      {
        title: 'Movie A',
        genre: ['Action', 'Drama', 'Adventures'],
      },
      {
        title: 'Movie B',
        genre: ['Drama'],
      },
      {
        title: 'Movie C',
        genre: ['Drama', 'Adventures'],
      },
      {
        title: 'Movie D',
        genre: ['Action', 'Adventures'],
      },
    ];
    this.movieArr = this.moviesData;
    this.fTemperature = 32;
    this.cTemperature = 0;
    this.getRandomPictures();
  }

  checkGenreBasedOnsearchText(searchText): void {
    const filteredArr = [];
    for (const item of this.movieArr) {
        if (searchText !== '' && item.genre.includes(searchText)) {
          filteredArr.push(item);
        }
    }
    if (searchText === ''){
      this.moviesData = this.movieArr;
    } else {
      this.moviesData = filteredArr;
    }
  }

  toggleCheckbox(event, target): void {
    if (event.targe.checked) {
      this.isCheckBoxCheck = true;
      console.log(target);
    } else {
      this.isCheckBoxCheck = false;
    }
  }

  getRandomPictures(): void {
    this.http
      .get<SearchResults>('https://random.dog/woof.json')
      .subscribe((res) => {
        this.srcImageUrl = res.url;
      });
  }

  tempConversion(tempValue, tempType){
    if (tempType === 'F') {
      // convert to celsius
      // 32°F − 32) × 5/9 = 0°C
      this.cTemperature = (tempValue - 32) * (5 / 9);
    } else if (tempType === 'C') {
      this.fTemperature = tempValue * (9 / 5) + 32;
      // convert to Fahrenheit
      // (0°C × 9/5) + 32 = 32°F
    }
  }
}

interface SearchResults {
  fileSizeBytes: string;
  url: string;
}
