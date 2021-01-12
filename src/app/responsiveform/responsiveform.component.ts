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
  forLoopArr=[];
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
    const array = [12, 12, 24, 24, 36, 36, 1, 2, 3, 2, 24, 12];
    this.findSecondLargestElement(array, array.length);
    const arr1 = [2, 4, 6, 7];
    const arr2 = [1, 3, 5, 7];
    const commonArr = this.commonElementsIn2GivenArray(arr1, arr2);
    console.log(`common Array element in arr1 & arr2 is: ${commonArr}`);
    this.fizzBuzz(20);

    this.forLoopArr=[
    {
     'name':'Nisha',
     'salary':12345
    },
    {
      'name':'Nikita',
      'salary':765890
    },
    {
      'name':'Satish',
      'salary':9987654
    },
    {
      'name':'Roshani',
      'salary':67890
    }
    ]
  }

  trackByFuntion(index, item) {
    console.log(index,item);
    return index;
  }

  commonElementsIn2GivenArray(arr1, arr2): any {
    const commonArr = [];
    for (let i = 0; i < arr1.length; i++) {
      if (arr1.includes(arr2[i])) {
        commonArr.push(arr1[i]);
      }
    }
    return commonArr;
  }

  findSecondLargestElement(arr, arrSize): any {
    let i;
    /* There should be atleast two elements */
    if (arrSize < 2) {
      console.log(`Invalid input`);
    }

    // sort the array
    arr.sort((a, b) => a - b); // [1,2,2,3,12,12,12,12,24,24,36,36]

    // start from second last element
    // as the largest element is at last
    for (i = arrSize - 2; i >= 0; i--) {
      // if the element is not
      // equal to largest element
      if (arr[i] !== arr[arrSize - 1]) {
        console.log(`The second largest element is: ${arr[i]}`);
        return;
      }
    }
    console.log(`There is no second largest element in given array`);
  }

  arrayManipulations(): void {
    const arr = [12, 24, 36, 48, 1, 2, 3, 2, 24, 12];
    console.log(`Original Array: ${arr}`);
    const inbuiltSortedArr = arr.sort((a, b) => a - b);
    console.log(`inbuilt sort: ${inbuiltSortedArr}`);
    console.log(`inbuilt sort DESC: ${arr.sort((a, b) => b - a)}`);
    console.log(`inbuilt duplicay removal: ${[...new Set(arr)]}`);
    const sortedArr = this.sortArraywithoutInbuilt(arr);
    console.log(`W/o inbuilt sort: ${sortedArr}`);
    const distinctArr = this.distinctArrayWithoutInbuilt(arr);
    console.log(`W/o inbuilt duplicay removal: ${distinctArr}`);
  }

  fizzBuzz(n): any {
    for (let i = 1; i < n; i++) {
      if (i % 3 === 0) {
        console.log('Fizz');
      } else if (i % 5 === 0) {
        console.log('Buzz');
      } else if (i % 15 === 0) {
        console.log('FizzBuzz');
      } else {
        console.log(i);
      }
    }
  }

  refreshNames(){
    this.forLoopArr=[
      {
       'name':'Nisha',
       'salary':12345
      },
      {
        'name':'Nikita',
        'salary':765890
      },
      {
        'name':'Satish',
        'salary':9987654
      },
      {
        'name':'Roshani',
        'salary':67890
      }
      ]
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
