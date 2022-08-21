const initialState = {
  posts: [
    {
      id: '1',
      title: 'The Hellfire Club',
      shortDescription: 'Hellfire Club is an official D&D club headed by me.',
      content: 'Main content of the article',
      publishedDate: new Date('09-02-2021'),
      author: 'Eddie Munson',
      category: 'Music',
    },
    {
      id: '2',
      title: 'Dear Billy',
      shortDescription: 'I do not know if you can even hear this.',
      content: 'Main content of the article',
      publishedDate: new Date('03-02-2022'),
      author: 'Max Mayfield',
      category: 'Sport',
    },
    {
      id: '3',
      title: 'Suzie, Do You Copy?',
      shortDescription: 'Suzie does not answer Dustins calls.',
      content: 'Main content of the article',
      publishedDate: new Date('05-05-2021'),
      author: 'Dustin Henderson',
      category: 'News',
    },
  ],
  categories: [
    { id: 1, name: 'Sport' },
    { id: 2, name: 'Movies' },
    { id: 3, name: 'News' },
  ],
};

export default initialState;
