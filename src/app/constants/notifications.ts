import { Notification } from "../models/notification";

export const NOTIFICATIONS: Notification[] = [
  {
    title: 'Ifood',
    text: 'Seu pedido está sendo preparado!',
    createdAt: new Date(2022, 10, 11, 22, 13),
    read: false
  }, {
    title: 'Mercado Livre',
    text: 'Seu pedido está a caminho!',
    createdAt: new Date(2022, 5, 11, 8, 11),
    read: false
  }, {
    title: 'Amazon',
    text: 'Seu pedido chegou!',
    createdAt: new Date(),
    read: false
  }
];