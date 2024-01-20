import { CommandHandler } from './CommandHandler';
import type { IContainer } from './Types/Types';

export class RevokingCommand extends CommandHandler {
  Execute(data: IContainer): IContainer | null {}
}
