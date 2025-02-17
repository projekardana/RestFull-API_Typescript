export class ErrorResponse<T> extends Error {
    constructor(public status: number, public message: string) {
        super(message);
    }
}