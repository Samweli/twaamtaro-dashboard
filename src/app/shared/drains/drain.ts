export interface Clean { cleared: boolean; }
export interface Help { need_help: boolean; }
export interface Addresss { address: string; }

export class Drain{
    constructor(
        public id: string,
        public address: string,
        public name: string,
        public cleared: boolean,
        public need_help: boolean,
    ) {};
}