const rightWrongOptions = ["Right", "Wrong", "Doesn't say"];

const readingWritingTestsData = [
  {
    id: "RW1",
    title: "Reading & Writing Test 1",
    description: "Cambridge English Key (KET) A2 - Paper 1, 56 questions",
    book: "Quyển 1",
    paper: "Reading & Writing",
    parts: [
      {
        id: 1,
        title: "Part 1",
        type: "matching",
        badge: "Notice Matching",
        description:
          "Which notice (A-H) says this (1-5)? For questions 1-5, mark the correct letter A-H on your answer sheet.",
        matchingData: {
          leftHeading: "Statements",
          rightHeading: "Notices",
          optionCardStyle: "notice",
          options: [
            "Passport photographs are ready in 5 minutes",
            "Monica's art class will be in room 31 today",
            "City Museum\nTalk on 16th-century artists\nWednesday, 6.30 pm  GBP2",
            "The Art Centre library is now closed on Fridays",
            "Winton Stores\nPostcards by our village photographer on sale inside",
            "Homestore\nall paint half-price - for one month only",
            "Wet Paint!\nPlease use other entrance",
            "Burley Art Club\nSale of paintings starts Monday",
          ],
        },
        questions: [
          { id: 1, question: "You can learn how to paint here.", correct: 1 },
          {
            id: 2,
            question: "If you go shopping here this week, you'll pay much less than usual.",
            correct: 5,
          },
          { id: 3, question: "This place is not open every day.", correct: 3 },
          {
            id: 4,
            question: "You won't have to wait long before you get your pictures.",
            correct: 0,
          },
          {
            id: 5,
            question: "Someone has just painted a door in this building.",
            correct: 6,
          },
        ],
      },
      {
        id: 2,
        title: "Part 2",
        type: "multiple-choice-group",
        badge: "Sentence Cloze",
        description:
          "Read the sentences about camping. Choose the best word (A, B or C) for each space. For questions 6-10, mark A, B or C on your answer sheet.",
        example: {
          question:
            "A lot of families prefer to ______ on a campsite because it is cheaper than a hotel.",
          answer: "B",
          options: ["keep", "stay", "travel"],
        },
        questions: [
          {
            id: 6,
            question: "For some campsites, you have to phone and ______ before you go.",
            options: ["book", "take", "spend"],
            correct: 0,
          },
          {
            id: 7,
            question:
              "Some people play loud music on campsites so it can be very ______.",
            options: ["angry", "busy", "noisy"],
            correct: 2,
          },
          {
            id: 8,
            question: "One of the nicest things about camping is ______ breakfast outside.",
            options: ["doing", "having", "putting"],
            correct: 1,
          },
          {
            id: 9,
            question:
              "It is better to use plastic cups and plates for camping because they don't ______ easily.",
            options: ["break", "hurt", "fail"],
            correct: 0,
          },
          {
            id: 10,
            question: "One problem with camping is making ______ insects don't get into the tent.",
            options: ["careful", "clear", "sure"],
            correct: 2,
          },
        ],
      },
      {
        id: 3,
        title: "Part 3",
        type: "multiple-choice-group",
        badge: "Conversation Completion",
        description:
          "Complete the five conversations. For questions 11-15, mark A, B or C on your answer sheet.",
        example: {
          question: "Where do you come from?",
          answer: "A",
          options: ["New York.", "School.", "Home."],
        },
        questions: [
          {
            id: 11,
            question: "Is it a good film?",
            options: ["That's right.", "It's OK.", "I don't agree."],
            correct: 1,
          },
          {
            id: 12,
            question: "I'm going to Tom's party tonight.",
            options: ["Can I go too?", "Let's go.", "Was it good?"],
            correct: 0,
          },
          {
            id: 13,
            question: "When did you lose your watch?",
            options: ["Once a week.", "For six days.", "A month ago."],
            correct: 2,
          },
          {
            id: 14,
            question: "Sorry, I don't understand you.",
            options: ["Let me explain.", "I don't know.", "What does it mean?"],
            correct: 0,
          },
          {
            id: 15,
            question: "Shall we ask Paul to come with us?",
            options: ["I believe it.", "I'm sure.", "If you like."],
            correct: 2,
          },
        ],
      },
      {
        id: 4,
        title: "Part 4",
        type: "multiple-choice-group",
        badge: "Right / Wrong / Doesn't say",
        description:
          "Read the article about a man who swam across New Zealand's Cook Strait. Are sentences 21-27 'Right' (A) or 'Wrong' (B)? If there is not enough information to answer 'Right' (A) or 'Wrong' (B), choose 'Doesn't say' (C).",
        passage: {
          title: "David swims the Cook Strait",
          paragraphs: [
            "David Johnson has loved swimming all his life. When he was 27, he swam in a race near his home in the USA. The sea was very cold and David started to feel unwell. He was taken to hospital but he soon got better and started swimming again. In 1983, he became the first person to swim from Santa Cruz Island to the Californian coast.",
            "In January 2004, at the age of 52, David crossed New Zealand's Cook Strait in 9 hours and 38 minutes. The oldest swimmer before David was only 42 years old. David spent over a year getting ready to swim the Strait. Then, he and his wife flew to New Zealand so that David could practise for a few weeks there. But, only days after they arrived, the weather improved so David decided to start his swim. He did it with the help of a team. 'They were great,' David said. 'They were in a boat next to me all the time! After a few hours, I thought about stopping but I didn't and went on swimming.'",
            "Afterwards, David and his wife travelled around New Zealand before returning to the USA.",
          ],
        },
        example: {
          question: "David Johnson has always enjoyed swimming.",
          answer: "A",
          options: rightWrongOptions,
        },
        questions: [
          {
            id: 21,
            question:
              "David Johnson had problems during a swimming competition in the USA.",
            options: rightWrongOptions,
            correct: 0,
          },
          {
            id: 22,
            question:
              "After 1983, many people swam between Santa Cruz Island and the Californian coast.",
            options: rightWrongOptions,
            correct: 2,
          },
          {
            id: 23,
            question:
              "In January 2004, David was the first person of his age to swim across the Cook Strait.",
            options: rightWrongOptions,
            correct: 0,
          },
          {
            id: 24,
            question: "David practised for more than a year to swim across the Cook Strait.",
            options: rightWrongOptions,
            correct: 0,
          },
          {
            id: 25,
            question:
              "David was in New Zealand for a long time before he swam across the Cook Strait.",
            options: rightWrongOptions,
            correct: 1,
          },
          {
            id: 26,
            question:
              "David's wife was in the boat beside him when he swam the Cook Strait.",
            options: rightWrongOptions,
            correct: 2,
          },
          {
            id: 27,
            question: "David had to stop for a short time while swimming the Cook Strait.",
            options: rightWrongOptions,
            correct: 1,
          },
        ],
      },
      {
        id: 5,
        title: "Part 5",
        type: "multiple-choice-group",
        badge: "Article Cloze",
        description:
          "Read the article about doing homework. Choose the best word (A, B or C) for each space. For questions 28-35, mark A, B or C on your answer sheet.",
        passage: {
          title: "Doing homework",
          paragraphs: [
            "It is a good idea to (0) ______ your homework early. If you can do it (28) ______ your evening meal, you will have (29) ______ time later to do things that you enjoy, like talking (30) ______ the phone.",
            "It is also better to do homework as soon as possible after the teacher has given it to you. Then, if the homework is difficult and you (31) ______ time to think about it, you will (32) ______ have time to do it.",
            "Always turn off your mobile phone and the television when you (33) ______ doing homework. You will not do it (34) ______ without them. Make sure you have a quiet place to work, with (35) ______ light and a comfortable chair.",
          ],
        },
        example: {
          question: "(0) ______ your homework early.",
          answer: "C",
          options: ["starting", "started", "start"],
        },
        questions: [
          {
            id: 28,
            question: "(28) ______ your evening meal",
            options: ["since", "before", "until"],
            correct: 1,
          },
          {
            id: 29,
            question: "you will have (29) ______ time later",
            options: ["more", "much", "most"],
            correct: 0,
          },
          {
            id: 30,
            question: "like talking (30) ______ the phone",
            options: ["by", "at", "on"],
            correct: 2,
          },
          {
            id: 31,
            question: "if the homework is difficult and you (31) ______ time to think about it",
            options: ["should", "need", "must"],
            correct: 1,
          },
          {
            id: 32,
            question: "you will (32) ______ have time to do it",
            options: ["still", "yet", "already"],
            correct: 0,
          },
          {
            id: 33,
            question: "when you (33) ______ doing homework",
            options: ["have", "are", "were"],
            correct: 1,
          },
          {
            id: 34,
            question: "You will not do it (34) ______ without them",
            options: ["fastest", "fast", "faster"],
            correct: 2,
          },
          {
            id: 35,
            question: "with (35) ______ light and a comfortable chair",
            options: ["enough", "all", "many"],
            correct: 0,
          },
        ],
      },
      {
        id: 6,
        title: "Part 6",
        type: "word-builder",
        badge: "Word Builder",
        description:
          "Read the descriptions of some things you can find in a kitchen. What is the word for each one? The first letter is already there. There is one space for each other letter in the word. For questions 36-40, write the words on your answer sheet.",
        example: {
          prompt: "Breakfast, lunch and dinner are all examples of this.",
          start: "m",
          answer: "meal",
        },
        questions: [
          {
            id: 36,
            question: "This keeps food and drink cold.",
            start: "f",
            correct: "fridge",
          },
          {
            id: 37,
            question: "You use this to cut things.",
            start: "k",
            correct: "knife",
          },
          {
            id: 38,
            question:
              "You do this to water to make it hot enough for a cup of coffee.",
            start: "b",
            correct: "boil",
          },
          {
            id: 39,
            question: "Some people put this in their drinks to make them sweet.",
            start: "s",
            correct: "sugar",
          },
          {
            id: 40,
            question: "You can make chips with this vegetable.",
            start: "p",
            correct: "potato",
          },
        ],
      },
      {
        id: 7,
        title: "Part 7",
        type: "letter-gap-fill",
        badge: "Letter Gap Fill",
        description:
          "Complete the letter. Write ONE word for each space. For questions 41-50, write the words on your answer sheet.",
        letterData: {
          greeting: "Dear Giulia,",
          closing: ["Love,", "Sunniya"],
          lines: [
            [
              { type: "text", value: "Thank you " },
              { type: "example", id: 0, value: "for" },
              {
                type: "text",
                value:
                  " the lovely birthday present. I already had some CDs by the same singer but I didn't have ",
              },
              { type: "blank", id: 41 },
              { type: "text", value: " one. I like it " },
              { type: "blank", id: 42 },
              { type: "text", value: " very much." },
            ],
            [
              { type: "text", value: "I " },
              { type: "blank", id: 43 },
              {
                type: "text",
                value:
                  " a lovely time on my birthday. My parents took me ",
              },
              { type: "blank", id: 44 },
              {
                type: "text",
                value:
                  " a Japanese restaurant for lunch. The food was excellent and ",
              },
              { type: "blank", id: 45 },
              { type: "text", value: " all enjoyed it." },
            ],
            [
              { type: "blank", id: 46 },
              {
                type: "text",
                value:
                  " were some famous actors sitting near to ",
              },
              { type: "blank", id: 47 },
              {
                type: "text",
                value:
                  " table. I asked ",
              },
              { type: "blank", id: 48 },
              {
                type: "text",
                value:
                  " to write their names on my menu.",
              },
            ],
            [
              {
                type: "text",
                value:
                  "They wrote: 'To Sunniya with love on your birthday'. It was ",
              },
              { type: "blank", id: 49 },
              { type: "text", value: " great day. I'll " },
              { type: "blank", id: 50 },
              { type: "text", value: " forget meeting them." },
            ],
          ],
        },
        questions: [
          { id: 41, question: "I didn't have ___ one.", correct: "this" },
          { id: 42, question: "I like it ___ much.", correct: "very" },
          { id: 43, question: "I ___ a lovely time on my birthday.", correct: "had" },
          { id: 44, question: "My parents took me ___ a Japanese restaurant.", correct: "to" },
          { id: 45, question: "The food was excellent and ___ all enjoyed it.", correct: "we" },
          { id: 46, question: "___ were some famous actors sitting near to our table.", correct: "there" },
          { id: 47, question: "There were some famous actors sitting near to ___ table.", correct: "our" },
          { id: 48, question: "I asked ___ to write their names on my menu.", correct: "them" },
          { id: 49, question: "It was ___ great day.", correct: "a" },
          { id: 50, question: "I'll ___ forget meeting them.", correct: "never" },
        ],
      },
      {
        id: 8,
        title: "Part 8",
        type: "info-extract",
        badge: "Info Extraction",
        description:
          "Read the advertisement and the email. Fill in the information in Anna's notes. For questions 51-55, write the information on your answer sheet.",
        infoData: {
          advertTitle: "Cinemax Cinema",
          advertSubtitle: "Monday 8 - Sunday 14 June",
          advertBlocks: [
            {
              title: "BLUE JUICE",
              lines: ["4.30 pm | 7.15 pm | 8.30 pm"],
            },
            {
              title: "Moon Race",
              lines: ["3.45 pm | 8.45 pm"],
            },
            {
              title: "Tickets",
              lines: ["GBP4.75", "GBP5.50 for films after 6 pm"],
            },
          ],
          email: {
            from: "Jed",
            to: "Anna",
            body:
              "Can you book our tickets? I'm working Friday evening but can go on Saturday. I don't want to see Blue Juice - I think the other film is better. Shall we go at the later time? Then we can eat before it starts. I'll wait for you in the cafe opposite at 7.30.",
          },
          notesTitle: "Anna's notes",
          notesSubtitle: "Cinema visit",
        },
        questions: [
          { id: 51, question: "Name of film", correct: ["Moon Race"] },
          { id: 52, question: "Day", correct: ["Saturday"] },
          { id: 53, question: "Start time", correct: ["8.45", "8:45", "8 45"], suffix: "pm" },
          { id: 54, question: "Cost per person", correct: ["5.50", "5.5"], prefix: "GBP" },
          {
            id: 55,
            question: "Place to meet Jed",
            correct: ["cafe opposite", "the cafe opposite", "cafe"],
            displayCorrect: "cafe opposite",
          },
        ],
      },
      {
        id: 9,
        title: "Part 9",
        type: "writing-task",
        badge: "Writing",
        description:
          "Your friend Sam is coming to your house tomorrow evening. Write a note to Sam. Tell Sam what time to come, what to bring and how to get to your house. Write 25-35 words.",
        writingData: {
          prompt: "Your friend Sam is coming to your house tomorrow evening. Write a note to Sam.",
          bullets: [
            "what time to come",
            "what to bring",
            "how to get to your house",
          ],
        },
        questions: [
          {
            id: 56,
            question: "Write a note to Sam (25-35 words).",
            correct: null,
          },
        ],
      },
    ],
  },
  {
    id: "RW2",
    title: "Reading & Writing Test 2",
    description: "Cambridge English Key (KET) A2 - Paper 1, 56 questions",
    book: "Quyển 1",
    paper: "Reading & Writing",
    parts: [
      {
        id: 1,
        title: "Part 1",
        type: "matching",
        badge: "Notice Matching",
        description:
          "Which notice (A-H) says this (1-5)? For questions 1-5, mark the correct letter A-H on your answer sheet.",
        matchingData: {
          leftHeading: "Statements",
          rightHeading: "Notices",
          optionCardStyle: "notice",
          options: [
            "School Trip to the Sea\nDon't forget your picnic!",
            "City Airport\nPlease keep exits free from luggage",
            "INGHAM COUNTRY PARK\nAfter eating, take your picnic things home",
            "Please write your name and address on all your suitcases",
            "Internet Cafe\nSend emails, surf the net\nGBP2 per hour",
            "Central Station\nKeep your luggage with you at all times",
            "Pietro's Cafe\nPlease only eat food you have bought here",
            "SOUTHPORT ART MUSEUM\nSorry, no cameras",
          ],
        },
        questions: [
          { id: 1, question: "Do not leave any food here.", correct: 2 },
          {
            id: 2,
            question: "Do not leave your suitcases in front of the doors.",
            correct: 1,
          },
          { id: 3, question: "You can write to people from here.", correct: 4 },
          { id: 4, question: "Do not bring your own sandwiches here.", correct: 6 },
          {
            id: 5,
            question: "Be very careful to watch your bags and suitcases.",
            correct: 5,
          },
        ],
      },
      {
        id: 2,
        title: "Part 2",
        type: "multiple-choice-group",
        badge: "Sentence Cloze",
        description:
          "Read the sentences about Ingrid's home. Choose the best word (A, B or C) for each space. For questions 6-10, mark A, B or C on your answer sheet.",
        example: {
          question:
            "Ingrid lives in a flat on the seventh ______ of a large, modern building.",
          answer: "A",
          options: ["floor", "line", "platform"],
        },
        questions: [
          {
            id: 6,
            question: "Ingrid likes living ______ above the city streets.",
            options: ["tall", "high", "long"],
            correct: 1,
          },
          {
            id: 7,
            question:
              "Ingrid was born in the countryside, but she ______ living in the city.",
            options: ["hopes", "wants", "prefers"],
            correct: 2,
          },
          {
            id: 8,
            question:
              "It only ______ Ingrid ten minutes to walk from the flat to her school.",
            options: ["uses", "takes", "needs"],
            correct: 1,
          },
          {
            id: 9,
            question:
              "When the lift isn't ______ Ingrid has to walk up the stairs to her flat!",
            options: ["arriving", "climbing", "working"],
            correct: 2,
          },
          {
            id: 10,
            question:
              "When she gets home, her mother cooks a big ______.",
            options: ["meal", "dish", "food"],
            correct: 0,
          },
        ],
      },
      {
        id: 3,
        title: "Part 3",
        type: "multiple-choice-group",
        badge: "Conversation Completion",
        description:
          "Complete the five conversations. For questions 11-15, mark A, B or C on your answer sheet.",
        example: {
          question: "Where do you come from?",
          answer: "A",
          options: ["New York.", "School.", "Home."],
        },
        questions: [
          {
            id: 11,
            question: "I like your new dress.",
            options: ["Do you really?", "What's it like?", "Do you think so?"],
            correct: 2,
          },
          {
            id: 12,
            question: "How did you get to Portugal?",
            options: ["It was GBP50.", "Last week.", "By plane."],
            correct: 2,
          },
          {
            id: 13,
            question: "I'm sorry I'm late.",
            options: ["You can't go.", "That's all right.", "There isn't time."],
            correct: 1,
          },
          {
            id: 14,
            question: "Hello. Can I speak to Jane, please?",
            options: ["Can I leave a message?", "I'll try again later.", "Can I ask who's calling?"],
            correct: 2,
          },
          {
            id: 15,
            question: "Remember to buy some coffee!",
            options: ["I won't forget.", "I don't mind.", "I'm certain, thank you."],
            correct: 0,
          },
        ],
      },
      {
        id: 4,
        title: "Part 4",
        type: "multiple-choice-group",
        badge: "Right / Wrong / Doesn't say",
        description:
          "Read the article about two strange meetings. Are sentences 21-27 'Right' (A) or 'Wrong' (B)? If there is not enough information to answer 'Right' (A) or 'Wrong' (B), choose 'Doesn't say' (C).",
        passage: {
          title: "We meet twice",
          paragraphs: [
            "My name is Anna King and I was born in a small town called Madison in Wyoming in the centre of the USA. When I was twenty, I moved to the east coast, to a town just south of New York, to start a job in a department store. One day, a young man with short brown hair who was shopping in the store looked at me and asked, 'Are you Michelle Golden?'",
            "'No,' I said. 'But do you mean Michelle Golden from Madison?' He did. I told him that I was at school with Michelle. She wasn't much older than me and people often said that we looked just like each other. Then the young man told me that Michelle was in the same history class at university as he was.",
            "Six months later, I got a better job with another department store and moved to the west coast to work at their San Francisco store. One day on my way home from work, a young man with short brown hair passed me in the street and asked, 'Are you Michelle Golden?'",
            "'No,' I answered. 'You asked me that when we met in a shop several thousand miles away, near New York.'",
          ],
        },
        example: {
          question: "Anna was born in a large town.",
          answer: "B",
          options: rightWrongOptions,
        },
        questions: [
          {
            id: 21,
            question: "Anna left home and began working in a department store.",
            options: rightWrongOptions,
            correct: 0,
          },
          {
            id: 22,
            question: "The young man who spoke to Anna wanted to buy a new jacket.",
            options: rightWrongOptions,
            correct: 2,
          },
          {
            id: 23,
            question: "Anna was younger than Michelle.",
            options: rightWrongOptions,
            correct: 0,
          },
          {
            id: 24,
            question: "Michelle and the young man were students together.",
            options: rightWrongOptions,
            correct: 0,
          },
          {
            id: 25,
            question: "Anna got a job with the same company in San Francisco.",
            options: rightWrongOptions,
            correct: 0,
          },
          {
            id: 26,
            question: "Anna was at work when she met the young man for the second time.",
            options: rightWrongOptions,
            correct: 1,
          },
          {
            id: 27,
            question: "Anna was angry when the young man spoke to her a second time.",
            options: rightWrongOptions,
            correct: 2,
          },
        ],
      },
      {
        id: 5,
        title: "Part 5",
        type: "multiple-choice-group",
        badge: "Article Cloze",
        description:
          "Read the article about tigers. Choose the best word (A, B or C) for each space. For questions 28-35, mark A, B or C on your answer sheet.",
        passage: {
          title: "Tigers",
          paragraphs: [
            "Tigers are the (0) ______ cats of all. A hundred years ago 100,000 tigers lived across Asia, but today (28) ______ are only about 6000, with (29) ______ living in zoos around the world.",
            "Tigers usually live in forests but (30) ______ are found in wetter areas. Most of them live (31) ______ 12 to 18 years, but in zoos they can live (32) ______ they are 25. The coats of (33) ______ beautiful animals are orange and black but, surprisingly, no two coats are ever the (34) ______. They look for food at night, and will eat fish and birds as well as larger animals.",
            "Tigers are different from most cats because they like water. They are strong swimmers, and often go into rivers when the weather gets (35) ______ hot.",
          ],
        },
        example: {
          question: "(0) ______ cats of all.",
          answer: "C",
          options: ["large", "larger", "largest"],
        },
        questions: [
          { id: 28, question: "(28) ______ are only about 6000", options: ["that", "it", "there"], correct: 2 },
          { id: 29, question: "with (29) ______ living in zoos", options: ["much", "many", "any"], correct: 1 },
          { id: 30, question: "but (30) ______ are found in wetter areas", options: ["each", "every", "some"], correct: 2 },
          { id: 31, question: "Most of them live (31) ______ 12 to 18 years", options: ["from", "in", "through"], correct: 0 },
          { id: 32, question: "they can live (32) ______ they are 25", options: ["during", "until", "above"], correct: 1 },
          { id: 33, question: "The coats of (33) ______ beautiful animals", options: ["these", "those", "this"], correct: 0 },
          { id: 34, question: "no two coats are ever the (34) ______", options: ["same", "one", "other"], correct: 0 },
          { id: 35, question: "when the weather gets (35) ______ hot", options: ["such", "too", "enough"], correct: 1 },
        ],
      },
      {
        id: 6,
        title: "Part 6",
        type: "word-builder",
        badge: "Word Builder",
        description:
          "Read the descriptions of some things people often carry with them in their bags or pockets. What is the word for each one? The first letter is already there. There is one space for each other letter in the word. For questions 36-40, write the words on your answer sheet.",
        example: {
          prompt: "If you drive a car, you should carry this with you.",
          start: "l",
          answer: "licence",
        },
        questions: [
          {
            id: 36,
            question: "People often write their appointments in this.",
            start: "d",
            correct: "diary",
          },
          {
            id: 37,
            question: "Some people wear these so they can see better.",
            start: "g",
            correct: "glasses",
          },
          {
            id: 38,
            question: "You will need to keep this with you when you travel by train.",
            start: "t",
            correct: "ticket",
          },
          {
            id: 39,
            question: "You can read about famous people in this and it also has lots of pictures.",
            start: "m",
            correct: "magazine",
          },
          {
            id: 40,
            question: "Many people keep their money inside this.",
            start: "w",
            correct: "wallet",
          },
        ],
      },
      {
        id: 7,
        title: "Part 7",
        type: "letter-gap-fill",
        badge: "Letter Gap Fill",
        description:
          "Complete the email. Write ONE word for each space. For questions 41-50, write the words on your answer sheet.",
        letterData: {
          greeting: "",
          closing: [],
          lines: [
            [
              { type: "text", value: "From: Margaret   To: Lidija" },
            ],
            [
              { type: "text", value: "Thank you " },
              { type: "example", id: 0, value: "for" },
              { type: "text", value: " letting me stay " },
              { type: "blank", id: 41 },
              { type: "text", value: " you in Ljubljana last week. Slovenia's a great country and " },
              { type: "blank", id: 42 },
              { type: "text", value: " was really nice to spend a " },
              { type: "blank", id: 43 },
              { type: "text", value: " days with you and your family. I learned so " },
              { type: "blank", id: 44 },
              { type: "text", value: " about Slovenian cooking from your mother!" },
            ],
            [
              { type: "text", value: "I really enjoyed meeting your friends " },
              { type: "blank", id: 45 },
              { type: "text", value: " the university too. Please say hello to all of " },
              { type: "blank", id: 46 },
              { type: "text", value: "." },
            ],
            [
              { type: "text", value: "I " },
              { type: "blank", id: 47 },
              { type: "text", value: " like to come back to Slovenia. If I do that, I'll make sure I can speak more " },
              { type: "blank", id: 48 },
              { type: "text", value: " your language. What " },
              { type: "blank", id: 49 },
              { type: "text", value: " the best Slovene textbook?" },
            ],
            [
              { type: "text", value: "I " },
              { type: "blank", id: 50 },
              { type: "text", value: " everyone in your family is well." },
            ],
          ],
        },
        questions: [
          { id: 41, question: "stay ___ you", correct: "with" },
          { id: 42, question: "and ___ was really nice", correct: "it" },
          { id: 43, question: "spend a ___ days", correct: "few" },
          { id: 44, question: "learned so ___", correct: "much" },
          { id: 45, question: "friends ___ the university", correct: "from" },
          { id: 46, question: "all of ___", correct: "them" },
          { id: 47, question: "I ___ like to come back", correct: "would" },
          { id: 48, question: "speak more ___ your language", correct: "of" },
          { id: 49, question: "What ___ the best textbook", correct: "is" },
          { id: 50, question: "I ___ everyone in your family is well", correct: "hope" },
        ],
      },
      {
        id: 8,
        title: "Part 8",
        type: "info-extract",
        badge: "Info Extraction",
        description:
          "Read the advertisement and the email. Fill in the information in Marco's notes. For questions 51-55, write the information on your answer sheet.",
        infoData: {
          advertTitle: "CAMP BELLAMY",
          advertSubtitle: "SPRING ACTIVITIES",
          advertBlocks: [
            {
              title: "Climbing",
              lines: ["(Ages 13-16)", "GBP60"],
            },
            {
              title: "Sailing",
              lines: ["(Ages 17-19)", "GBP80"],
            },
            {
              title: "Times",
              lines: ["8.30 am or 2.30 pm"],
            },
            {
              title: "Courses begin",
              lines: ["14 April and 21 April"],
            },
          ],
          email: {
            from: "Connor",
            to: "Marco",
            body:
              "I've booked us on the climbing course in the afternoon at Camp Bellamy because we're not old enough to go sailing. I know you're on holiday until 15 April, so we will start on 21 April. You need to bring some food with you but we are given special shoes when we arrive.",
          },
          notesTitle: "Marco's notes",
          notesSubtitle: "Spring activities",
        },
        questions: [
          { id: 51, question: "Activity booked", correct: ["climbing"] },
          { id: 52, question: "Start date", correct: ["21 April"] },
          { id: 53, question: "Time", correct: ["2.30", "2:30", "2 30"], suffix: "pm" },
          { id: 54, question: "Price per person", correct: ["60"], prefix: "GBP" },
          { id: 55, question: "Take", correct: ["food", "some food"], displayCorrect: "food" },
        ],
      },
      {
        id: 9,
        title: "Part 9",
        type: "writing-task",
        badge: "Writing",
        description:
          "You have just started a new summer job. Write an email to your English friend, Pat. Say what your new job is, which days you work and why you like it. Write 25-35 words.",
        writingData: {
          prompt: "You have just started a new summer job. Write an email to your English friend, Pat.",
          bullets: [
            "what your new job is",
            "which days you work",
            "why you like it",
          ],
        },
        questions: [
          {
            id: 56,
            question: "Write an email to Pat (25-35 words).",
            correct: null,
          },
        ],
      },
    ],
  },
  {
    id: "RW3",
    title: "Reading & Writing Test 3",
    description: "Cambridge English Key (KET) A2 - Paper 1, 56 questions",
    book: "Quyển 1",
    paper: "Reading & Writing",
    parts: [
      {
        id: 1,
        title: "Part 1",
        type: "matching",
        badge: "Notice Matching",
        description:
          "Which notice (A-H) says this (1-5)? For questions 1-5, mark the correct letter A-H on your answer sheet.",
        matchingData: {
          leftHeading: "Statements",
          rightHeading: "Notices",
          optionCardStyle: "notice",
          options: [
            "Western Railway\nWoodville Town - Drayton Park\nMonday - Friday only",
            "Bus to City Centre\nAdults GBP1.50\nChildren under 2 travel free",
            "ALL DRIVERS!\nBRIDGE ONLY 5 METRES HIGH",
            "Airport Bus\n5 am - 11.30 pm daily\nGBP11 return",
            "City Trains\nPlease put large bags between seats",
            "Hospital Parking\nfor visitors\nGBP2 per hour",
            "Choose any seat on the plane\nNo numbers on tickets",
            "Drive Slowly\nLorries Turning",
          ],
        },
        questions: [
          { id: 1, question: "Some lorries cannot go under this.", correct: 2 },
          {
            id: 2,
            question: "You cannot travel by these trains at the weekend.",
            correct: 0,
          },
          { id: 3, question: "You must pay to leave your car here.", correct: 5 },
          { id: 4, question: "Use this if you have to catch a plane.", correct: 3 },
          { id: 5, question: "You may sit where you like.", correct: 6 },
        ],
      },
      {
        id: 2,
        title: "Part 2",
        type: "multiple-choice-group",
        badge: "Sentence Cloze",
        description:
          "Read the sentences about an ice-hockey player. Choose the best word (A, B or C) for each space. For questions 6-10, mark A, B or C on your answer sheet.",
        example: {
          question:
            "Neil ______ to play ice-hockey even when he was a very small boy.",
          answer: "B",
          options: ["enjoyed", "wanted", "welcomed"],
        },
        questions: [
          {
            id: 6,
            question: "Neil ______ ice-hockey every evening with his team.",
            options: ["made", "joined", "practised"],
            correct: 2,
          },
          {
            id: 7,
            question:
              "Neil was an excellent player and his team soon began to ______ competitions.",
            options: ["earn", "win", "take"],
            correct: 1,
          },
          {
            id: 8,
            question:
              "Sometimes it was ______ for Neil to find enough time for both his ice-hockey and homework.",
            options: ["difficult", "terrible", "worse"],
            correct: 0,
          },
          {
            id: 9,
            question:
              "When he ______ school at sixteen, Neil went to a special sports college.",
            options: ["moved", "left", "passed"],
            correct: 1,
          },
          {
            id: 10,
            question:
              "Now Neil is a famous ice-hockey player and you can often ______ him on television.",
            options: ["listen", "see", "look"],
            correct: 1,
          },
        ],
      },
      {
        id: 3,
        title: "Part 3",
        type: "multiple-choice-group",
        badge: "Conversation Completion",
        description:
          "Complete the five conversations. For questions 11-15, mark A, B or C on your answer sheet.",
        example: {
          question: "Where do you come from?",
          answer: "A",
          options: ["New York.", "School.", "Home."],
        },
        questions: [
          {
            id: 11,
            question: "Is there any sugar?",
            options: ["Nothing.", "I need it.", "I'm afraid not."],
            correct: 2,
          },
          {
            id: 12,
            question: "Let's go to the concert tonight.",
            options: ["Have you got tickets?", "Who was playing?", "What's it about?"],
            correct: 0,
          },
          {
            id: 13,
            question: "Can you carry these bags?",
            options: ["It doesn't matter.", "I'm fine, thanks.", "Well, I'll try."],
            correct: 2,
          },
          {
            id: 14,
            question: "Thanks for a lovely meal.",
            options: ["I enjoyed seeing you.", "I'll be ready soon.", "I don't want to come."],
            correct: 0,
          },
          {
            id: 15,
            question: "How is your mother?",
            options: ["She's 54.", "Much better, thanks.", "She's tall and beautiful."],
            correct: 1,
          },
        ],
      },
      {
        id: 4,
        title: "Part 4",
        type: "multiple-choice-group",
        badge: "Article Questions",
        description:
          "Read the article about Ravi Patra, who works on music programmes on television, and then answer the questions. For questions 21-27, mark A, B or C on your answer sheet.",
        passage: {
          title: "Ravi Patra",
          paragraphs: [
            "In 2006, Ravi Patra started working for a music company and three years later, in 2009, got a job on the music television channel Rock TV.",
            "Ravi enjoys working on television, but when he was younger he wanted to fly planes. Later, he became more interested in football. But Ravi has always loved music, so he tried to get work with Rock TV. His boss says he gave him the job because he wanted it more than anybody else!",
            "When he started at Rock TV, Ravi arrived first at the office and was the last to leave at 10 in the evening. Now, he starts a bit later, but he is still busy until 10 pm. Before lunch, he usually writes his words for the show and in the afternoon he has meetings or makes Rock TV advertisements.",
            "Ravi has many popular bands on his show and the stars are often interesting people. But Ravi knows that everyone watches the show to hear great music. Getting that right is more important than anything else.",
            "Ravi knows what questions to ask the band members. He tries to make them laugh and this is easy for him. Sometimes he cannot remember their names but he always has information about the bands to help him.",
            "Sadly, his work means that he doesn't see his friends enough, but he has great fun on skiing trips and listens to music all the time.",
          ],
        },
        example: {
          question: "Ravi Patra started working with Rock TV in",
          answer: "C",
          options: ["2003.", "2006.", "2009."],
        },
        questions: [
          {
            id: 21,
            question: "What was the first job Ravi wanted to have when he was younger?",
            options: ["footballer", "pilot", "singer"],
            correct: 1,
          },
          {
            id: 22,
            question: "What did Ravi's boss at Rock TV say about him?",
            options: [
              "Ravi asked for a job at Rock TV more than once.",
              "There were other people better than Ravi.",
              "Ravi showed him how much he wanted the job.",
            ],
            correct: 2,
          },
          {
            id: 23,
            question: "How has Ravi's work changed?",
            options: [
              "He no longer begins very early.",
              "He is busier than before.",
              "He doesn't stay late at the office.",
            ],
            correct: 0,
          },
          {
            id: 24,
            question: "In the mornings, Ravi often",
            options: [
              "works on Rock TV advertisements.",
              "meets important people at his office.",
              "decides what to say on his programme.",
            ],
            correct: 2,
          },
          {
            id: 25,
            question: "What does Ravi think is the most important thing about the show?",
            options: [
              "It has lots of interesting stars.",
              "There is great music.",
              "He is popular with the guests.",
            ],
            correct: 1,
          },
          {
            id: 26,
            question: "What problem does Ravi sometimes have on the Rock TV show?",
            options: [
              "He forgets people's names.",
              "He cannot stop laughing.",
              "His questions make people angry.",
            ],
            correct: 0,
          },
          {
            id: 27,
            question: "Ravi would like to spend more time",
            options: ["in the mountains.", "with his friends.", "listening to music."],
            correct: 1,
          },
        ],
      },
      {
        id: 5,
        title: "Part 5",
        type: "multiple-choice-group",
        badge: "Article Cloze",
        description:
          "Read the article about a mountain in Japan. Choose the best word (A, B or C) for each space. For questions 28-35, mark A, B or C on your answer sheet.",
        passage: {
          title: "Mount Fuji",
          paragraphs: [
            "Mount Fuji is (0) ______ Fujisan in Japan. It is 3776 metres high and is visited (28) ______ people from all over the world. It is a very beautiful mountain and many artists have used it in (29) ______ work.",
            "It is sometimes possible to see Mount Fuji from Tokyo, but often the weather is (30) ______ cloudy to see it clearly. The (31) ______ time to see the mountain is (32) ______ the colder months of the year, and (33) ______ the early morning and late evening.",
            "A very pleasant place to enjoy Mount Fuji from is Fuji Five Lake (Fujigoko), (34) ______ is just north of the mountain. Mount Fuji is open for climbing in July and August, but not at (35) ______ times of the year.",
          ],
        },
        example: {
          question: "(0) ______ Fujisan in Japan.",
          answer: "A",
          options: ["called", "calling", "calls"],
        },
        questions: [
          { id: 28, question: "visited (28) ______ people", options: ["by", "for", "with"], correct: 0 },
          { id: 29, question: "used it in (29) ______ work", options: ["his", "your", "their"], correct: 2 },
          { id: 30, question: "weather is (30) ______ cloudy", options: ["too", "very", "only"], correct: 1 },
          { id: 31, question: "The (31) ______ time", options: ["good", "better", "best"], correct: 2 },
          { id: 32, question: "mountain is (32) ______ the colder months", options: ["since", "during", "until"], correct: 1 },
          { id: 33, question: "and (33) ______ the early morning", options: ["on", "in", "at"], correct: 2 },
          { id: 34, question: "(34) ______ is just north", options: ["which", "what", "where"], correct: 0 },
          { id: 35, question: "not at (35) ______ times", options: ["another", "both", "other"], correct: 2 },
        ],
      },
      {
        id: 6,
        title: "Part 6",
        type: "word-builder",
        badge: "Word Builder",
        description:
          "Read the descriptions of some things in a bathroom. What is the word for each one? The first letter is already there. There is one space for each other letter in the word. For questions 36-40, write the words on your answer sheet.",
        example: {
          prompt: "You can use this to tidy your hair.",
          start: "c",
          answer: "comb",
        },
        questions: [
          { id: 36, question: "People stand under this to wash themselves.", start: "s", correct: "shower" },
          { id: 37, question: "If this is large, the bathroom will have lots of light when it is sunny.", start: "w", correct: "window" },
          { id: 38, question: "People wash their hair with this.", start: "s", correct: "shampoo" },
          { id: 39, question: "You can look at yourself in this.", start: "m", correct: "mirror" },
          { id: 40, question: "If your hands are dirty, you can wash them with this.", start: "s", correct: "soap" },
        ],
      },
      {
        id: 7,
        title: "Part 7",
        type: "letter-gap-fill",
        badge: "Letter Gap Fill",
        description:
          "Complete the emails. Write ONE word for each space. For questions 41-50, write the words on your answer sheet.",
        letterData: {
          greeting: "",
          closing: [],
          lines: [
            [{ type: "text", value: "From: Danny   To: Ali" }],
            [
              { type: "text", value: "I heard that " },
              { type: "example", id: 0, value: "you" },
              { type: "text", value: " want to sell your bike." },
            ],
            [
              { type: "text", value: "Is it OK " },
              { type: "blank", id: 41 },
              { type: "text", value: " come and see the bike after college on Thursday? I don't know " },
              { type: "blank", id: 42 },
              { type: "text", value: " you live. " },
              { type: "blank", id: 43 },
              { type: "text", value: " you give me your address? I'd also like to know why you " },
              { type: "blank", id: 44 },
              { type: "text", value: " selling it." },
            ],
            [{ type: "text", value: "From: Ali   To: Danny" }],
            [
              { type: "text", value: "I decided to sell the old bike " },
              { type: "blank", id: 45 },
              { type: "text", value: " I got a motorbike for " },
              { type: "blank", id: 46 },
              { type: "text", value: " birthday. The bike is " },
              { type: "blank", id: 47 },
              { type: "text", value: " few years old but I'm sure you'll like " },
              { type: "blank", id: 48 },
              { type: "text", value: "." },
            ],
            [
              { type: "text", value: "I won't be at home on Thursday - I play football then and I don't get back until late. What about coming on Friday instead? " },
              { type: "blank", id: 49 },
              { type: "text", value: " that a good day for you?" },
            ],
            [
              { type: "text", value: "I live at 35 Portland Road, " },
              { type: "blank", id: 50 },
              { type: "text", value: " to the library." },
            ],
          ],
        },
        questions: [
          { id: 41, question: "OK ___ come and see the bike", correct: "to" },
          { id: 42, question: "I don't know ___ you live", correct: "where" },
          { id: 43, question: "___ you give me your address", correct: "can" },
          { id: 44, question: "why you ___ selling it", correct: "are" },
          { id: 45, question: "bike ___ I got a motorbike", correct: "because" },
          { id: 46, question: "for ___ birthday", correct: "my" },
          { id: 47, question: "bike is ___ few years old", correct: "a" },
          { id: 48, question: "I'm sure you'll like ___", correct: "it" },
          { id: 49, question: "___ that a good day for you", correct: "is" },
          { id: 50, question: "Road, ___ to the library", correct: "next" },
        ],
      },
      {
        id: 8,
        title: "Part 8",
        type: "info-extract",
        badge: "Info Extraction",
        description:
          "Read the advertisement and the email. Fill in the information on the form. For questions 51-55, write the information on your answer sheet.",
        infoData: {
          advertTitle: "Smith's Bookshop",
          advertSubtitle: "Book & DVD Language Courses",
          advertBlocks: [
            {
              title: "Talking Time",
              lines: ["Spanish", "French", "Level 1: GBP28.00", "Level 2: GBP32.00"],
            },
            {
              title: "Speaking Plus",
              lines: ["Japanese", "Spanish", "Level 1: GBP30.00", "Level 2: GBP35.00"],
            },
          ],
          email: {
            from: "Tom Peters",
            to: "Jane Brown",
            body:
              "My French course finished last week and I've just started learning Spanish. My teacher says the Speaking Plus course is the best. She can give me Level 1 so can you order Level 2 for me at the bookshop? I'm at work until 6 pm. Ring me there (553905) or phone me this evening on 020 7865 4436.",
          },
          notesTitle: "Smith's Bookshop",
          notesSubtitle: "Order Form",
        },
        questions: [
          { id: 51, question: "Daytime phone number", correct: ["553905"] },
          { id: 52, question: "Course name", correct: ["Speaking Plus"] },
          { id: 53, question: "Language", correct: ["Spanish"] },
          { id: 54, question: "Level", correct: ["2", "Level 2"], displayCorrect: "2" },
          { id: 55, question: "Price", correct: ["35.00", "35"], prefix: "GBP" },
        ],
      },
      {
        id: 9,
        title: "Part 9",
        type: "writing-task",
        badge: "Writing",
        description:
          "There is going to be a concert in the town where you live. Write an email to your English friend, Elena. Ask her to come to the concert, tell her when the concert is, and say how much the tickets are. Write 25-35 words.",
        writingData: {
          prompt:
            "There is going to be a concert in the town where you live. Write an email to your English friend, Elena.",
          bullets: [
            "ask her to come to the concert",
            "tell her when the concert is",
            "say how much the tickets are",
          ],
        },
        questions: [
          {
            id: 56,
            question: "Write an email to Elena (25-35 words).",
            correct: null,
          },
        ],
      },
    ],
  },
  {
    id: "RW4",
    title: "Reading & Writing Test 4",
    description: "Cambridge English Key (KET) A2 - Paper 1, 56 questions",
    book: "Quyển 1",
    paper: "Reading & Writing",
    parts: [
      {
        id: 1,
        title: "Part 1",
        type: "matching",
        badge: "Notice Matching",
        description:
          "Which notice (A-H) says this (1-5)? For questions 1-5, mark the correct letter A-H on your answer sheet.",
        matchingData: {
          leftHeading: "Statements",
          rightHeading: "Notices",
          optionCardStyle: "notice",
          options: [
            "CASTLE TOURS EVERY 2 HOURS\nTUES - SUN",
            "Travellers' Hotel\n10 km from airport\n44 rooms",
            "Phone 552249\nto book theatre tickets\n2pm and 8pm shows",
            "Flight to catch?\nCall Beach Taxis first on 212 242",
            "One-bedroom apartment\nto rent from next month\nCall 316606",
            "Park House\nThis lift for apartments on floors 1-5",
            "Helicopter flight over\nDolphin Island leaves daily at 11:00",
            "Village Concert\npay at door or book\ntickets now on 988655",
          ],
        },
        questions: [
          {
            id: 1,
            question: "If you'd like to see this place from the air, go in the morning.",
            correct: 6,
          },
          {
            id: 2,
            question: "Use this if you are going up to one of these apartments.",
            correct: 5,
          },
          {
            id: 3,
            question: "Phone this company if you want to go to the airport.",
            correct: 3,
          },
          {
            id: 4,
            question: "It's possible to see this place at different times of the day.",
            correct: 0,
          },
          {
            id: 5,
            question: "There are two ways to get tickets for this.",
            correct: 7,
          },
        ],
      },
      {
        id: 2,
        title: "Part 2",
        type: "multiple-choice-group",
        badge: "Sentence Cloze",
        description:
          "Read the sentences about Sally's day at work. Choose the best word (A, B or C) for each space. For questions 6-10, mark A, B or C on your answer sheet.",
        example: {
          question:
            "Sally works in an office and she had a very ______ day there yesterday.",
          answer: "A",
          options: ["busy", "fast", "strong"],
        },
        questions: [
          {
            id: 6,
            question: "Sally has worked in the ______ office since she left college.",
            options: ["single", "alone", "same"],
            correct: 2,
          },
          {
            id: 7,
            question: "Every day, Sally ______ the bus to work.",
            options: ["goes", "takes", "brings"],
            correct: 1,
          },
          {
            id: 8,
            question: "Yesterday, Sally ______ a dark blue skirt and jacket to work.",
            options: ["had", "used", "wore"],
            correct: 2,
          },
          {
            id: 9,
            question: "Sally ______ most of her day at the office.",
            options: ["spent", "made", "kept"],
            correct: 0,
          },
          {
            id: 10,
            question:
              "Yesterday was a ______ day for Sally because she had problems with her computer.",
            options: ["difficult", "tired", "delayed"],
            correct: 0,
          },
        ],
      },
      {
        id: 3,
        title: "Part 3",
        type: "multiple-choice-group",
        badge: "Conversation Completion",
        description:
          "Complete the five conversations. For questions 11-15, mark A, B or C on your answer sheet.",
        example: {
          question: "Where do you come from?",
          answer: "A",
          options: ["New York.", "School.", "Home."],
        },
        questions: [
          {
            id: 11,
            question: "I'd like a cup of coffee, please.",
            options: ["Of course.", "Yes, I do.", "I like that."],
            correct: 0,
          },
          {
            id: 12,
            question: "Rajni's a businesswoman, isn't she?",
            options: ["Where does he work?", "No, she can't.", "I think so."],
            correct: 2,
          },
          {
            id: 13,
            question: "Minsk isn't in Russia.",
            options: ["Where is it then?", "Does it have to be?", "Isn't it somewhere?"],
            correct: 0,
          },
          {
            id: 14,
            question: "Do you agree with me?",
            options: ["I haven't.", "Certainly not.", "No, I'm not."],
            correct: 1,
          },
          {
            id: 15,
            question: "The train has just left.",
            options: ["When did they arrive?", "Is there another one?", "Where are our seats?"],
            correct: 1,
          },
        ],
      },
      {
        id: 4,
        title: "Part 4",
        type: "multiple-choice-group",
        badge: "Right / Wrong / Doesn't say",
        description:
          "Read the article about a basketball player called Susanna Brightman. Are sentences 21-27 'Right' (A) or 'Wrong' (B)? If there is not enough information to answer 'Right' (A) or 'Wrong' (B), choose 'Doesn't say' (C).",
        passage: {
          title: "Susanna Brightman",
          paragraphs: [
            "Susanna Brightman is a young Australian basketball player. She is 195 cm tall, and very fast and strong. Some people say she may become the best player in the world one day. As well as playing for her own country, she plays for a team called Boston Hawks in America.",
            "Susanna was born on 15th June 1992. Her mother and father were both basketball players and when she was just 2 weeks old she was already travelling around the country with them while they played basketball. When she was still very young, Susanna told her parents she wanted to play for Australia. At the age of 16, she played for her country for the first time.",
            "But things have not always been easy. When Susanna was 12, she toured Australia for the first time. One day, the team she was playing for lost an important match because Susanna didn't want to play. Susanna's parents were angry with her but told her that she didn't have to play basketball if she didn't want to. She needed to think hard about her future. Luckily, Susanna decided she wanted to be a basketball player after all, and since then she has worked very hard to become an even better player.",
          ],
        },
        example: {
          question: "Susanna Brightman comes from Australia.",
          answer: "A",
          options: rightWrongOptions,
        },
        questions: [
          {
            id: 21,
            question:
              "Some people think Susanna is the best basketball player in the world today.",
            options: rightWrongOptions,
            correct: 1,
          },
          {
            id: 22,
            question: "Susanna has won an important competition with Boston Hawks.",
            options: rightWrongOptions,
            correct: 2,
          },
          {
            id: 23,
            question:
              "Susanna's parents stopped playing basketball when Susanna was born.",
            options: rightWrongOptions,
            correct: 1,
          },
          {
            id: 24,
            question:
              "Susanna first became interested in playing basketball when she was a little child.",
            options: rightWrongOptions,
            correct: 2,
          },
          {
            id: 25,
            question:
              "Susanna's parents asked her to stop playing basketball when she was 12.",
            options: rightWrongOptions,
            correct: 1,
          },
          {
            id: 26,
            question: "Susanna gets angry when her team loses.",
            options: rightWrongOptions,
            correct: 2,
          },
          {
            id: 27,
            question: "Susanna knows what she wants to do with her life.",
            options: rightWrongOptions,
            correct: 0,
          },
        ],
      },
      {
        id: 5,
        title: "Part 5",
        type: "multiple-choice-group",
        badge: "Article Cloze",
        description:
          "Read the article about kites and their history. Choose the best word (A, B or C) for each space. For questions 28-35, mark A, B or C on your answer sheet.",
        passage: {
          title: "Kites",
          paragraphs: [
            "No one knows (0) ______ made the first kite. Some people say (28) ______ was Archytas. He was interested in mathematics and lived in Greece 2400 years ago.",
            "But perhaps people in China flew kites long (29) ______ then. Flying kites has always been an important part of Chinese life. The ninth day of the ninth month is a special day that is called 'The Feast of High Flight' and the sky is full (30) ______ kites. (31) ______ look like fish or birds and (32) ______ the family joins in the fun.",
            "Kites have a lot of different uses. Scientists used them in the 18th century (33) ______ learn about storms and other kinds of weather. At the end of the 19th century, before (34) ______ were aeroplanes, a kite that was 11 metres long (35) ______ a man 30 metres up into the air!",
          ],
        },
        example: {
          question: "(0) ______ made the first kite.",
          answer: "A",
          options: ["who", "why", "when"],
        },
        questions: [
          { id: 28, question: "(28) ______ was Archytas", options: ["they", "it", "he"], correct: 1 },
          { id: 29, question: "long (29) ______ then", options: ["since", "before", "already"], correct: 1 },
          { id: 30, question: "full (30) ______ kites", options: ["of", "in", "from"], correct: 0 },
          { id: 31, question: "(31) ______ look like fish or birds", options: ["Both", "Each", "Some"], correct: 2 },
          { id: 32, question: "(32) ______ the family joins in the fun", options: ["all", "other", "many"], correct: 0 },
          { id: 33, question: "used them ... (33) ______ learn", options: ["for", "by", "to"], correct: 2 },
          { id: 34, question: "before (34) ______ were aeroplanes", options: ["these", "there", "here"], correct: 1 },
          { id: 35, question: "kite ... (35) ______ a man", options: ["carried", "carries", "carrying"], correct: 0 },
        ],
      },
      {
        id: 6,
        title: "Part 6",
        type: "word-builder",
        badge: "Word Builder",
        description:
          "Read the descriptions of some words about reading and writing. What is the word for each one? The first letter is already there. There is one space for each other letter in the word. For questions 36-40, write the words on your answer sheet.",
        example: {
          prompt: "You write this to your friends or family when you are on holiday.",
          start: "p",
          answer: "postcard",
        },
        questions: [
          { id: 36, question: "You choose from this list of food and drink in a restaurant.", start: "m", correct: "menu" },
          { id: 37, question: "You look in this if you want to know what a word means.", start: "d", correct: "dictionary" },
          { id: 38, question: "This person may write for a newspaper or a magazine.", start: "j", correct: "journalist" },
          { id: 39, question: "People who like reading enjoy going to this place.", start: "l", correct: "library" },
          { id: 40, question: "Some people put these on when they want to read something.", start: "g", correct: "glasses" },
        ],
      },
      {
        id: 7,
        title: "Part 7",
        type: "letter-gap-fill",
        badge: "Letter Gap Fill",
        description:
          "Complete the email. Write ONE word for each space. For questions 41-50, write the words on your answer sheet.",
        letterData: {
          greeting: "Hi Monica,",
          closing: [],
          lines: [
            [
              { type: "text", value: "I " },
              { type: "example", id: 0, value: "am" },
              { type: "text", value: " writing to give you my new address - it's 24 Clifton Road. We still live in the same city but we have just moved " },
              { type: "blank", id: 41 },
              { type: "text", value: " a new house. We are " },
              { type: "blank", id: 42 },
              { type: "text", value: " too far from the old house so I can still see a " },
              { type: "blank", id: 43 },
              { type: "text", value: " of my friends. And it's easy to go to the shops " },
              { type: "blank", id: 44 },
              { type: "text", value: " bus." },
            ],
            [
              { type: "text", value: "The new house is bigger " },
              { type: "blank", id: 45 },
              { type: "text", value: " the old one and everyone likes " },
              { type: "blank", id: 46 },
              { type: "text", value: ". There are three bedrooms - mine is " },
              { type: "blank", id: 47 },
              { type: "text", value: " largest. From the window I can just " },
              { type: "blank", id: 48 },
              { type: "text", value: " the river." },
            ],
            [
              { type: "blank", id: 49 },
              { type: "text", value: " you have time, please come and visit us. Everyone will " },
              { type: "blank", id: 50 },
              { type: "text", value: " happy to see you." },
            ],
          ],
        },
        questions: [
          { id: 41, question: "moved ___ a new house", correct: "to" },
          { id: 42, question: "We are ___ too far", correct: "not" },
          { id: 43, question: "see a ___ of my friends", correct: "lot" },
          { id: 44, question: "shops ___ bus", correct: "by" },
          { id: 45, question: "bigger ___ the old one", correct: "than" },
          { id: 46, question: "everyone likes ___", correct: "it" },
          { id: 47, question: "mine is ___ largest", correct: "the" },
          { id: 48, question: "can just ___ the river", correct: "see" },
          { id: 49, question: "___ you have time", correct: "if" },
          { id: 50, question: "will ___ happy to see you", correct: "be" },
        ],
      },
      {
        id: 8,
        title: "Part 8",
        type: "info-extract",
        badge: "Info Extraction",
        description:
          "Read the notice and the email. Fill in the information in Brian's notes. For questions 51-55, write the information on your answer sheet.",
        infoData: {
          advertTitle: "Hexham College",
          advertSubtitle: "Courses",
          advertBlocks: [
            {
              title: "French",
              lines: ["(Monday or Friday class)", "First class: 6 December"],
            },
            {
              title: "Spanish",
              lines: ["(Wednesday or Friday class)", "First class: 15 December"],
            },
            {
              title: "Cost",
              lines: [
                "10 weeks - Beginners GBP85",
                "10 weeks - Advanced GBP95",
                "14 weeks - Beginners GBP105",
                "14 weeks - Advanced GBP125",
              ],
            },
          ],
          email: {
            from: "Mick",
            to: "Brian",
            body:
              "Can you book me onto a beginners language course at your college? I studied French last year so I want to try Spanish this time. I'd like to do the longer course and I have football practice on Friday, so I can't do a class then.",
          },
          notesTitle: "Brian's notes",
          notesSubtitle: "Language course",
        },
        questions: [
          { id: 51, question: "Which language", correct: ["Spanish"] },
          { id: 52, question: "Day", correct: ["Wednesday"] },
          { id: 53, question: "Start date", correct: ["15 December"] },
          { id: 54, question: "Number of weeks", correct: ["14"] },
          { id: 55, question: "Cost", correct: ["105"], prefix: "GBP" },
        ],
      },
      {
        id: 9,
        title: "Part 9",
        type: "writing-task",
        badge: "Writing",
        description:
          "Read the email from your English friend, Jools. Write an email to Jools and answer the questions. Write 25-35 words.",
        writingData: {
          prompt: "Read the email from your English friend, Jools. Write an email to Jools and answer the questions.",
          bullets: [
            "tell Jools about the music club you go to",
            "say where it is and what day it is",
            "say what you do there",
          ],
        },
        questions: [
          {
            id: 56,
            question: "Write an email to Jools (25-35 words).",
            correct: null,
          },
        ],
      },
    ],
  },
];

export default readingWritingTestsData;
