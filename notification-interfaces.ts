// interface para mensagem de notificação
export interface NotificationMessage {
  getMessageContent(): string;
}

// interface para remetente de notificações
export interface NotificationSender {
  send(message: NotificationMessage): void;
}
