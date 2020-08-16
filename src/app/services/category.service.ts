import { Injectable } from '@angular/core';
import { CategoryInterface } from "../interfaces/category.interface";
import { ApiService } from "./api.service";
import { Observable, of } from "rxjs";
import { tap } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  private categories: CategoryInterface[] = null

  constructor(
    private api: ApiService
  ) {
  }

  getCategories(): Observable<CategoryInterface[]> {
    if (null !== this.categories) {
      return of(this.categories)
    }

    return this.api.get('categories')
      .pipe(tap((categories: CategoryInterface[]) => this.categories = categories))
  }
}
