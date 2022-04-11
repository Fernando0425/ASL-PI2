import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'appFilter' })
export class FilterPipe implements PipeTransform {
  /**
   * Pipe filters the list of elements based on the search text provided
   *
   * @param products list of elements to search in
   * @param searchText search string
   * @returns list of elements filtered by search text or []
   */
  transform(products: any[], searchText: string): any[] {
    if (!products) {
      return [];
    }
    if (!searchText) {
      return products;
    }
    searchText = searchText.toLocaleLowerCase();

    return products.filter(it => {
      return it.toLocaleLowerCase().includes(searchText);
    });
  }
}