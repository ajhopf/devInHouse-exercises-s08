import { Component } from '@angular/core';
import { NOTIFICATIONS } from 'src/app/constants/notifications';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notifications = NOTIFICATIONS;

  readNotification(item: any): void {
    console.log(item);
    item.read = true;
    console.log(item);
  }
}
