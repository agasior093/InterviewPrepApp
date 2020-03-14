import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import { NgbTypeahead } from '@ng-bootstrap/ng-bootstrap';
import { Observable, Subject, merge } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map } from 'rxjs/operators';



@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.css']
})
export class AutocompleteComponent {
  @Input() items: string[];
  currentItem: string;
  outputItems: string[] = [];
  @Output() outputItemsChanged = new EventEmitter<string[]>();

  @ViewChild('instance', { static: true }) instance: NgbTypeahead;
  focus$ = new Subject<string>();
  click$ = new Subject<string>();

  search = (text$: Observable<string>) => {
    const debouncedText$ = text$.pipe(debounceTime(200), distinctUntilChanged());
    const clicksWithClosedPopup$ = this.click$.pipe(filter(() => !this.instance.isPopupOpen()));
    const inputFocus$ = this.focus$;

    return merge(debouncedText$, inputFocus$, clicksWithClosedPopup$).pipe(
      map(term => (term === '' ? this.items
        : this.items.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1)).slice(0, 10))
    );
  }

  addItem() {
    this.outputItems.push(this.currentItem.trim());
    this.currentItem = '';
    this.outputItemsChanged.emit(this.outputItems);
  }

  onKeyUp($event) {
    if (this.currentItem !== undefined && this.currentItem.trim() !== '' && ($event.key === 'Enter' || $event.key === ' ')) {
      this.addItem();
    }
  }

  onBlur() {
    if (this.currentItem !== undefined && this.currentItem.trim() !== '') {
      this.addItem();
    }
  }
}
