import { NotificationMessage, NotificationSender } from "./notification-interfaces";

export class EmailMessage implements NotificationMessage {
  getMessageContent(): string {
    return "Conteúdo da mensagem enviada por email";
  }
}

export class EmailSender implements NotificationSender {
  send(message: NotificationMessage): void {
    console.log(`[Email] Enviando: ${message.getMessageContent()}`);
  }
}

export class SMSMessage implements NotificationMessage {
  getMessageContent(): string {
    return "Conteúdo da mensagem enviada por SMS.";
  }
}

export class SMSSender implements NotificationSender {
  send(message: NotificationMessage): void {
    console.log(`[SMS] Enviando: ${message.getMessageContent()}`);
  }
}
