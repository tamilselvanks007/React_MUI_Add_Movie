import { useState } from "react";
import "./App.css";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import ThumbDownIcon from "@mui/icons-material/ThumbDown";
import StarRateIcon from "@mui/icons-material/StarRate";

export default function App() {
  //array of object
  const INITIAL_MOVIES = [
    {
      name: "Baby driver (2017)",
      poster: "https://movieposters2.com/images/1483631-b.jpg",
      rating: "7.6",
      summary:
        "Baby, a music-loving orphan also happens to be the prodigiously talented go-to getaway driver for heist mastermind Doc. With the perfect soundtrack picked out for each and every job, Baby ensures Doc's violent, bank-robbing cronies - including Buddy, Bats and Darling - get in and out of Dodge before it's too late. He's not in it for the long haul though, hoping to nail one last job before riding off into the sunset with beautiful diner waitress Debora. Easier said than done.",
    },

    {
      name: "Inception (2010)",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
      rating: "8.7",
      summary:
        "Dom Cobb (Leonardo DiCaprio) is a thief with the rare ability to enter people's dreams and steal their secrets from their subconscious. His skill has made him a hot commodity in the world of corporate espionage but has also cost him everything he loves. Cobb gets a chance at redemption when he is offered a seemingly impossible task: Plant an idea in someone's mind. If he succeeds, it will be the perfect crime, but a dangerous enemy anticipates Cobb's every move.",
    },

    {
      name: "Django Unchained (2012)",
      poster:
        "https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSnm2FczCxSnt69XUZqqI5-sfy66SvjiV0du9mfUKRRCGqVAurt",
      rating: "8.4",
      summary:
        "Two years before the Civil War, Django (Jamie Foxx), a slave, finds himself accompanying an unorthodox German bounty hunter named Dr. King Schultz (Christoph Waltz) on a mission to capture the vicious Brittle brothers. Their mission successful, Schultz frees Django, and together they hunt the South's most-wanted criminals. Their travels take them to the infamous plantation of shady Calvin Candie (Leonardo DiCaprio), where Django's long-lost wife (Kerry Washington) is still a slave.",
    },

    {
      name: "The Dark Knight (2008)",
      poster:
        "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
      rating: "9",
      summary:
        "With the help of allies Lt. Jim Gordon (Gary Oldman) and DA Harvey Dent (Aaron Eckhart), Batman (Christian Bale) has been able to keep a tight lid on crime in Gotham City. But when a vile young criminal calling himself the Joker (Heath Ledger) suddenly throws the town into chaos, the caped Crusader begins to tread a fine line between heroism and vigilantism.",
    },

    {
      name: "Joker (2019)",
      poster:
        "https://i.pinimg.com/originals/63/7f/e8/637fe8db538df2456654553cdf02d55c.jpg",
      rating: "8.4",
      summary:
        "Forever alone in a crowd, failed comedian Arthur Fleck seeks connection as he walks the streets of Gotham City. Arthur wears two masks -- the one he paints for his day job as a clown, and the guise he projects in a futile attempt to feel like he's part of the world around him. Isolated, bullied and disregarded by society, Fleck begins a slow descent into madness as he transforms into the criminal mastermind known as the Joker.",
    },

    {
      name: "Rambo last blood (2021)",
      poster:
        "https://i2.wp.com/stallonezone.com/zone/2019/z061719moreno_rambolastblood.png",
      rating: "6.1",
      summary:
        "Vietnam War veteran John Rambo tries to find some semblance of peace by raising horses on a ranch in Arizona. He's also developed a special familial bond with a woman named Maria and her teenage granddaughter Gabriela. But when a vicious Mexican cartel kidnaps Gabriela, Rambo crosses the border on a bloody and personal quest to rescue her and punish those responsible.",
    },

    {
      name: "No time to die (2021)",
      poster: "https://m.media-amazon.com/images/I/61+z06sGHWS._AC_SL1050_.jpg",
      rating: "7.4",
      summary:
        "James Bond is enjoying a tranquil life in Jamaica after leaving active service. However, his peace is short-lived as his old CIA friend, Felix Leiter, shows up and asks for help. The mission to rescue a kidnapped scientist turns out to be far more treacherous than expected, leading Bond on the trail of a mysterious villain who's armed with a dangerous new technology.",
    },

    {
      name: "Terminator dark fate (2019)",
      poster:
        "https://talenthouse-res.cloudinary.com/image/upload/c_fill,h_909,w_640/v1569188362/user-1026353/submissions/ubzimil3i19rmpeyzw84.jpg",
      rating: "6.2",
      summary:
        "In Mexico City, a newly modified liquid Terminator -- the Rev-9 model -- arrives from the future to kill a young factory worker named Dani Ramos. Also sent back in time is Grace, a hybrid cyborg human who must protect Ramos from the seemingly indestructible robotic assassin. But the two women soon find some much-needed help from a pair of unexpected allies -- seasoned warrior Sarah Connor and the T-800 Terminator.",
    },
  ];

  const [name, setName] = useState("");
  const [poster, setPoster] = useState("");
  const [rating, setRating] = useState("");
  const [summary, setSummary] = useState("");

  const [movielist, setMovielist] = useState(INITIAL_MOVIES);

  return (
    <div className="App">
      <div className="add-movie-form">
        {/* input text fields */}
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Poster"
          variant="outlined"
          type="text"
          value={poster}
          onChange={(event) => setPoster(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Rating"
          variant="outlined"
          type="text"
          value={rating}
          onChange={(event) => setRating(event.target.value)}
        />

        <TextField
          id="outlined-basic"
          label="Summary"
          variant="outlined"
          type="text"
          value={summary}
          onChange={(event) => setSummary(event.target.value)}
        />

        {/* add movie button */}
        <Button
          className="btn"
          variant="contained"
          onClick={() => {
            const newMovie = {
              name: name,
              poster: poster,
              rating: rating,
              summary: summary,
            };
            setMovielist([...movielist, newMovie]);
          }}
        >
          Add Movie
        </Button>
      </div>

      <section className="movie-list">
        {movielist.map((movie) => (
          <Hollywood
            name={movie.name}
            poster={movie.poster}
            rating={movie.rating}
            summary={movie.summary}
          />
        ))}
      </section>
    </div>
  );
}

function Hollywood({ name, poster, rating, summary }) {
  const styles = { color: rating >= 8.5 ? "green" : "red" };
  const [show, setShow] = useState(true);
  return (
    // card starts here
    <Card className="movie-container">
      <img className="movie-poster" src={poster} alt={name} />

      {/* card content */}
      <CardContent>
        <div className="movie-specs">
          <p className="movie-name">
            {name}
            <IconButton
              aria-label="summary"
              color="primary"
              // onClick -> setShow -> Inform react that show is updated
              onClick={() => setShow(!show)}
            >
              {/* Coditional rendering */}
              {show ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </p>
          <p style={styles} className="movie-rating">
            <StarRateIcon />
            {rating}
          </p>
        </div>

        {/* Coditional rendering */}
        {show ? <p className="movie-summary"> {summary} </p> : ""}
      </CardContent>

      {/* card actions */}
      <CardActions>
        <Counter />
      </CardActions>
    </Card>
    // card ends here
  );
}

//  counter function
function Counter() {
  const [like, setLike] = useState(0);
  const [disLike, setDisLike] = useState(0);

  return (
    <div>
      {/* like button */}
      <IconButton
        className="likebtn"
        onClick={() => setLike(like + 1)}
        color="primary"
        aria-label="like the movie"
      >
        <Badge badgeContent={like} color="primary">
          <ThumbUpIcon />
        </Badge>
      </IconButton>

      {/* dislike button */}
      <IconButton
        className="dislikebtn"
        onClick={() => setDisLike(disLike + 1)}
        color="error"
        aria-label="dislike the movie"
      >
        <Badge badgeContent={disLike} color="error">
          <ThumbDownIcon />
        </Badge>
      </IconButton>
    </div>
  );
}
