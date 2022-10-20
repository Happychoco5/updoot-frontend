export class Reply {
    constructor(
        public reply_id: number,
        public thread_id: number,
        public account_id: number,
        public content: string,
        public epoch: number,
        public updoot: number
    ){}
}