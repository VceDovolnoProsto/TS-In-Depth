import { timeout } from "../decorators";

abstract class ReferenceItem {
    //title: string;
    //year: number;
    //constructor(newTitle: string, newYear: number) {
    //    console.log('Creating a new ReferenceItem...');
    //    this.title = newTitle;
    //    this.year = newYear;
    //}
    private _publisher: string;

    #id: number;

    static department: string = 'Classical Literature';

    get publisher(): string {
        return this._publisher.toUpperCase();
    }

    set publisher(newPublisher) {
        this._publisher = newPublisher;
    }

    constructor(id: number, public title: string, protected year: number) {
        console.log('Creating a new ReferenceItem...');
        this.#id = id;
    }

    @timeout(2000)
    printItem(): void {
        console.log(this.title, ' was published in ', this.title);
        console.log('Department: ', ReferenceItem.department);
    }

    getId(): number {
        return this.#id;
    }

    abstract printCitation(): void;
}

export {ReferenceItem};
