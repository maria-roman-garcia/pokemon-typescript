import { createContext, useContext } from 'react';

export type Pagination = {
    pageSelected: number; //The total number of resources available from this API. (Int)
    pageOffset: number;
}
// what you can access from the context.
export type PaginationContextType = {
    pagination: Pagination;
    setPagination: (Pagination: Pagination) => void;
}

// PaginationContext is an object that we will use to provide a context. Here you declare type associated with this context as <PaginationContextType> and its 
// default values. These default values are returned to consumers when there is no pagination provider.
export const PaginationContext = createContext<PaginationContextType>({ pagination: {pageOffset:1118, pageSelected:1}, setPagination: pagination => console.log("hola")});

// usePagination is a custom hook to make consuming the pagination and its setter function more convenient.
export const usePagination = () => useContext(PaginationContext);