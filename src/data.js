/* Program Data

  in this file you can declare variables to store important data for your program
  the data can only be primitives, objects or arrays
  do not store dom elements in these variables!!!!

  these variables will be imported by your handlers when necessary
    not by your logic
    not by your listeners
*/

export const quizData = {
  currentQuestionIndex: 0,
  // the questions in the quiz
  questions: [
    {
      text: 'What is the most spoken language in the world?',
      answers: {
        a: 'Spanish',
        b: 'Arabic',
        c: 'English',
        d: 'Chinese'
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Most spoken language',
          href: 'https://www.babbel.com/en/magazine/the-10-most-spoken-languages-in-the-world',
        },
      ],
    },
    {
      text: 'How many minutes are in a full week?',
      answers: {
        a: '10080',
        b: '10099',
        c: '10580',
        d: '13005',
      },
      correct: 'a',
      selected: null,
      links: [
        {
          text: 'Minutes in a week',
          href: 'https://socratic.org/questions/how-many-minutes-are-in-1-full-week',
        },
      ],
    },
    {
      text: 'What country drinks the most coffee per capita?',
      answers: {
        a: 'Norway',
        b: 'Finland',
        c: 'Denmark',
        d: 'Iceland',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Coffee consumption',
          href: 'https://worldpopulationreview.com/country-rankings/coffee-consumption-by-country',
        },
      ],
    },
    {
      text: 'How many elements are in the periodic table?',
      answers: {
        a: '115',
        b: '120',
        c: '118',
        d: '100',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Periodic table',
          href: 'https://www.acs.org/education/whatischemistry/periodictable.html#:~:text=Since%20then%2C%20the%20periodic%20table,most%20significant%20achievements%20in%20science.',
        },
      ],
    },
    {
      text: 'Who discovered that the earth revolves around the sun?',
      answers: {
        a: 'Isaac Newton',
        b: 'Rosalind Franklin',
        c: 'Galileo Galilei',
        d: 'Nicolaus Copernicus',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Earth info',
          href: 'https://earthobservatory.nasa.gov/features/OrbitsHistory#:~:text=In%201515%2C%20a%20Polish%20priest,all%20planets%20circled%20the%20Sun.',
        },
      ],
    },
    {
      text: 'What country has won the most World Cups?',
      answers: {
        a: 'Germany',
        b: 'Brazil',
        c: 'Argentina',
        d: 'Italy',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'World cup',
          href: 'https://www.sportingnews.com/us/soccer/news/who-has-won-most-world-cups-list-winners-men/ln2npdy5tl74pkqodlrqnpr8',
        },
      ],
    },
    {
      text: 'In what country would you find Mount Kilimanjaro?',
      answers: {
        a: 'Senegal',
        b: 'Mauritania',
        c: 'Tanzania',
        d: 'Burkina Faso',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'ENCYCLOPEDIC ENTRY',
          href: 'https://education.nationalgeographic.org/resource/kilimanjaro/',
        },
      ],
    },
    {
      text: 'What is a group of pandas known as?',
      answers: {
        a: 'A pack',
        b: 'A bunch',
        c: 'A cupboard of pandas',
        d: 'An embarrassment',
      },
      correct: 'd',
      selected: null,
      links: [
        {
          text: 'Panda info',
          href: 'https://a-z-animals.com/blog/what-is-a-group-of-pandas-called/',
        },
      ],
    },
    {
      text: 'How many bones do we have in an ear?',
      answers: {
        a: '1',
        b: '2',
        c: '3',
        d: '4',
      },
      correct: 'c',
      selected: null,
      links: [
        {
          text: 'Bones in the ear',
          href: 'https://signstation.org/how-many-bones-are-in-the-ear/',
        },
      ],
    },
    {
      text: 'Which part of web development is responsible for handling data storage and retrieval?',
      answers: {
        a: 'Front-end development',
        b: 'Back-end development',
        c: 'Full-stack development',
        d: 'Middleware development',
      },
      correct: 'b',
      selected: null,
      links: [
        {
          text: 'Web dev info',
          href: 'https://www.applify.com.sg/blog/what-is-backend-in-web-development/#:~:text=The%20backend%20plays%20a%20pivotal,retrieval%2C%20and%20manipulation%20of%20data.',
        },
      ],
    },
  ],
};
