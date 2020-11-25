import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promise',
  templateUrl: './promise.component.html',
  styleUrls: ['./promise.component.scss'],
})
export class PromiseComponent implements OnInit {
  promiseVal;
  buyLaptop;
  buyLaptopWithFetch;
  constructor() {}
  dell = {
    brand: 'Dell',
    hardDisk: '2 TB',
    color: 'Black',
  };

  hp = {
    brand: 'HP',
    hardDisk: '1 TB',
    color: 'Silver',
  };

  notAvil = {
    brand: 'Not Available',
    hardDisk: 'Not Available',
    color: 'Not AVailable',
    status: 'Failed',
  };

  ngOnInit(): void {
    // normal promise
    this.buyLaptop = new Promise((resolve, reject) => {
      // resolve('Promise is resolved');
      // reject('Promise is rejected');
      if (this.DellAvailable()) {
        return setTimeout(() => {
          resolve(this.dell);
        }, 3000);
      } else if (this.HPAvailable()) {
        return setTimeout(() => {
          resolve(this.hp);
        }, 3000);
      } else {
        return setTimeout(() => {
          reject(this.notAvil);
        }, 3000);
      }
    });

    this.buyLaptop
      .then((res) => {
        console.log('then code =>', res);
        this.promiseVal = res;
      })
      .catch((res) => {
        console.log('catch code =>', res);
        this.promiseVal = res;
      });

    // with Fetch API
    this.buyLaptopWithFetch = fetch('https://jsonplaceholder.typicode.com/todos/')
                              .then((response) => response.json());
  }

  DellAvailable(): boolean {
    return true;
  }

  HPAvailable(): boolean {
    return false;
  }

  // Ex-01-with Promise
  fetch1(): any {
    const result1 = document.getElementById('result1');
    console.log('fetching data');
    result1.innerText = 'Fetching Data....';
    this.buyLaptop.then((res) => {
      console.log(res);
      result1.innerText = JSON.stringify(res);
    });
  }

  // Ex-02-Async-Await
  async fetch2(): Promise<any> {
    const result2 = document.getElementById('result2');
    result2.innerText = 'Fetching Data....';
    const data = await this.buyLaptop;
    result2.innerText = JSON.stringify(data);
  }

  // Ex-03- with Fetch API
  // Ex-03 a.Promise way
   fetch3(): any {
    const result3 = document.getElementById('result3');
    result3.innerText = 'Fetching Data....';
    this.buyLaptopWithFetch.then( res => {
      setTimeout(() => {
        result3.innerText = JSON.stringify(res);
      }, 3000 );
    });
  }

  // EX-03  b.Async/Await way
  // async fetch3() {
  //   const result3 = document.getElementById('result3');
  //   result3.innerText = 'Fetching Data....';
  //   const res = await this.buyLaptopWithFetch;
  //   console.log(res);
  //   result3.innerText = JSON.stringify(res);
  // }
}
