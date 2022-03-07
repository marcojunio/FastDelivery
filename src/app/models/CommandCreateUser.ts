import type { ICommand } from '@contracts/ICommand';

export class CommandCreateUser implements ICommand {
    login?: string;
    password?: string;
    nome?: string;
}