import { Component, EventEmitter, Output } from '@angular/core';

@Component({
	selector: 'ntap-list-filter',
	templateUrl: './list-filter.component.html',
	styleUrls: ['./list-filter.component.scss']
})
export class ListFilterComponent {
	filterBtnText = ['Todos', 'Não Lidos', 'Lidos']

	@Output() filter = new EventEmitter<string>()

	onFilterClick(filterName: string){
		this.filter.emit(filterName)
	}
}
