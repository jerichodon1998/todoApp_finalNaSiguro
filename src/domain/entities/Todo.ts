export default class Todo {
    id: string
    title: string
    done: boolean

    constructor(id: string, title: string, done: boolean) {
        ;(this.id = id), (this.title = title), (this.done = done)
    }
}
