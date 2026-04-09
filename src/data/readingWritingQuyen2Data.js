const rightWrongOptions = ["Right", "Wrong", "Doesn't say"];

const readingWritingQuyen2Data = [
  {
    id: "RW2-1",
    title: "Reading & Writing Test 1",
    description: "Cambridge English Key (KET) A2 - Paper 1, 56 questions",
    book: "Quyển 2",
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
            "Star Cinema\nNew staff member wanted to work evenings",
            "This way to staff car park\nNo exit for cinema customers",
            "Booked online by credit card?\nCollect tickets from machine near entrance",
            "Special Offer!\nTeenagers - ask staff about discounts on tickets",
            "Children's film\nNo tickets left for 11 a.m. show - afternoon show only",
            "Cash only\nwhen paying for sweets",
            "Snack bar\nFood available from 3 p.m. weekends and 5 p.m. weekdays",
            "Children under 12 may only see this film with an adult.",
          ],
        },
        questions: [
          { id: 1, question: "Teenagers can go in here alone.", correct: 3 },
          {
            id: 2,
            question: "Get your tickets here if you've already paid to see the film.",
            correct: 2,
          },
          { id: 3, question: "This place doesn't open in the morning.", correct: 6 },
          { id: 4, question: "You can only use this door if you work here.", correct: 1 },
          { id: 5, question: "You can't use a credit card here.", correct: 5 },
        ],
      },
      {
        id: 2,
        title: "Part 2",
        type: "multiple-choice-group",
        badge: "Sentence Cloze",
        description:
          "Read the sentences about Richard travelling by plane. Choose the best word (A, B or C) for each space. For questions 6-10, mark A, B or C on your answer sheet.",
        example: {
          question: "Richard often travels to Canada to ______ his family.",
          answer: "B",
          options: ["stay", "visit", "spend"],
        },
        questions: [
          {
            id: 6,
            question: "Richard says the airport gets very ______ at weekends.",
            options: ["busy", "strong", "heavy"],
            correct: 0,
          },
          {
            id: 7,
            question: "Richard ______ has a coffee before his plane leaves.",
            options: ["already", "once", "usually"],
            correct: 2,
          },
          {
            id: 8,
            question: "Richard ______ looking around the shops in the airport.",
            options: ["hopes", "enjoys", "wants"],
            correct: 1,
          },
          {
            id: 9,
            question: "Richard hates it when there's a ______ and his plane is late.",
            options: ["difference", "moment", "delay"],
            correct: 2,
          },
          {
            id: 10,
            question: "On the plane, Richard watches films or ______ to the person next to him.",
            options: ["says", "tells", "talks"],
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
            question: "We've just missed the 3 p.m. train.",
            options: ["Shall I get it?", "In about an hour.", "Then let's get the next one."],
            correct: 2,
          },
          {
            id: 12,
            question: "Do you want to come to the shops with us?",
            options: ["That would be great.", "I don't mind it.", "Not very often."],
            correct: 0,
          },
          {
            id: 13,
            question: "I haven't finished packing my suitcase yet.",
            options: ["I'll take you on holiday.", "When did it happen?", "Well, hurry up then."],
            correct: 2,
          },
          {
            id: 14,
            question: "My sister's just had a baby!",
            options: ["How lovely!", "I'd love to!", "Yes, she does!"],
            correct: 0,
          },
          {
            id: 15,
            question: "Is that Shelley in the blue coat?",
            options: ["This is Amanda speaking.", "She doesn't want to.", "I think it may be."],
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
          "Read the article about a young racing driver. Are sentences 21-27 'Right' (A) or 'Wrong' (B)? If there is not enough information to answer 'Right' (A) or 'Wrong' (B), choose 'Doesn't say' (C).",
        passage: {
          title: "Jann Mardenborough",
          paragraphs: [
            "Jann Mardenborough has loved cars since he was given a toy one as a baby. He loved them so much that when he was eight his father took him to a place where children race small cars called karts. Staff at the kart centre told Jann he drove so well, he might one day become a racing driver. Unfortunately, the kart centre closed soon afterwards, and there wasn't another one near enough to his home that he could get to.",
            "As he couldn't race karts any more, Jann decided to try computer racing games. After lots of practice, he became very good. However, he never told his parents what he was doing. Then, one day, when he was 18, he told them that he was one of the top ten winners of a computer racing competition. They were very surprised. His prize was to drive a real car in a race against the other nine top players.",
            "It was Jann's first time in a racing car, but, amazingly, he won the race! The prize this time was a free course to learn to be a racing driver. He did really well, and has found a job driving in a racing team.",
          ],
        },
        example: {
          question: "Jann's love of cars started with a toy.",
          answer: "A",
          options: rightWrongOptions,
        },
        questions: [
          {
            id: 21,
            question: "When he was a child, workers at the kart centre said Jann was a good driver.",
            options: rightWrongOptions,
            correct: 0,
          },
          {
            id: 22,
            question: "Jann stopped racing karts because he became bored with it.",
            options: rightWrongOptions,
            correct: 1,
          },
          {
            id: 23,
            question: "Jann was good at computer racing games immediately.",
            options: rightWrongOptions,
            correct: 1,
          },
          {
            id: 24,
            question: "Jann played computer racing games with school friends.",
            options: rightWrongOptions,
            correct: 2,
          },
          {
            id: 25,
            question: "Jann told his parents about the computer competition after it ended.",
            options: rightWrongOptions,
            correct: 2,
          },
          {
            id: 26,
            question: "The people Jann raced against were from different countries.",
            options: rightWrongOptions,
            correct: 2,
          },
          {
            id: 27,
            question: "Jann's parents had to pay for his driving course.",
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
          "Read the article about the history of chocolate. Choose the best word (A, B or C) for each space. For questions 28-35, mark A, B or C on your answer sheet.",
        passage: {
          title: "The History of Chocolate",
          paragraphs: [
            "The history of chocolate began (0) ______ three and a half thousand years ago. At that time, people in the Americas (28) ______ as the Mayans and the Aztecs grew the beans and made chocolate drinks (29) ______ them. Around 1500, Christopher Columbus took cocoa beans to Europe, and chocolate drinks (30) ______ became popular in Spain. However, it wasn't until nearly 100 years (31) ______ that people started drinking chocolate in (32) ______ parts of Europe.",
            "In 1657, a Frenchman opened the first chocolate house in London. The drink was expensive, so only rich people (33) ______ enjoy it. Chocolate continued to become more popular, (34) ______ it wasn't until 1847 that the first modern chocolate bar was (35) ______. Now chocolate is available everywhere, and we also eat it in foods like cakes, biscuits and sweets.",
          ],
        },
        example: {
          question: "(0) ______ three and a half thousand years ago.",
          answer: "C",
          options: ["above", "between", "over"],
        },
        questions: [
          { id: 28, question: "(28) ______ as the Mayans", options: ["such", "most", "much"], correct: 0 },
          { id: 29, question: "made chocolate drinks (29) ______ them", options: ["by", "in", "from"], correct: 2 },
          { id: 30, question: "drinks (30) ______ became popular", options: ["soon", "ever", "already"], correct: 0 },
          { id: 31, question: "100 years (31) ______", options: ["late", "later", "latest"], correct: 1 },
          { id: 32, question: "in (32) ______ parts of Europe", options: ["both", "other", "every"], correct: 1 },
          { id: 33, question: "people (33) ______ enjoy it", options: ["must", "need", "could"], correct: 2 },
          { id: 34, question: "(34) ______ it wasn't until 1847", options: ["but", "because", "when"], correct: 0 },
          { id: 35, question: "bar was (35) ______", options: ["making", "make", "made"], correct: 2 },
        ],
      },
      {
        id: 6,
        title: "Part 6",
        type: "word-builder",
        badge: "Word Builder",
        description:
          "Read the descriptions of some words about spending time outdoors. What is the word for each one? The first letter is already there. There is one space for each other letter in the word. For questions 36-40, write the words on your answer sheet.",
        example: {
          prompt: "You can do this activity in the sea or in a pool.",
          start: "s",
          answer: "swimming",
        },
        questions: [
          { id: 36, question: "This is by the sea and you can lie here in the sun.", start: "b", correct: "beach" },
          { id: 37, question: "You sleep in a tent when you do this activity.", start: "c", correct: "camping" },
          { id: 38, question: "You take this meal with you and eat it outside.", start: "p", correct: "picnic" },
          { id: 39, question: "This place has grass and trees and people go there to enjoy being outside.", start: "p", correct: "park" },
          { id: 40, question: "You play this sport with a racket and ball.", start: "t", correct: "tennis" },
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
          greeting: "Dear Aunt Fabienne,",
          closing: ["Daniel"],
          lines: [
            [
              { type: "text", value: "Mum asked " },
              { type: "example", id: 0, value: "me" },
              { type: "text", value: " to let you know that I arrived home okay. I enjoyed travelling back " },
              { type: "blank", id: 41 },
              { type: "text", value: " train, and I was surprised that " },
              { type: "blank", id: 42 },
              { type: "text", value: " only took me three hours to get home." },
            ],
            [
              { type: "text", value: "Thank you very " },
              { type: "blank", id: 43 },
              { type: "text", value: " for looking after me " },
              { type: "blank", id: 44 },
              { type: "text", value: " I was in France." },
            ],
            [
              { type: "text", value: "I'm going back to school " },
              { type: "blank", id: 45 },
              { type: "text", value: " week. My French is a lot better " },
              { type: "blank", id: 46 },
              { type: "text", value: " it was before, so I hope my marks will improve!" },
            ],
            [
              { type: "text", value: "I " },
              { type: "blank", id: 47 },
              { type: "text", value: " like to keep practising French and I'm looking " },
              { type: "blank", id: 48 },
              { type: "text", value: " a pen friend. I thought of your friend's son Elian." },
            ],
            [
              { type: "text", value: "We can send emails once a week. Let me know " },
              { type: "blank", id: 49 },
              { type: "text", value: " you think." },
            ],
            [
              { type: "text", value: "I " },
              { type: "blank", id: 50 },
              { type: "text", value: " we can see each other soon." },
            ],
          ],
        },
        questions: [
          { id: 41, question: "travelling back ___ train", correct: "by" },
          { id: 42, question: "surprised that ___ only took me", correct: "it" },
          { id: 43, question: "Thank you very ___", correct: "much" },
          { id: 44, question: "after me ___ I was in France", correct: "while" },
          { id: 45, question: "school ___ week", correct: "next" },
          { id: 46, question: "better ___ it was before", correct: "than" },
          { id: 47, question: "I ___ like to keep practising", correct: "would" },
          { id: 48, question: "looking ___ a pen friend", correct: "for" },
          { id: 49, question: "know ___ you think", correct: "what" },
          { id: 50, question: "I ___ we can see each other", correct: "hope" },
        ],
      },
      {
        id: 8,
        title: "Part 8",
        type: "info-extract",
        badge: "Info Extraction",
        description:
          "Read the advertisement and the email. Fill in the information in Martina's notes. For questions 51-55, write the information on your answer sheet.",
        infoData: {
          advertTitle: "Starlight Dance Studio",
          advertSubtitle: "New term starts June 30th",
          advertBlocks: [
            {
              title: "Hip-Hop",
              lines: ["Wednesday or Saturday", "10 a.m. or 4 p.m."],
            },
            {
              title: "Jazz Dance",
              lines: ["Sunday or Thursday", "11 a.m. or 5 p.m."],
            },
            {
              title: "Price",
              lines: ["Mornings: GBP7", "Afternoons: GBP9"],
            },
          ],
          email: {
            from: "Nicole",
            to: "Martina",
            body:
              "Martina, dance classes start again soon. We did Jazz Dance last term, so let's try Hip-Hop. I can't do weekdays because of work, and I'd prefer a morning class. Afternoon classes are more expensive anyway. Let's go by car, as it's not easy to get there by bus.",
          },
          notesTitle: "Martina's Notes",
          notesSubtitle: "Dance classes with Nicole",
        },
        questions: [
          { id: 51, question: "Type of dance", correct: ["Hip-Hop", "Hip Hop"] },
          { id: 52, question: "Day of my class", correct: ["Saturday"] },
          { id: 53, question: "Time of class", correct: ["10", "10 a.m.", "10am"], suffix: "a.m." },
          { id: 54, question: "Travel there by", correct: ["car"] },
          { id: 55, question: "Each class costs", correct: ["7", "7.00"], prefix: "GBP" },
        ],
      },
      {
        id: 9,
        title: "Part 9",
        type: "writing-task",
        badge: "Writing",
        description:
          "Read this email from your friend, Jem. Write an email to Jem and answer the questions. Write 25-35 words.",
        writingData: {
          prompt: "Read this email from your friend, Jem.",
          bullets: [
            "say where you last saw your school bag",
            "say what it looks like",
            "say what was in it",
          ],
        },
        questions: [
          {
            id: 56,
            question: "Write an email to Jem (25-35 words).",
            correct: null,
          },
        ],
      },
    ],
  },
  {
    id: "RW2-2",
    title: "Reading & Writing Test 2",
    description: "Cambridge English Key (KET) A2 - Paper 1, 56 questions",
    book: "Quyển 2",
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
            "Zoo shop\nGreat prices on all animal books",
            "Meet the penguins!\n2 p.m. / 6 p.m.\nOnly 6 tickets available for each time",
            "Spend a day with elephants or giraffes\nGBP45\nAdults only",
            "Monkey house closed until next June",
            "Fish from South America\nChildren - please do not hit the glass",
            "Playground\nFor children aged 3-11 only\nGBP2.50 per child",
            "Birthday parties at the Zoo\nFor prices, visit reception or go online",
            "Standing or climbing on the zoo walls is dangerous",
          ],
        },
        questions: [
          { id: 1, question: "For this price, you can get close to some animals.", correct: 2 },
          {
            id: 2,
            question: "There are two ways to get information about this.",
            correct: 6,
          },
          { id: 3, question: "This activity is for a small group of people.", correct: 1 },
          { id: 4, question: "This place isn't for adults or teenagers.", correct: 5 },
          { id: 5, question: "It is not possible to see these animals today.", correct: 3 },
        ],
      },
      {
        id: 2,
        title: "Part 2",
        type: "multiple-choice-group",
        badge: "Sentence Cloze",
        description:
          "Read the sentences about Sharon, who plays tennis. Choose the best word (A, B or C) for each space. For questions 6-10, mark A, B or C on your answer sheet.",
        example: {
          question: "Sharon has played tennis since she was a little girl and is now ______ good.",
          answer: "C",
          options: ["nearly", "possibly", "quite"],
        },
        questions: [
          {
            id: 6,
            question: "Sharon ______ at her tennis club four times a week.",
            options: ["joins", "enjoys", "practises"],
            correct: 2,
          },
          {
            id: 7,
            question: "Sharon ______ lots of competitions with other young players.",
            options: ["enters", "takes", "earns"],
            correct: 0,
          },
          {
            id: 8,
            question: "Recently, she has ______ her parents for a new racket.",
            options: ["told", "asked", "spoken"],
            correct: 1,
          },
          {
            id: 9,
            question: "When Sharon loses a match, she feels very ______.",
            options: ["upset", "difficult", "worst"],
            correct: 0,
          },
          {
            id: 10,
            question: "At the moment, Sharon is helping her friend to ______ her game.",
            options: ["copy", "improve", "know"],
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
            question: "How did you get to the party?",
            options: ["I caught a bus.", "It was great thanks.", "On Wednesday I think."],
            correct: 0,
          },
          {
            id: 12,
            question: "Yuri phoned me yesterday from Japan.",
            options: ["Who's calling?", "How is she?", "Can I leave a message?"],
            correct: 1,
          },
          {
            id: 13,
            question: "Is that Stella's new mobile?",
            options: ["I can't find one.", "She didn't answer.", "She hasn't bought one yet."],
            correct: 2,
          },
          {
            id: 14,
            question: "I'm going clothes shopping tomorrow.",
            options: ["Are they in the town centre?", "How long is it?", "What do you need to get?"],
            correct: 2,
          },
          {
            id: 15,
            question: "The library's closed already.",
            options: ["It's a pity you can't.", "I can wait until tomorrow.", "Can I borrow it?"],
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
          "Read the article about the bedrooms of three teenagers and then answer the questions. For questions 21-27, mark A, B or C on your answer sheet.",
        passage: {
          title: "My Bedroom",
          paragraphs: [
            "Robert likes his room to be tidy, but it's difficult as it's his brother's bedroom too. When Robert is alone in the room he does his homework or listens to music. On the walls there are a few small posters. Robert wants to have more, and to paint the walls yellow, but his mother doesn't agree. There are photographs of family holidays and of his sister's children. 'I like my room best when they're here. It gets untidy, but I don't mind.'",
            "James's bedroom is painted in his favourite colour, yellow. He loves rugby, and there are several photos of him playing in the school team. 'After school I like to come up here to play computer games. My room's like my safe place. I can relax here.' James keeps his room tidy. His school work is on one shelf, and on another he has all his books.",
            "Harry says, 'After school I come up here and chat to everyone I know on the computer. I never work in here - I study in the kitchen.' He has a big desk with a laptop in the middle, a PC on one side and a lamp on the other. On the walls there are two posters of his favourite tennis stars. 'I don't do much sport but I like watching tennis.'",
          ],
        },
        example: {
          question: "Whose room has yellow walls?",
          answer: "B",
          options: ["Robert's", "James's", "Harry's"],
        },
        questions: [
          {
            id: 21,
            question: "Who has more than one computer in his room?",
            options: ["Robert", "James", "Harry"],
            correct: 2,
          },
          {
            id: 22,
            question: "Who would like more pictures on the walls?",
            options: ["Robert", "James", "Harry"],
            correct: 0,
          },
          {
            id: 23,
            question: "Who has pictures of himself doing sport?",
            options: ["Robert", "James", "Harry"],
            correct: 1,
          },
          {
            id: 24,
            question: "Who shares his room with someone else?",
            options: ["Robert", "James", "Harry"],
            correct: 0,
          },
          {
            id: 25,
            question: "Who talks to friends when he's in his room?",
            options: ["Robert", "James", "Harry"],
            correct: 2,
          },
          {
            id: 26,
            question: "Who sometimes has visitors to his room?",
            options: ["Robert", "James", "Harry"],
            correct: 0,
          },
          {
            id: 27,
            question: "Who studies in his bedroom?",
            options: ["Robert", "James", "Harry"],
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
          "Read the article about cheetahs. Choose the best word (A, B or C) for each space. For questions 28-35, mark A, B or C on your answer sheet.",
        passage: {
          title: "Cheetahs",
          paragraphs: [
            "Most wild cheetahs (0) ______ found in eastern and south-western Africa. When running, they can go from 0 to 100 kilometres an hour (28) ______ only three seconds. They can't run this (29) ______ for very long, however, and usually stop (30) ______ about a minute. Cheetahs can also see very well, (31) ______ is useful when they are (32) ______ to catch small animals.",
            "Female cheetahs usually have three cubs at a time. These stay with their mother for between one and a half to two years. They spend most of this time playing together or learning (33) ______ to catch small animals. Male cheetahs live alone or in small groups, (34) ______ with their brothers. Cheetahs are not as big as other members (35) ______ the cat family, such as lions or tigers, and only weigh 45-60 kilograms.",
          ],
        },
        example: {
          question: "Most wild cheetahs (0) ______ found in eastern Africa.",
          answer: "C",
          options: ["is", "has", "are"],
        },
        questions: [
          { id: 28, question: "(28) ______ only three seconds", options: ["on", "in", "at"], correct: 1 },
          { id: 29, question: "run this (29) ______", options: ["fast", "faster", "fastest"], correct: 0 },
          { id: 30, question: "stop (30) ______ about a minute", options: ["after", "until", "during"], correct: 0 },
          { id: 31, question: "(31) ______ is useful", options: ["who", "where", "which"], correct: 2 },
          { id: 32, question: "they are (32) ______ to catch", options: ["try", "trying", "tried"], correct: 1 },
          { id: 33, question: "learning (33) ______ to catch", options: ["ever", "yet", "how"], correct: 2 },
          { id: 34, question: "(34) ______ with their brothers", options: ["already", "exactly", "often"], correct: 2 },
          { id: 35, question: "members (35) ______ the cat family", options: ["of", "by", "to"], correct: 0 },
        ],
      },
      {
        id: 6,
        title: "Part 6",
        type: "word-builder",
        badge: "Word Builder",
        description:
          "Read the descriptions of some travel words. What is the word for each one? The first letter is already there. There is one space for each other letter in the word. For questions 36-40, write the words on your answer sheet.",
        example: {
          prompt: "You need to buy this before you travel on a bus or train.",
          start: "t",
          answer: "ticket",
        },
        questions: [
          { id: 36, question: "You go on this when you fly from one place to another.", start: "p", correct: "plane" },
          { id: 37, question: "You go to this place when you need to catch a train or coach.", start: "s", correct: "station" },
          { id: 38, question: "When you arrive in a new country, you may have to show this.", start: "p", correct: "passport" },
          { id: 39, question: "If you look at this, it will help you find your way around a new city.", start: "m", correct: "map" },
          { id: 40, question: "You arrive here when you fly into another country.", start: "a", correct: "airport" },
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
          greeting: "Hi Marta,",
          closing: ["Parveen"],
          lines: [
            [
              { type: "text", value: "I hope " },
              { type: "example", id: 0, value: "you" },
              { type: "text", value: " are well. I was trying " },
              { type: "blank", id: 41 },
              { type: "text", value: " call you yesterday but you didn't answer. Is your phone broken, " },
              { type: "blank", id: 42 },
              { type: "text", value: " have you lost it again?" },
            ],
            [
              { type: "text", value: "Anyway, I wanted to ask " },
              { type: "blank", id: 43 },
              { type: "text", value: " you can come to my birthday party next Saturday. My birthday was actually two weeks " },
              { type: "blank", id: 44 },
              { type: "text", value: ", but I couldn't have the party then " },
              { type: "blank", id: 45 },
              { type: "text", value: " lots of people were " },
              { type: "blank", id: 46 },
              { type: "text", value: " holiday." },
            ],
            [
              { type: "text", value: "I've invited " },
              { type: "blank", id: 47 },
              { type: "text", value: " few people from our swimming club, as well as my friends from school. " },
              { type: "blank", id: 48 },
              { type: "text", value: " you think your brother " },
              { type: "blank", id: 49 },
              { type: "text", value: " free that day? Please invite " },
              { type: "blank", id: 50 },
              { type: "text", value: " to come too. The party's at my house and starts at 8 p.m." },
            ],
          ],
        },
        questions: [
          { id: 41, question: "trying ___ call you", correct: "to" },
          { id: 42, question: "broken, ___ have you lost it", correct: "or" },
          { id: 43, question: "ask ___ you can come", correct: "if" },
          { id: 44, question: "two weeks ___", correct: "ago" },
          { id: 45, question: "party then ___ lots of people", correct: "because" },
          { id: 46, question: "were ___ holiday", correct: "on" },
          { id: 47, question: "invited ___ few people", correct: "a" },
          { id: 48, question: "___ you think your brother", correct: "do" },
          { id: 49, question: "brother ___ free", correct: "is" },
          { id: 50, question: "Please invite ___ to come too", correct: "him" },
        ],
      },
      {
        id: 8,
        title: "Part 8",
        type: "info-extract",
        badge: "Info Extraction",
        description:
          "Read the advertisement and the email. Fill in the information in Lin's notes. For questions 51-55, write the information on your answer sheet.",
        infoData: {
          advertTitle: "Redwood Cinema",
          advertSubtitle: "Special showings this weekend",
          advertBlocks: [
            {
              title: "Rosy's Story",
              lines: ["Saturday 8 p.m.", "Sunday 3 p.m."],
            },
            {
              title: "Storm",
              lines: ["Saturday 9 p.m.", "Sunday 7 p.m."],
            },
            {
              title: "Prices",
              lines: ["Adults: GBP8.00", "Students/Children: GBP5.00"],
            },
          ],
          email: {
            from: "Ines",
            to: "Lin",
            body:
              "My sister's visiting this weekend, so there'll be three of us going to the cinema instead of two. I've already seen Storm, so let's see the other film. Let's go in the evening, because we need to study during the day. Could you buy the tickets, as you live nearer? Don't forget to show your university ID so we get in cheaper.",
          },
          notesTitle: "Lin's notes",
          notesSubtitle: "Cinema this weekend",
        },
        questions: [
          { id: 51, question: "Film", correct: ["Rosy's Story", "Rosys Story"] },
          { id: 52, question: "Day", correct: ["Saturday"] },
          { id: 53, question: "Time", correct: ["8", "8 p.m.", "8pm"], suffix: "p.m." },
          { id: 54, question: "Number of tickets to get", correct: ["3", "three"], displayCorrect: "3" },
          { id: 55, question: "Price per person", correct: ["5", "5.00"], prefix: "GBP" },
        ],
      },
      {
        id: 9,
        title: "Part 9",
        type: "writing-task",
        badge: "Writing",
        description:
          "You are planning a picnic for next Saturday. Write an email to your English friend, Charley. Invite Charley to come, say where Charley should meet you, and tell Charley what to bring. Write 25-35 words.",
        writingData: {
          prompt: "You are planning a picnic for next Saturday. Write an email to your English friend, Charley.",
          bullets: [
            "invite Charley to come",
            "say where Charley should meet you",
            "tell Charley what to bring",
          ],
        },
        questions: [
          {
            id: 56,
            question: "Write an email to Charley (25-35 words).",
            correct: null,
          },
        ],
      },
    ],
  },
  {
    id: "RW2-3",
    title: "Reading & Writing Test 3",
    description: "Cambridge English Key (KET) A2 - Paper 1, 56 questions",
    book: "Quyển 2",
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
    id: "RW2-4",
    title: "Reading & Writing Test 4",
    description: "Cambridge English Key (KET) A2 - Paper 1, 56 questions",
    book: "Quyển 2",
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

export default readingWritingQuyen2Data;



