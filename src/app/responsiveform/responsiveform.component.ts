import { MainserviceService } from './../services/mainservice.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-responsiveform',
  templateUrl: './responsiveform.component.html',
  styleUrls: ['./responsiveform.component.scss'],
  providers: [MainserviceService],
})
export class ResponsiveformComponent implements OnInit {
  isCheckBoxCheck = true;
  checkBoxData = [];
  srcImageUrl;
  moviesData = [];
  cTemperature;
  fTemperature;
  movieArr = [];
  constructor(
    public http: HttpClient,
    private mainService: MainserviceService
  ) {}

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
    this.arrayManipulations();
    this.serviceWithoutDecorator();
  }

  arrayManipulations(): void {
    const arr = [12, 24, 36, 48, 1, 2, 3, 2, 24, 12];
    console.log(`Original Array: ${arr}`);
    const inbuiltSortedArr = arr.sort((a, b) =>  a - b);
    console.log(`inbuilt sort: ${inbuiltSortedArr}`);
    console.log(`inbuilt sort DESC: ${arr.sort((a, b) =>  b - a)}`);
    console.log(`inbuilt duplicay removal: ${[...new Set(arr)]}`);
    const sortedArr = this.sortArraywithoutInbuilt(arr);
    console.log(`W/o inbuilt sort: ${sortedArr}`);
    const distinctArr = this.distinctArrayWithoutInbuilt(arr);
    console.log(`W/o inbuilt duplicay removal: ${distinctArr}`);
  }

  distinctArrayWithoutInbuilt(arr): any {
    const distinctArr = arr.filter((item, index, inputArr) => {
      return inputArr.indexOf(item) === index;
    });
    return distinctArr;
  }

  sortArraywithoutInbuilt(arr): any {
      let n = arr.length;
      while (n !== 0) {
        for (let i = 1; i < arr.length; i++) {
          if (arr[i] < arr[i - 1]) {
            const save = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = save;
          }
        }
        n--;
      }
      return arr;
  }

  serviceWithoutDecorator(): void {
    console.log(this.mainService.getTestData());
    alert(this.mainService.getTestData());
  }

  checkGenreBasedOnsearchText(searchText): void {
    const filteredArr = [];
    for (const item of this.movieArr) {
      if (searchText !== '' && item.genre.includes(searchText)) {
        filteredArr.push(item);
      }
    }
    if (searchText === '') {
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
    const testReturnType = this.http
      .get<SearchResults>('https://random.dog/woof.json')
      .subscribe((res) => {
        this.srcImageUrl = res.url;
      });
    console.log(testReturnType);
    console.log(typeof testReturnType); // object
  }

  tempConversion(tempValue, tempType) {
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
