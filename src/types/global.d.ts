declare global {
    type Movie = {
      Title: string;
      Year: string;
      imdbID: string;
      Type: string;
      Poster: string;
    }[];
    type Userdata = {
      id: string,
      username: string,
    }
    type SingleMovie = {
      imdbID: string,
      Title: string,
      Year: string,
      Rated: string,
      Released: string,
      Runtime: string,
      Genre: string,
      Director: string,
      Writer: string,
      Actors: string,
      Plot: string,
      Language: string,
      Country: string,
      Awards: string,
      Poster: string,
    };
    type Review = {
      _id: string,
      userid: string,
      Movieid: string,
      rating: number,
      reviews: string,
    }[];
  }
  export {};
  