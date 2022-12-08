import { Component } from '@angular/core';

@Component({
  selector: 'ntap-list-filter',
  templateUrl: './list-filter.component.html',
  styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent {
  filterText = ['Todos', 'Não Lidos', 'Lidos']
}
