import type { ICommand } from '@contracts/ICommand';

export class CommandLoginUser implements ICommand {
    login?: string
    password?: string
}