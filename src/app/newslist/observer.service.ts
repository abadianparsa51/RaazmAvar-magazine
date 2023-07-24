import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, combineLatest } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ObserverService {
  currentId = new BehaviorSubject<string>('1');
  currentPage = new BehaviorSubject<number>(1);
  onFilterChange: Observable<Filter>;
  constructor() {
    this.onFilterChange = combineLatest(this.currentId, this.currentPage, (id, page) => {
      return new Filter(id, page);
    })
  }
  setCurrentId(id: string) {
    this.currentId.next(id);
  }
  setCurrentPage(page: number) {
    this.currentPage.next(page);
  }
}
class Filter {
  constructor(public id: string, public page: number) {
  }
}
