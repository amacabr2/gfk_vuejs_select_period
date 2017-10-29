/**
 * Created by amacabr2 on 29/10/17.
 */

export default class Range {

    constructor(start, end) {
        this.start = start;
        this.end = end;
    }

    getStart() {
        return this.start
    }

    getEnd() {
        return this.end
    }

    isStart(date) {
        return date.toDateString() === this.start.toDateString()
    }

    isEnd(date) {
        return date.toDateString() === this.end.toDateString()
    }
}