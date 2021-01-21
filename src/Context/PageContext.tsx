import { createContext, useContext } from 'react';

export type Pagination = {
    pageSelected: number;
    pageOffset: number;
}
// what you can access from the context.
export type PaginationContextType = {
    pagination: Pagination;
    setPagination: (Pagination: Pagination) => void;
}

// ThemeContext is an object that we will use to provide a context. Here you declare type associated with this context as <ThemeContextType> and its 
// default values. These default values are returned to consumers when there is no theme provider.
export const PaginationContext = createContext<PaginationContextType>({ pagination: {pageOffset:10, pageSelected:1}, setPagination: pagination => console.log("hola")});

// useTheme is a custom hook to make consuming the theme and its setter function more convenient.
export const usePagination = () => useContext(PaginationContext);