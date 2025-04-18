const OldMovies = [
  {
    id: 1,
    title: "Inception",
    year: 2010,
    genre: "Sci-Fi",
    popularity: "9+",
    rating: 8.8,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
  },
  {
    id: 2,
    title: "The Dark Knight",
    year: 2008,
    genre: "Action",
    popularity: "10",
    rating: 9.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
  },
  {
    id: 3,
    title: "Interstellar",
    year: 2014,
    genre: "Sci-Fi",
    popularity: "9+",
    rating: 8.6,
    poster:
      "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    id: 4,
    title: "The Matrix",
    year: 1999,
    genre: "Action",
    popularity: "9+",
    rating: 8.7,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    id: 5,
    title: "Parasite",
    year: 2019,
    genre: "Thriller",
    popularity: "9",
    rating: 8.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
  },
  {
    id: 6,
    title: "Avengers: Endgame",
    year: 2019,
    genre: "Superhero",
    popularity: "10",
    rating: 8.4,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
  },
  {
    id: 7,
    title: "Avengers: Infinity War",
    year: 2018,
    genre: "Superhero",
    popularity: "10",
    rating: 8.4,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",
  },
  {
    id: 8,
    title: "Avengers: Age of Ultron",
    year: 2015,
    genre: "Superhero",
    popularity: "8+",
    rating: 7.3,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_.jpg",
  },
  {
    id: 9,
    title: "The Avengers",
    year: 2012,
    genre: "Superhero",
    popularity: "9+",
    rating: 8.0,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
  },
  {
    id: 10,
    title: "3 Idiots",
    year: 2009,
    genre: "Comedy-Drama",
    popularity: "10",
    rating: 8.4,
    poster:
      "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
  },
  {
    id: 11,
    title: "Dangal",
    year: 2016,
    genre: "Sports-Drama",
    popularity: "9+",
    rating: 8.3,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
  },
  {
    id: 12,
    title: "PK",
    year: 2014,
    genre: "Comedy-Drama",
    popularity: "9",
    rating: 8.1,
    poster:
      "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
  },
  {
    id: 13,
    title: "Forrest Gump",
    year: 1994,
    genre: "Drama",
    popularity: "9+",
    rating: 8.8,
    poster:
      "https://image.tmdb.org/t/p/original/8aBHdTp6MZ7RRE45maIYrEPo6IJ.jpg",
  },
  {
    id: 14,
    title: "Gladiator",
    year: 2000,
    genre: "Action-Drama",
    popularity: "9",
    rating: 8.5,
    poster:
      "https://th.bing.com/th/id/OIP.3r3Jb3Zle2eQvBcry0LzvgHaLH?rs=1&pid=ImgDetMain",
  },
  {
    id: 15,
    title: "Fight Club",
    year: 1999,
    genre: "Drama",
    popularity: "9+",
    rating: 8.8,
    poster:
      "https://th.bing.com/th/id/OIP.d_BZ6gOSBmClndzU575rOwHaLH?rs=1&pid=ImgDetMain",
  },
  {
    id: 16,
    title: "Kalki 2898 AD",
    year: 2024,
    genre: "Sci-Fi-Action",
    popularity: "Very High",
    rating: null,
    poster:
      "https://th.bing.com/th/id/OIP.JagLll9R_G9QNqavObZ8SQHaLl?rs=1&pid=ImgDetMain",
  },
  {
    id: 17,
    title: "Pushpa 2: The Rule",
    year: 2024,
    genre: "Action-Drama",
    popularity: "Very High",
    rating: null,
    poster:
      "https://is1-ssl.mzstatic.com/image/thumb/Music211/v4/3b/c6/18/3bc6183f-ee72-3656-f057-2fdb6c08c53d/8903431993632_cover.jpg/1200x1200bf-60.jpg",
  },
  {
    id: 18,
    title: "Stree 2",
    year: 2024,
    genre: "Horror-Comedy",
    popularity: "High",
    rating: null,
    poster: "https://i.ytimg.com/vi/JGIfkoRq8hE/maxresdefault.jpg",
  },
  {
    id: 19,
    title: "Bade Miyan Chote Miyan",
    year: 2024,
    genre: "Action-Comedy",
    popularity: "High",
    rating: 5.5,
    poster:
      "https://m.media-amazon.com/images/M/MV5BN2VjYzIxN2ItN2E0MS00ODE4LThjMTgtMzE2OTM0ZmM4YjBmXkEyXkFqcGdeQXVyMTc0OTI3NjUy._V1_FMjpg_UX1000_.jpg",
  },
  {
    id: 20,
    title: "Maidaan",
    year: 2024,
    genre: "Biographical Sports Drama",
    popularity: "Medium",
    rating: 8.3,
    poster: "https://upload.wikimedia.org/wikipedia/en/3/3d/Maidaan_Poster.jpg",
  },

  {
    id: 21,
    title: "Furiosa: A Mad Max Saga",
    year: 2024,
    genre: "Action-Sci-Fi",
    popularity: "High",
    rating: null,
    poster:
      "https://static1.moviewebimages.com/wordpress/wp-content/uploads/2023/12/furiosa-a-mad-max-saga-poster-featuring-anya-taylor-joy-as-the-title-character.jpg",
  },
  {
    id: 22,
    title: "Kingdom of the Planet of the Apes",
    year: 2024,
    genre: "Action-Sci-Fi-Adventure",
    popularity: "High",
    rating: null,
    poster:
      "https://th.bing.com/th/id/R.668df50ab58394f9b4170e47fc01c060?rik=9Lv8KvT0SBzjcw&riu=http%3a%2f%2fwww.impawards.com%2f2024%2fposters%2fkingdom_of_the_planet_of_the_apes_ver2.jpg&ehk=PPj19tRN9r3RGloEjK60J8QFx7Agj3x4x%2bVjDKeSvmk%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 23,
    title: "The Fall Guy",
    year: 2024,
    genre: "Action-Comedy",
    popularity: "Medium",
    rating: 7.3,
    poster: "https://spaces.filmstories.co.uk/uploads/2024/05/the-fall-guy.jpg",
  },
  {
    id: 24,
    title: "IF",
    year: 2024,
    genre: "Comedy-Family-Fantasy",
    popularity: "Medium",
    rating: null,
    poster:
      "https://th.bing.com/th/id/R.c6ab8cc09ffcd485084cccf2600c0554?rik=hi%2b6LImWYfl4Iw&riu=http%3a%2f%2fwww.impawards.com%2f2024%2fposters%2fif_ver5.jpg&ehk=KxhNPWgJ3A%2b6SOS2KeuQzOkSzsCHrdmY4pd7uBRxYwM%3d&risl=&pid=ImgRaw&r=0",
  },
  {
    id: 25,
    title: "Garfield",
    year: 2024,
    genre: "Animation-Adventure-Comedy",
    popularity: "Medium",
    rating: null,
    poster:
      "https://th.bing.com/th/id/OIP.QvrsLu_yfhoRNPG9fs3oUgHaLY?rs=1&pid=ImgDetMain",
  },
];

export default OldMovies;
