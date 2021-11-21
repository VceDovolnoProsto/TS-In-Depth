
import { createCustomer, getBooksByCategoryPromise } from "./functions";
import { Author, Book, Person } from "./interfaces";

export type BookProperties = keyof Book;
export type PersonBook = Person & Book;
export type BookOrUndefined = Book | undefined;

export type BookRequiredFields = Required<Book>;
export type UpdateBook = Partial<Book>;
export type AuthorWoEmail = Omit<Author,'email'>;
//export type CrateCustomerFunctionType = (name:string, age?: number, city?: string) => void;
export type CrateCustomerFunctionType = typeof createCustomer;

export type fn = (p1: string, p2: number, p3: boolean) => symbol;
export type Param1<T> = T extends (p1: infer R, p2: number, p3: boolean) => symbol ? R : never;
export type Param2<T> = T extends (p1: string, p2: infer R, p3: boolean) => symbol ? R : never;
export type Param3<T> = T extends (p1: string, p2: number, p3: infer R) => symbol ? R : never;

type P1 = Param1<fn>;
type P2 = Param2<fn>;
type P3 = Param3<fn>;

export type Unpromisify<T> = T extends Promise<infer R> ? R : never;
export type FT = Unpromisify<ReturnType<typeof getBooksByCategoryPromise>>;
//type Book {
//    id: number;
//    title: string;
//    category: Category;
//    author: string;
//    available: boolean;
//    pages?: number;
//    markDamaged?: (reason: string) => void;
//}

//type DamageLogger = (reason: string) => void;
