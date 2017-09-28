export interface IsAdmin { admin: boolean; }

export class User{
    constructor(
        public id: string,
        public address: string,
        public name: string,
        public admin: boolean,
        
    ) {};
}