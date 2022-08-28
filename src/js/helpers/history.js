export class HistoryData {
    constructor(path) {
        this.path = path;
        this.id = (Math.random() + 1).toString(36).substring(7)
    }
}