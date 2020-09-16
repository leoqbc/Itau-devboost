import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Todo from "./Todo";

// Entidade representa uma tables no DB
@Entity("users")
export default class User {
    // chave primaria auto incremental
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    email: string;

    @OneToMany(type => Todo, todo => todo.user)
    todos: Todo[];

    constructor(nome: string, email: string) {
        this.nome = nome;
        this.email = email;
    }
}