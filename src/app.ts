
import { Linter } from "eslint";
import { Book, Librarian, Logger, Magazine } from "./interfaces";
import RefBook from './classes/encyclopedia';
import { createCustomer, getAllBooks, getProperty, printRefBook, purge } from './functions';
import { ReferenceItem, UL, Shelf } from "./classes";
import { Category } from "./enum";
import { BookRequiredFields, CrateCustomerFunctionType, UpdateBook } from "./types";
import { UniversityLibrarian } from "./classes/UniversityLibrarian";

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ==============================================================
// Task 02.01
//logFirstAvailable(getAllBooks());
//logBookTitles(getBookTitlesByCategory(Category.JavaScript));

//const result = getBookAuthorByIndex(1);
//console.log(result);

//console.log(calcTotalPages());

// Task 03.01
//const myID: string = createCustomerID('Ann', 10);
//console.log(myID);
//let idGenerator: (name: string, id: number) => string;
//idGenerator = (name: string, id1: number) => `${id1}-${name}`;
//idGenerator = createCustomerID;
//console.log(idGenerator('Boris', 2));

// Task 03.02
//createCustomer('Anna');
//createCustomer('Boris', 30);
//createCustomer('Boris', 30, 'kyiv');
//console.log(getBookTitlesByCategory());
//logFirstAvailable();
//const result = getBookById(1);
//console.log(result);
//const result = checkoutBooks('Anna', 1, 2, 4);
//console.log(result);

// Task 03.03
//const checkedOutBooks = getTitles(false);
//console.log(checkedOutBooks);

//Task 03.04
//console.log(bookTitleTransform('TypeScript'));
//console.log(bookTitleTransform(100));

//Task 04.01
//const myBook : Book = {
//    id: 5,
//    title: 'Colors, Backgrounds, and Gradients',
//    author: 'Eric A. Meyer',
//    available: true,
//    category: Category.CSS,
//    pages: 200,
//    markDamaged: (reason: string) => console.log('Damaged: ${reason}')
//}
//printBook(myBook);
//myBook.markDamaged('missing back cover');

// Task 04.02
//const logDamage: DamageLogger = (reason: string) => console.log('Damaged: ${reason}');
//const logDamage: Logger = (reason: string) => console.log('Damaged: ${reason}');
//logDamage('missing back cover');

// Task 04.03
//const favoriteAuthor: Author = {
//    name: 'Anna',
//    email: 'anna@example.com',
//    numBooksPublished: 2
//};
//const favoriteLibrarian: Librarian = {
//    name: 'Boris',
//    email: 'boris@example.com',
//    department: 'Research Dep',
//    assistCustomer: null
//}

// Task 04.04
//const offer: any = {
//    book: {
//        title: 'Essential TypeScript',
//    },
//};
//console.log(offer.magazine);
//console.log(offer.magazine?.getTitle());
//console.log(offer.book.getTitle?.());
//console.log(offer.book.authors?.[0]);

// Task 04.05
//console.log(getProperty(getAllBooks()[0],'title'));
//console.log(getProperty(getAllBooks()[0],'markDamaged'));
//console.log(getProperty(getAllBooks()[0],'isbn'));

// Task 05.01
//const ref: ReferenceItem = new ReferenceItem(1,'TypeScript', 2021);
//console.log(ref);
//ref.printItem();
//ref.publisher = 'abc';
//console.log(ref.publisher);
//console.log(ref.getId());

// Task 05.02, 06.03
//const refBook = new Encyclopedia(1,'TypeScript', 2021, 3);
//const refBook = new RefBook(1,'TypeScript', 2021, 3);
//console.log(refBook);
//refBook.printItem();
//const p1 = Object.getPrototypeOf(refBook);
//console.log(p1);
//const p2 = Object.getPrototypeOf(p1);
//console.log(p2);
//printRefBook(refBook);
//const uLibrarian = new Ul.UniversityLibrarian();
//printRefBook(uLibrarian);

//Task 05.03
//const refBook = new Encyclopedia(1,'TypeScript', 2021, 3);
//refBook.printCitation();
//console.log(refBook);

//Task 05.04
//const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
//favoriteLibrarian.name = 'Anna';
//favoriteLibrarian.assistCustomer('Boris');

//Task 05.05
//const personBook: PersonBook = {
//    name: 'Anna',
//    email: 'anna@example.com',
//    id: 1,
//    author: 'Anna',
//    available: false,
//    category: Category.CSS,
//    title: 'Inknow'
//};
//console.log(personBook);

//Task 06.05
//const flag = true;

//if (flag) {
//    const modules = await import('./classes');
//    const reader = new modules.Reader();
//    reader.name = 'Anna';
//    reader.take(getAllBooks()[0]);
//    console.log(reader);
//}

//if (flag) {
//    import('./classes')
//    .then(modules => {
//        const reader = new modules.Reader();
//      reader.name = 'Anna';
//      reader.take(getAllBooks()[0]);
//      console.log(reader);
//    })
//}

//import { Library } from './classes/library';
//import { Library } from './classes'
//import type { Library } from './classes/library'
//const lib: Library = new Library();
//const lib: Library = {
//    id: 1,
//    name: 'Anna',
//    address: 'spb'
//}

//Task 07.01
//const inventory: Book[] = [
//    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
//    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
//    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
//    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
//]

//let result = purge(inventory);
//console.log(result);
//const result2 = purge([1, 2, 3, 4, 5]);
//console.log(result2)

//Task 07.02
//const bookShelf = new Shelf<Book>();
//inventory.forEach(book => bookShelf.add(book));
//console.log(bookShelf.getFirst());

//const magazines: Magazine[] = [
//    { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//    { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//    { title: 'Five Points', publisher: 'GSU' }
//];
//const magazinesShelf = new Shelf<Magazine>();
//magazines.forEach(mag => magazinesShelf.add(mag));
//console.log(magazinesShelf.getFirst().title);


// Task 07.03
//magazinesShelf.printTitles();
//console.log(magazinesShelf.find('Five Points'));
// Task 07.03
//getProperty<Book, 'id'>(getAllBooks()[0], 'id');

//Task 07.04
//const bookRequiredFields: BookRequiredFields = {
 //   author: 'Anna',
//    available: false,
//    category: Category.CSS,
//    id: 1,
//    markDamaged: null,
//    pages: 1000,
//    title: 'Learn CSS'
//}
//const updatebook:UpdateBook = {}

//let params: Parameters<CrateCustomerFunctionType>;
//let params: Parameters<typeof createCustomer> = ['Anna', 30];
//createCustomer(...params);

// Task 08.01
// const librarian = new UniversityLibrarian();
// console.log(librarian);
// const obj = Object.getPrototypeOf(librarian);
// console.log(obj);
// obj.f = 100;

// Task 08.02
//const fLibrarian  = new UniversityLibrarian();
//fLibrarian.name = "Anna";
//console.log(fLibrarian );
//fLibrarian ["printLibrarian"]();

// Task 08.03
// const librarian = new UniversityLibrarian();
// librarian.assistFaculty = null;
// librarian.teachCommuinity = null;

// Task 08.04
// const enc = new RefBook("My Title", 2020, 3);
// enc.printItem();

// Task 08.05
// const librarian = new UniversityLibrarian();
// librarian.name = "Anna";
// librarian.assistCustomer("Boris");

// Task 08.06
// const librarian = new UniversityLibrarian();
// librarian.name = "Anna";
// librarian.assistCustomer("Boris");

// Task 08.07
// const enc = new RefBook("My Title", 2020, 3);
// enc.copies = 10;

// Task 09.01
// console.log(`Start`);
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log(`End`);

// Task 09.02
// console.log(`Start`);
// getBooksByCategoryPromise(Category.JavaScript)
//   .then((titles) => {
//     console.log(titles);
//     return Promise.resolve(titles.length);
//   })
//   .then((numOfBooks) => console.log(numOfBooks))
//   .catch((err) => console.log(err))
//   .finally(() => console.log(`Completed`));
// console.log(`End`);{}

// Task 09.03
//console.log(`Start`);
// logSearchResults(Category.JavaScript);
//logSearchResults(Category.Software).catch((err) => console.log(err));
//console.log(`End`);