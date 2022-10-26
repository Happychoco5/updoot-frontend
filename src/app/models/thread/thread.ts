export class Thread {
    constructor(
        public threadId: number,
        public accountId: number,
        public title: string,
        public content: string,
        public epoch: number,
        public updoot: number
    ){}
}