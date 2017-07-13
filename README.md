# myreads - An Udacity's React nanodegree project

This is a project built for the Udacity's React nanodegree with the help of [create-react-app](https://github.com/facebookincubator/create-react-app) and the [BooksAPI](https://github.com/udacity/reactnd-project-myreads-starter)

# Documentation

## Functions

Here we'll describe the behavior of the functions used in the project

###  getBooks()

`getBooks()` will fetch the BooksAPI and store the array of books into the `App` component's state


```

getBooks = () => {
  BooksAPI.getAll().then(books => {
    this.setState({books})
  })
}
```
