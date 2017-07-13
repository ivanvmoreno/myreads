# myreads - An Udacity's React nanodegree project

This is a project built for the Udacity's React nanodegree with the help of create-react-app

# Documentation

## Functions

Here we'll describe the behavior of the functions used in the project

###  getBooks()

```

getBooks = () => {
  BooksAPI.getAll().then(books => {
    this.setState({books})
  })
}
```
