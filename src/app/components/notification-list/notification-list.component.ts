import { Component, OnInit } from '@angular/core';
import { NOTIFICATIONS } from 'src/app/constants/notifications';
import { Notification } from 'src/app/models/notification';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'ntap-notification-list',
  templateUrl: './notification-list.component.html',
  styleUrls: ['./notification-list.component.scss']
})
export class NotificationListComponent implements OnInit{
  notifications: Notification[] = NOTIFICATIONS;
  notificationsToRender: Notification[] = [];
  listFilter = ''
  possibleParams = ['todos', 'nao-lidos', 'lidos'];

  constructor( private router: Router, private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.params.subscribe((params)=>{
      this.listFilter = params['filter']

      if(!this.possibleParams.includes(this.listFilter)) {
        this.router.navigate(['/home/todos'])
      }

      this.notificationsToRender = []
      this.notifications.forEach(notification => {

        if (this.listFilter === 'lidos') {
          if (notification.read) {
            this.notificationsToRender.push(notification)
          }
        }
        if (this.listFilter === 'nao-lidos') {
          if(!notification.read) {
            this.notificationsToRender.push(notification)
          }
        }
        if (this.listFilter === 'todos') {
          this.notificationsToRender = [...this.notifications]
        }
      })
    })
  }

  readNotification(item: Notification): void {
    item.read = !item.read;
  }

  changeToFilteredRoute(event: string) {
    if (event === 'Não Lidos'){
      event = 'nao-lidos'
    }
    this.router.navigate(['/home/' + event.toLowerCase()])
  }
}
