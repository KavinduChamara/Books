<?php
require_once PROJECT_ROOT_PATH . "/Model/DatabaseModel.php";
class BookModel extends Database
{
    public function getBooks($limit)
    {
        if ($limit > 0)
            return $this->select("SELECT * FROM books ORDER BY year DESC LIMIT ?", ["i", $limit]);
        else
            return $this->select("SELECT * FROM books ORDER BY year DESC");
    }

    public function getBooksByTitle($title)
    {
        return $this->select("SELECT * FROM books WHERE title = ?", ["s", $title]);
    }

    public function getBooksByAuthor($author)
    {
        return $this->select("SELECT * FROM books WHERE author = ?", ["s", $author]);
    }

    public function getBooksByYear($year)
    {
        return $this->select("SELECT * FROM books WHERE year = ?", ["d", $year]);
    }

    public function getAuthors()
    {
        return $this->select("SELECT DISTINCT author FROM books ORDER BY author ASC");
    }

    public function getYears()
    {
        return $this->select("SELECT DISTINCT year FROM books ORDER BY year ASC");
    }
}