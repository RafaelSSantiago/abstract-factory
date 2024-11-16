import { EmailMessage, EmailSender, SMSMessage, SMSSender } from "./notification";
import { NotificationMessage, NotificationSender } from "./notification-interfaces";

// abtração para comunicação entre o modulo de alto nivel e o de baixo nivel
export interface NotificationFactory {
  createMessage(): NotificationMessage;
  createSender(): NotificationSender;
}

// Fábrica para Email
export class EmailNotificationFactory implements NotificationFactory {
  createMessage(): NotificationMessage {
    return new EmailMessage();
  }

  createSender(): NotificationSender {
    return new EmailSender();
  }
}

// Fábrica para SMS
export class SMSNotificationFactory implements NotificationFactory {
  createMessage(): NotificationMessage {
    return new SMSMessage();
  }

  createSender(): NotificationSender {
    return new SMSSender();
  }
}
