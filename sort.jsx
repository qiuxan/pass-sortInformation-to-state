  state = {
    movies: [],
    pageSize: 4,
    currentPage: 1,
    genres: [],
    sortColumn: { path: 'title', order: 'asc' }
  };


handleSort = path => {
    const sortColumn = { ...this.state.sortColumn };
    if (sortColumn.path === path)
      sortColumn.order = (sortColumn.order === 'asc') ? 'desc' : 'asc';
    else {
      sortColumn.path = path;
      sortColumn.order = 'asc';
    }
    this.setState({ sortColumn });
    // console.log(path);
  }

const { pageSize, currentPage, selectedGenre, movies: allMovies, sortColumn } = this.state;
  
  
const sorted = _.orderBy(movies, [sortColumn.path], [sortColumn.order]);
