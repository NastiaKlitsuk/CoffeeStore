import { Injectable } from '@angular/core';
import { Observable, interval, of } from 'rxjs';
import { map, share, startWith } from 'rxjs/operators';
import { getLocaleTime } from 'src/app/utils/date-time.utils';

@Injectable({
  providedIn: 'root'
})
export class ClockService {
  private currentDateTime: Observable<string>;

  constructor() {
    this.currentDateTime = interval(30000).pipe(
      startWith(getLocaleTime()),
      map(() => getLocaleTime()),
      share()
    );
  }

  getCurrentDateTime(): Observable<string> {
    return this.currentDateTime;
  }
}
