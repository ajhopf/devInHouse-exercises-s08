import { Component } from '@angular/core';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notifications = [
    {
      title: 'Ifood',
      text: 'Seu pedido está sendo preparado!',
      createdAt: new Date()
    },{
    title: 'Mercado Livre',
    text: 'Seu pedido está a caminho!',
    createdAt: new Date()
    },{
    title: 'Amazon',
    text: 'Seu pedido chegou!',
    createdAt: new Date()
    }
  ]
}
