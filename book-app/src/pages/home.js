import { Container } from '@mui/system';
import React, { useCallback, useEffect } from 'react';
import { useBooksService } from '../services/books';
import DataGrid from '../components/DataGridComponent';
import { Box, Button, MenuItem, Select, TextField } from '@mui/material';

export default function Home() {
    const [books, setBooks] = React.useState([]);
    const [searchText, setSearchText] = React.useState('');
    const [searchType, setSearchType] = React.useState('title');
    const [years, setYears] = React.useState([]);
    const [selectedYear, setSelectedYear] = React.useState('');
    const [authors, setAuthors] = React.useState([]);
    const [selectedAuthor, setSelectedAuthor] = React.useState('');

    const booksService = useBooksService();

    const searchBooks = useCallback(async () => {
        if (searchText) {
            let books = [];
            switch (searchType) {
                case 'title':
                    books = await booksService.getByTitle(searchText);
                    break;
                case 'author':
                    books = await booksService.getByAuthor(searchText);
                    break;
                case 'year':
                    books = await booksService.getByYear(searchText);
                    break;
                default:
                    break;
            }
            setSelectedAuthor('');
            setSelectedYear('');
            setBooks(books);
        }
    }, [booksService, searchType, searchText]);

    const loadData = useCallback(async () => {
        let books = await booksService.listBooks();
        let years = await booksService.listYears();
        let authors = await booksService.listAuthors();
        setBooks(books);
        setYears(years);
        setAuthors(authors);
    }, [booksService]);

    useEffect(() => {
        loadData();
    }, [loadData]);

    const handleTypeChange = (event) => {
        setSearchType(event.target.value);
    };

    const handleTextChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleYearClick = useCallback(async (event) => {
        const books = await booksService.getByYear(event);
        setBooks(books);
        setSelectedYear(event);
        setSelectedAuthor('');
        setSearchText('');
    }, [booksService]);

    const handleAuthorClick = useCallback(async (event) => {
        const books = await booksService.getByAuthor(event);
        setBooks(books);
        setSelectedAuthor(event);
        setSelectedYear('');
        setSearchText('');
    }, [booksService]);

    const badgeStyle = { fontSize: "0.7rem", paddingTop: 0, paddingBottom: 0, marginRight: 1, cursor: 'pointer' };

    return (
        <Container className="mt-3 mb-3">
            <Container>
                <Select
                    className="m-2"
                    value={searchType}
                    label="Search By"
                    onChange={handleTypeChange}
                >
                    <MenuItem value={'title'}>Title</MenuItem>
                    <MenuItem value={'author'}>Author</MenuItem>
                    <MenuItem value={'year'}>Year</MenuItem>
                </Select>
                <TextField className="m-2" label="Enter text here" variant="outlined"
                    disabled={!searchType} value={searchText} onChange={handleTextChange} />
                <Button className="m-2" variant="contained" onClick={searchBooks} disabled={!searchText}>Search</Button>
            </Container>
            <DataGrid books={books}></DataGrid>
            <Container sx={{ textAlign: 'center' }}>
                {years.map(y => <Button sx={badgeStyle} variant={y.year === selectedYear ? 'contained' : 'outlined'} onClick={() => { handleYearClick(y.year) }}>{y.year}</Button>)}
                <Box height={'0.5rem'} />
                {authors.map(a => <Button sx={badgeStyle} variant={a.author === selectedAuthor ? 'contained' : 'outlined'} onClick={() => { handleAuthorClick(a.author) }}>{a.author}</Button>)}
            </Container>
        </Container >
    );
}