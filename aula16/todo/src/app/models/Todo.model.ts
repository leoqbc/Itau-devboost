import { TodoInterface } from "./TodoInterface";

export class Todo implements TodoInterface {
    // construtor e injetor dos atributos
    constructor(
        public userId: number,
        public id: number,
        public title: string,
        public completed: boolean = false
    ) { }
}