import { EmailNotificationFactory, NotificationFactory, SMSNotificationFactory } from "./notification-factory";
import { NotificationMessage, NotificationSender } from "./notification-interfaces";

class NotificationApplication {
  private message: NotificationMessage;
  private sender: NotificationSender;

  constructor(private factory: NotificationFactory) {
    this.message = factory.createMessage();
    this.sender = factory.createSender();
  }

  sendNotification(): void {
    console.log("Preparando para enviar notificação...");
    this.sender.send(this.message);
  }
}

const emailFactory = new EmailNotificationFactory();
const emailapp = new NotificationApplication(emailFactory);
emailapp.sendNotification();

const smsFactory = new SMSNotificationFactory();
const smsApp = new NotificationApplication(smsFactory);
smsApp.sendNotification();
