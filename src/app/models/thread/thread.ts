export class Thread {
    constructor(
        public thread_id: number,
        public account_id: number,
        public title: string,
        public content: string,
        public epoch: number,
        public updoot: number
    ){}
}