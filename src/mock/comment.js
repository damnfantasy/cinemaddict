import { nanoid } from 'nanoid';
import dayjs from 'dayjs';
import { getRandomArrayElement, getRandomInteger } from './mock';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

const EMOTIONS = ['smile', 'sleeping', 'puke', 'angry'];
const COMMENTS = ['Interesting setting and a good cast', 'Booooooooooring', 'Very very old. Meh', 'Almost two hours? Seriously?'];
const AUTHOR_NAMES = ['Joseph Ingram', 'John Anderson', 'Mark Bryant', 'Michael Vasquez', 'Nicholas James', 'Harry Fernandez', 'Edward Arnold', 'Albert Wallace', 'Ronald Duncan', 'Daniel Smith'];

function generateComment(name) {
  const date = dayjs().subtract(getRandomInteger(1, 10000), 'm').format('YYYY/MM/DD HH:mm');
  const getDate = (datee) => {
    
  }
  return {
    id: nanoid(),
    author: name,
    comment: getRandomArrayElement(COMMENTS),
    dateComment: date,
    emotion: getRandomArrayElement(EMOTIONS)
  };
}

const generateComments = () => AUTHOR_NAMES.map((el) => generateComment(el));

const allComments = generateComments();

export { allComments, generateComments }
