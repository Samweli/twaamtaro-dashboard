import { Injectable }    from '@angular/core';

@Injectable()
export class StreetsUrlService {
  
  public apiUrl = 'http://twaamtaro.org/api/v1/'; 
  public localUrl = 'http://localhost:3000/api/v1/'; 
  public streetsUrl = 'streets';
  public streetRanksUrl = 'drains/ranking'; 
  
  constructor() { }
 
}


