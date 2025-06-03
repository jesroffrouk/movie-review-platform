import { Document, Types } from "mongoose";

declare global {
  // i might delete this one if i found out its working without it
  namespace Models{
    interface lUser extends Document{
      username: string;
      email: string;
      isVerified: boolean;
      isAdmin: boolean;
      password: string;
      forgotPasswordToken: string;
      forgotPasswordTokenExpiry: Date;
      verifyToken: string;
      verifyTokenExpiry: Date,
      followers: Types.ObjectId[] | Models.lUser[];
      following: Types.ObjectId[] | Models.lUser[];
    };
  }
    type reviews ={
        _id: string;
        userid: string;
        title: string;
        movieid: string;
        reviews: string;
        rating: number;
    }
    type User =
      {
        _id: string,
      username: string,
      email: string,
      followers: string[],
      following: string[],
      }
    type UserWreviews = {
      reviews: reviews[];
      user: User;
    };

    type followList = {
      _id: string,
      username: string,
      email: string,
    }

    type Userlist = {
      _id: string,
      username: string,
      email: string,
      followersCount: number,
      followingCount: number,
    };


    type Movie = {
      Title: string;
      Year: number;
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
      userid: {
        _id: string,
        username: string,
        email: string
      },
      title: string,
      movieid: string,
      rating: number,
      reviews: string,
    };
    type Res = {
      message: string,
      status: number
    }
  }
  export {};
  