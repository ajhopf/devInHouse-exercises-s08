import { Component } from '@angular/core';
import { NOTIFICATIONS } from 'src/app/constants/notifications';
import { Notification } from 'src/app/models/notification';

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent {
  notifications: Notification[] = NOTIFICATIONS;

  readNotification(item: Notification): void {
    item.read = !item.read;
  }
}
