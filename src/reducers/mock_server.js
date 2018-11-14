import guid from '../utils/guid';


const date = new Date().toString();
const dataStore = [
  {
    id: guid(), created_date: date, title: '1dsdsd', body: 'ds',
  },
  {
    id: guid(), created_date: date, title: ' 2dsdsd', body: 'ds',
  },
  {
    id: guid(), created_date: date, title: ' 3dsdsd', body: 'ds',
  },
  {
    id: guid(), created_date: date, title: ' 4dsdsd', body: 'ds',
  },
  {
    id: guid(), created_date: date, title: ' 5 dsdsd', body: 'ds',
  },
  {
    id: guid(), created_date: date, title: '6 dsdsd', body: 'ds',
  },
  {
    id: guid(), created_date: date, title: '7 dsdsd', body: 'ds',
  },
  {
    id: guid(), created_date: date, title: '8 dsdsd', body: 'ds',
  },
  {
    id: guid(), created_date: date, title: '9 dsdsd', body: 'ds',
  },
];

function getIdeas() {
  return new Promise((resolve) => {
    setTimeout(() => { resolve(dataStore); }, 500);
  });
}

function getNewIdea() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        id: guid(), created_date: new Date().toString(),
      });
    }, 1500);
  });
}

function postUpdateIdea() {
  // TODO mimick reducer and upate initial state ? not in the scope I guess
  return new Promise((resolve) => {
    setTimeout(() => { resolve(); }, 1500);
  });
}

function postDeleteIdea() {
  // TODO mimick reducer and upate initial state ? not in the scope I guess
  return new Promise((resolve) => {
    setTimeout(() => { resolve(); }, 1500);
  });
}

export default function mockServerFetch(route, options) {
  switch (route) {
    case 'ideas/':
      return getIdeas();
    case 'ideas/new':
      return getNewIdea();
    case 'ideas/update':
      return postUpdateIdea(options);
    case 'ideas/delete':
      return postDeleteIdea(options);
    default:
      return '';
  }
}
