export class Reply {
    constructor(
        public replyId: number,
        public threadId: number,
        public accountId: number,
        public content: string,
        public epoch: number,
        public updoot: number
    ){}
}