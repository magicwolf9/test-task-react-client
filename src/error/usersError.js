export class UsersError extends Error {
    static LOADING_ERROR = 'LOADING_ERROR';
    constructor(code) {
        super(code);
        Object.setPrototypeOf(this, UsersError.prototype);
    }
}