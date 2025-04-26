import express, { response } from "express";
import authRoutes from "./routes/auth.route.js"
import movieRoutes from "./routes/movie.route.js"
import { ENV_VARS } from "./config/envVars.js";
import { connectDB } from "./config/db.js";

const app = express();

const PORT = ENV_VARS.PORT

app.use(express.json()); // will allow us to parse req.body

app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/movie", movieRoutes);

app.listen(PORT, () => {
    console.log("Server started at http://localhost:" + PORT);
    connectDB();
});


// const options = {
//     method: 'GET',
//     headers: {
//         accpet: 'application/json',
//         Authorization: 'Bearer ' + ENV_VARS.TMDB_API_KEY
//     }
// };


// fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', options)
//   .then(response => response.json())
//   .then(response => console.log(response))
//   .catch(err => console.error(err));