import { Injectable }    from '@angular/core';

@Injectable()
export class DrainsUrlService {

  public apiUrl = 'http://localhost:3000/api/v1/';
  public localUrl = 'http://localhost:3000/api/v1/';
  public drainsUrl = 'drains/?type=all';
  public cleanDrainsUrl = 'drains/?type=cleaned';
  public dirtyDrainsUrl = 'drains/?type=uncleaned';
  public helpDetailsUrl = 'need_helps';
  public helpDrainsUrl = 'drains/?type=need_help';
  public unknownDrainsUrl = 'drains/?type=unknown';
  public drainDataUrl = 'drains/data';
  public ranksDataUrl = 'drains/ranking';

  constructor() { }

}


