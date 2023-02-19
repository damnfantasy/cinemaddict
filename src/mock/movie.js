import dayjs from 'dayjs';
import { nanoid } from 'nanoid';
import { allComments, generateComments } from './comment';
import { getRandomArrayElement, getRandomArrayElements, getRandomBoolean, getRandomInteger } from './mock';

const AGE_RATING = [0, 12, 18];
const RELEASE_COUNTRY = ['Russia', 'USA', 'Germany', 'Italy', 'France', 'Spain', 'China', 'Japan'];
const GENRES = ['Comedy', 'Drama', 'Fantasy', 'Sport', 'Action'];
const DESCRIPTIONS = ['Lorem ipsum dolor sit amet, consectetur adipiscing elit.', 'Cras aliquet varius magna, non porta ligula feugiat eget.', 'Fusce tristique felis at fermentum pharetra.', 'Aliquam id orci ut lectus varius viverra.', 'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.', 'Phasellus eros mauris, condimentum sed nibh vitae, sodales efficitur ipsum.', 'Sed blandit, eros vel aliquam faucibus, purus ex euismod diam, eu luctus nunc ante ut dui.', 'Sed sed nisi sed augue convallis suscipit in sed felis.', 'Aliquam erat volutpat.', 'Nunc fermentum tortor ac porta dapibus.', 'In rutrum ac purus sit amet tempus.'];
const MOVIES_DIRECTORS = ['Alfred Hitchcock ', 'Orson Welles ', 'John Ford', 'Howard Hawks', 'Martin Scorsese', 'Akira Kurosawa'];
const MOVIES_WRITERS = ['Buster Keaton', 'Frank Capra', 'Federico Fellini', 'Steven Spielberg', 'Jean Renoir'];
const MOVIES_ACTORS = ['Morgan Freeman', 'Will Smith', 'Ben Affleck', 'Bruce Willias', 'Nickolas Cage', 'Robert De\'Niro', 'Johny Depp'];
const MOVIES_DURATIONS = ['1h 20m', '1h', '1h 40m', '2h', '2h 30m'];
const MOVIES = [
  {
    title: 'Made for each other',
    alternativeTitle: 'Made for each other',
    poster: './images/posters/made-for-each-other.png'
  },
  {
    title: 'Popeye meets sinbad',
    alternativeTitle: 'Popeye meets sinbad',
    poster: './images/posters/popeye-meets-sinbad.png'
  },
  {
    title: 'Sabrush trail',
    alternativeTitle: 'Sabrush trail',
    poster: './images/posters/sagebrush-trail.jpg'
  },
  {
    title: 'Santa Claus conquers the martians',
    alternativeTitle: 'Santa Claus conquers the martians',
    poster: './images/posters/santa-claus-conquers-the-martians.jpg'
  },
  {
    title: 'The dance of life',
    alternativeTitle: 'The dance of life',
    poster: './images/posters/the-dance-of-life.jpg'
  },
  {
    title: 'The great flamarion',
    alternativeTitle: 'The great flamarion',
    poster: './images/posters/the-great-flamarion.jpg'
  },
  {
    title: 'The man with the golden arm',
    alternativeTitle: 'The man with the golden arm',
    poster: './images/posters/the-man-with-the-golden-arm.jpg'
  },
];

function generateMovie() {
  const getCommentsId = allComments.map((comment) => comment.id);
  const commentsId = getRandomArrayElements(getCommentsId, 0, getRandomInteger(1, getCommentsId.length));
  const movie = getRandomArrayElement(MOVIES);

  return {
    id: nanoid(),
    comments: commentsId,
    filmInfo: {
      title: movie.title,
      alternativeTitle: movie.alternativeTitle,
      totalRating: (Math.random() * 10).toFixed(1),
      poster: movie.poster,
      ageRating: getRandomArrayElement(AGE_RATING),
      director: getRandomArrayElement(MOVIES_DIRECTORS),
      writers: getRandomArrayElements(MOVIES_WRITERS, 1, 4),
      actors: getRandomArrayElements(MOVIES_ACTORS, 1, 5),
      release: {
        date: dayjs('1890-01-01').add(getRandomInteger(0, 130), 'y').format('YYYY'),
        releaseCountry: getRandomArrayElement(RELEASE_COUNTRY),
      },
      duration: getRandomArrayElement(MOVIES_DURATIONS),
      genre: getRandomArrayElements(GENRES, 1, 3),
      description: getRandomArrayElement(DESCRIPTIONS),
    },
    userDetails: {
      isWatchlist: getRandomBoolean(),
      isAlreadyWatched: getRandomBoolean(),
      watchingDate: dayjs().add(getRandomInteger(0, 10000), 'm').toDate(),
      isFavourite: getRandomBoolean(),
    }
  };
}

export { generateMovie };
