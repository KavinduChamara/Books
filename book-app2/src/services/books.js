import React from 'react'

const apiPath = process.env.REACT_APP_API_URL;

const { createContext, useContext } = React;

const BooksContext = createContext(null);

export const BooksProvider = (props) => {
    const value = {
        listBooks: props.listBooks || listBooks,
        getByTitle: props.getByTitle || getByTitle,
        getByAuthor: props.getByAuthor || getByAuthor,
        getByYear: props.getByYear || getByYear,
        listYears: props.listYears || listYears,
        listAuthors: props.listAuthors || listAuthors
    }

    return (
        <BooksContext.Provider value={value}>
            {props.children}
        </BooksContext.Provider>
    )
}

export const useBooksService = () => {
    return useContext(BooksContext)
}

const listBooks = () => {
    return new Promise((resolve, reject) => {
        fetch(`${apiPath}list`)
            .then(response => response.json())
            .then(data => resolve(data)).catch(reject);
    });
}

const getByTitle = (title) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiPath}search?title=${title}`)
            .then(response => response.json())
            .then(data => resolve(data)).catch(reject);
    });
}

const getByAuthor = (author) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiPath}search?author=${author}`)
            .then(response => response.json())
            .then(data => resolve(data)).catch(reject);
    });
}

const getByYear = (year) => {
    return new Promise((resolve, reject) => {
        fetch(`${apiPath}search?year=${year}`)
            .then(response => response.json())
            .then(data => resolve(data)).catch(reject);
    });
}

const listYears = () => {
    return new Promise((resolve, reject) => {
        fetch(`${apiPath}listYears`)
            .then(response => response.json())
            .then(data => resolve(data)).catch(reject);
    });
}

const listAuthors = () => {
    return new Promise((resolve, reject) => {
        fetch(`${apiPath}listAuthors`)
            .then(response => response.json())
            .then(data => resolve(data)).catch(reject);
    });
}