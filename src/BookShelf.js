import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Book from './Book'

class BookShelf extends Component {
  render() {

    const { books, moveBook } = this.props

    return (

      <div className="list-books">

        {/* Header */}

        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>

        {/* Bookshelf */}

        <div className="list-books-content">

          {/* => Currently reading shelf */}

          <div className="bookshelf">
            <h2 className="bookshelf-title">Currently Reading</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book, index) => {
                  if (book.shelf === 'currentlyReading'){
                    return (
                      <li key={index}>
                        <Book
                          title={book.title}
                          authors={book.authors}
                          thumbnail={book.imageLinks.thumbnail}
                          shelf={book.shelf}
                          id={book.id}
                          moveBook={moveBook}
                        />
                      </li>
                    )
                  }
                })}
              </ol>
            </div>
          </div>

          {/* => Want to read shelf */}

          <div className="bookshelf">
            <h2 className="bookshelf-title">Want to Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book, index) => {
                  if (book.shelf === 'wantToRead'){
                    return (
                      <li key={index}>
                        <Book
                          title={book.title}
                          authors={book.authors}
                          thumbnail={book.imageLinks.thumbnail}
                          shelf={book.shelf}
                          id={book.id}
                          moveBook={moveBook}
                        />
                      </li>
                    )
                  }
                })}
              </ol>
            </div>
          </div>

          {/* => Read shelf */}

          <div className="bookshelf">
            <h2 className="bookshelf-title">Read</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {books.map((book, index) => {
                  if (book.shelf === 'read'){
                    return (
                      <li key={index}>
                        <Book
                          title={book.title}
                          authors={book.authors}
                          thumbnail={book.imageLinks.thumbnail}
                          shelf={book.shelf}
                          id={book.id}
                          moveBook={moveBook}
                        />
                      </li>
                    )
                  }
                })}
              </ol>
            </div>
          </div>



          {/* Add book button */}

          <Link to='/search' className='open-search'>Add book shortcut</Link>

        </div>

      </div>
    )
  }
}

export default BookShelf
