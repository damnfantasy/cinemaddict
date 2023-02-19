import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import { getRandomArrayElement, getRandomInteger } from './mock';

const EMOTIONS = ['smile', 'sleeping', 'puke', 'angry'];
const COMMENTS = ['Interesting setting and a good cast', 'Booooooooooring', 'Very very old. Meh', 'Almost two hours? Seriously?'];
const AUTHOR_NAMES = ['Joseph Ingram', 'John Anderson', 'Mark Bryant', 'Michael Vasquez', 'Nicholas James', 'Harry Fernandez', 'Edward Arnold', 'Albert Wallace', 'Ronald Duncan', 'Daniel Smith'];

function generateComment(name) {
  return {
    id: nanoid(),
    author: name,
    comment: getRandomArrayElement(COMMENTS),
    date: dayjs().add(getRandomInteger(0, 10000), 'm').toDate(),
    emotion: getRandomArrayElement(EMOTIONS)
  };
}

const generateComments = () => AUTHOR_NAMES.map((el) => generateComment(el));

const allComments = generateComments();

// console.log(allComments)

export { allComments, generateComments }
