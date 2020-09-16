import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./User";


@Entity("todos")
export default class Todo {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    title: string;

    @Column()
    completed: boolean;

    @ManyToOne(type => User, user => user.todos)
    user: User;

    constructor(title: string, completed: boolean, user: User) {
        this.title = title;
        this.completed = completed;
        this.user = user;
    }
}