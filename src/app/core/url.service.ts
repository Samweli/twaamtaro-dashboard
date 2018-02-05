import { Injectable } from '@angular/core';

@Injectable()
export class UrlService {
  // base url variables
  prodUrl: string = 'http://twaamtaro.org/api/v1/';
  devUrl: string = 'http://localhost:3000/api/v1/';
  baseUrl:string = this.devUrl;

  constructor() { }

}
