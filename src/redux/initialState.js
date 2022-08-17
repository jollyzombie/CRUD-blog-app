const initialState = {
  posts: [
    {
      id: '1',
      title: 'The Hellfire Club',
      shortDescription: 'Hellfire Club is an official D&D club headed by me.',
      content: 'Main content of the article',
      publishedDate: new Date ('2022-02-08'),
      author: 'Eddie Munson',
    },
    {
      id: '2',
      title: 'Dear Billy',
      shortDescription: 'I do not know if you can even hear this.',
      content: 'Main content of the article',
      publishedDate: new Date ('2021-06-08'),
      author: 'Max Mayfield',
    },
    {
      id: '3',
      title: 'Suzie, Do You Copy?',
      shortDescription: 'Suzie does not answer Dustins calls.',
      content: 'Main content of the article',
      publishedDate: new Date ('2022-05-08'),
      author: 'Dustin Henderson',
    },
  ], //all posts
};

export default initialState;
