/**
 * Dữ liệu bài test Listening - Cambridge English Key (KET) A2
 * Cấu trúc mỗi test gồm 5 Parts:
 *   Part 1 (Q1-5): Chọn hình ảnh đúng (A/B/C) - ở đây dùng text mô tả thay hình
 *   Part 2 (Q6-10): Matching - nối câu với đáp án A-H
 *   Part 3 (Q11-15): Trắc nghiệm A/B/C
 *   Part 4 (Q16-20): Điền thông tin (fill-in) - chuyển thành trắc nghiệm
 *   Part 5 (Q21-25): Điền thông tin (fill-in) - chuyển thành trắc nghiệm
 * 
 * Audio file mapping: Quyển 1 (Test 1-2) -> AUDIO_QUYEN_1/TEST_1-2
 *                     Quyển 1 (Test 3-4) -> AUDIO_QUYEN_1/TEST_3-4
 *                     Quyển 2 (Test 5-8) -> AUDIO_QUYEN_2
 */

const testsData = [
  {
    id: 1,
    title: "Test 1",
    book: "Quyển 1",
    description: "Cambridge English Key - Practice Test 1",
    parts: [
      {
        id: 1,
        title: "Part 1",
        description: "You will hear five short conversations. There is one question for each conversation. Choose the correct answer A, B or C.",
        audio: "/audio/quyen1/test1-2/01_Track_1.mp3",
        optionsType: "image",
        questions: [
          {
            id: 1,
            question: "What must the man turn off?",
            options: ["/images/test1/part1/q1_a.png", "/images/test1/part1/q1_b.png", "/images/test1/part1/q1_c.png"],
            correct: 0
          },
          {
            id: 2,
            question: "Where's the girl's pen?",
            options: ["/images/test1/part1/q2_a.png", "/images/test1/part1/q2_b.png", "/images/test1/part1/q2_c.png"],
            correct: 2
          },
          {
            id: 3,
            question: "What will the boy do this evening?",
            optionsType: "image",
            options: [
              "/images/test1/part1/q3_a.png",
              "/images/test1/part1/q3_b.png",
              "/images/test1/part1/q3_c.png"
            ],
            correct: 1
          },
          {
            id: 4,
            question: "What animals did they see on their holiday?",
            optionsType: "image",
            options: [
              "/images/test1/part1/q4_a.png",
              "/images/test1/part1/q4_b.png",
              "/images/test1/part1/q4_c.png"
            ],
            correct: 2
          },
          {
            id: 5,
            question: "What does the man want to buy?",
            options: ["/images/test1/part1/q5_a.png", "/images/test1/part1/q5_b.png", "/images/test1/part1/q5_c.png"],
            correct: 2
          }
        ]
      },
      {
        id: 2,
        title: "Part 2",
        description: "Listen to David and Eva talking about a school art lesson. Where did they and their friends go to draw their pictures? For questions 6–10, write a letter A–H next to each person.",
        audio: "/audio/quyen1/test1-2/02_Track_2.mp3",
        type: "matching",
        matchingData: {
          leftHeading: "People",
          rightHeading: "Places",
          example: { id: 0, question: "David", answer: "E" },
          options: ["bank", "café", "castle", "market", "museum", "park", "river", "swimming pool"]
        },
        questions: [
          {
            id: 6,
            question: "Eva",
            options: ["bank", "café", "castle", "market", "museum", "park", "river", "swimming pool"],
            correct: 3
          },
          {
            id: 7,
            question: "Luke",
            options: ["bank", "café", "castle", "market", "museum", "park", "river", "swimming pool"],
            correct: 5
          },
          {
            id: 8,
            question: "Mary",
            options: ["bank", "café", "castle", "market", "museum", "park", "river", "swimming pool"],
            correct: 7
          },
          {
            id: 9,
            question: "Patrick",
            options: ["bank", "café", "castle", "market", "museum", "park", "river", "swimming pool"],
            correct: 0
          },
          {
            id: 10,
            question: "Cristina",
            options: ["bank", "café", "castle", "market", "museum", "park", "river", "swimming pool"],
            correct: 1
          }
        ]
      },
      {
        id: 3,
        title: "Part 3",
        description: "Listen to Dawn talking about her trip to California. For questions 11–15, tick A, B or C. You will hear the conversation twice.",
        audio: "/audio/quyen1/test1-2/03_Track_3.mp3",
        type: "multiple-choice-group",
        example: { question: "Dawn went to California", answer: "B", options: ["last week.", "last month.", "last year."] },
        questions: [
          {
            id: 11,
            question: "Dawn booked the concert ticket",
            options: ["on the internet.", "over the phone.", "by post."],
            correct: 1
          },
          {
            id: 12,
            question: "Dawn's plane ticket cost",
            options: ["£230.", "£300.", "£350."],
            correct: 0
          },
          {
            id: 13,
            question: "Dawn stayed in",
            options: ["a student hotel.", "a family friend's home.", "a campsite."],
            correct: 1
          },
          {
            id: 14,
            question: "Dawn thought the concert was",
            options: ["not very good.", "too short.", "too noisy."],
            correct: 1
          },
          {
            id: 15,
            question: "Most of the time, Dawn was",
            options: ["on the beach.", "on a tour bus.", "in the shops."],
            correct: 2
          }
        ]
      },
      {
        id: 4,
        title: "Part 4",
        description: "You will hear André telling a friend about his tennis lessons. Listen and complete questions 16–20. You will hear the conversation twice.",
        audio: "/audio/quyen1/test1-3/04_Track_4.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "André's tennis lessons",
          items: [
            { id: 0, label: "Teacher's name:", prefix: "", suffix: "", answer: "Paul", isExample: true },
            { id: 16, label: "Day:", prefix: "", suffix: "", correct: 1 },
            { id: 17, label: "Cost:", prefix: "£", suffix: "per hour", correct: 1 },
            { id: 18, label: "At tennis courts in:", prefix: "", suffix: "Street", correct: 1 },
            { id: 19, label: "Starting time:", prefix: "", suffix: "pm", correct: 1 },
            { id: 20, label: "Wear:", prefix: "", suffix: "and T-shirt", correct: 1 }
          ]
        },
        questions: [
          { id: 16, question: "Day:", correct: "Wednesday" },
          { id: 17, question: "Cost:", correct: "12" },
          { id: 18, question: "At tennis courts in:", correct: "GERALD" },
          { id: 19, question: "Starting time:", correct: "6.15" },
          { id: 20, question: "Wear:", correct: ["Shorts", "shorts"], displayCorrect: "Shorts" }
        ]
      },
      {
        id: 5,
        title: "Part 5",
        description: "You will hear someone talking on the radio about a hotel in Ireland. Listen and complete questions 21–25. You will hear the information twice.",
        audio: "/audio/quyen1/test1-3/05_Track_5.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Hotel in Ireland",
          items: [
            { id: 0, label: "Best time to visit:", prefix: "", suffix: "", answer: "June", isExample: true },
            { id: 21, label: "Name:", prefix: "The", suffix: "Hotel", correct: ["White", "white"] },
            { id: 22, label: "Where:", prefix: "", suffix: "Island", correct: ["ACHILL", "Achill"] },
            { id: 23, label: "Hotel first built in the year:", prefix: "", suffix: "", correct: "1859" },
            { id: 24, label: "Number of bedrooms:", prefix: "", suffix: "", correct: "36" },
            { id: 25, label: "Restaurant famous for:", prefix: "", suffix: "", correct: ["Fish", "seafood", "fish", "Seafood"] }
          ]
        },
        questions: [
          { id: 21, question: "Name:", correct: ["White", "white"], displayCorrect: "The White Hotel" },
          { id: 22, question: "Where:", correct: ["ACHILL", "Achill"], displayCorrect: "Achill Island" },
          { id: 23, question: "Hotel first built in the year:", correct: "1859" },
          { id: 24, question: "Number of bedrooms:", correct: "36" },
          { id: 25, question: "Restaurant famous for:", correct: ["Fish", "seafood", "fish", "Seafood"], displayCorrect: "fish / seafood" }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Test 2",
    book: "Quyển 1",
    description: "Cambridge English Key - Practice Test 2",
    parts: [
      {
        id: 1,
        title: "Part 1",
        description: "You will hear five short conversations. Choose the correct answer A, B or C.",
        audio: "/audio/quyen1/test1-2/06_Track_6.mp3",
        questions: [
          {
            id: 1,
            question: "Which day is the man's appointment?",
            options: [
              "/images/test2/part1/q1_a.png",
              "/images/test2/part1/q1_b.png",
              "/images/test2/part1/q1_c.png"
            ],
            optionsType: "image",
            correct: 2
          },
          {
            id: 2,
            question: "What is the woman going to eat?",
            options: [
              "/images/test2/part1/q2_a.png",
              "/images/test2/part1/q2_b.png",
              "/images/test2/part1/q2_c.png"
            ],
            optionsType: "image",
            correct: 1
          },
          {
             id: 3,
             question: "Which train will the woman take?",
             options: [
               "/images/test2/part1/q3_a.png",
               "/images/test2/part1/q3_b.png",
               "/images/test2/part1/q3_c.png"
             ],
             optionsType: "image",
             correct: 1
          },
          {
             id: 4,
             question: "How much did the man pay for the camera?",
             options: [
               "/images/test2/part1/q4_a.png",
               "/images/test2/part1/q4_b.png",
               "/images/test2/part1/q4_c.png"
             ],
             optionsType: "image",
             correct: 1
          },
          {
             id: 5,
             question: "Which race did the girl win?",
             options: [
               "/images/test2/part1/q5_a.png",
               "/images/test2/part1/q5_b.png",
               "/images/test2/part1/q5_c.png"
             ],
             optionsType: "image",
             correct: 0
          }
        ]
      },
      {
        id: 2,
        title: "Part 2",
        description: "Listen to Rosie talking to a friend about places for a party. What is the problem with each place?",
        audio: "/audio/quyen1/test1-2/07_Track_7.mp3",
        type: "matching",
        matchingData: {
          leftHeading: "Places",
          rightHeading: "Problems",
          example: { id: 0, question: "University Hotel", answer: "G" },
          options: ["closed", "cold", "dark", "dirty", "expensive", "full", "old", "small"]
        },
        questions: [
          {
            id: 6,
            question: "Brown's Café",
            options: ["closed", "cold", "dark", "dirty", "expensive", "full", "old", "small"],
            correct: 0
          },
          {
            id: 7,
            question: "Rivers Hotel",
            options: ["closed", "cold", "dark", "dirty", "expensive", "full", "old", "small"],
            correct: 3
          },
          {
            id: 8,
            question: "Bridge Restaurant",
            options: ["closed", "cold", "dark", "dirty", "expensive", "full", "old", "small"],
            correct: 5
          },
          {
             id: 9,
             question: "Garden House",
             options: ["closed", "cold", "dark", "dirty", "expensive", "full", "old", "small"],
             correct: 4
          },
          {
             id: 10,
             question: "Opera Café",
             options: ["closed", "cold", "dark", "dirty", "expensive", "full", "old", "small"],
             correct: 7
          }
        ]
      },
      {
        id: 3,
        title: "Part 3",
        description: "Listen to Joe asking about a French language course. For questions 11–15, tick (✓) A, B or C.",
        audio: "/audio/quyen1/test1-2/08_Track_8.mp3",
        type: "multiple-choice-group",
        example: { question: "Lessons for beginners are on", answer: "B", options: ["Monday.", "Wednesday.", "Friday."] },
        questions: [
          {
            id: 11,
            question: "The best class for Joe is",
            options: ["French Conversation.", "Business French.", "French for Tourists."],
            correct: 2
          },
          {
            id: 12,
            question: "Joe's class begins at",
            options: ["6.30.", "7.15.", "8.30."],
            correct: 0
          },
          {
            id: 13,
            question: "How many other students will there be in Joe's class?",
            options: ["9", "14", "15"],
            correct: 1
          },
          {
            id: 14,
            question: "What should Joe take to his first class?",
            options: ["a dictionary", "a coursebook", "a notebook"],
            correct: 0
          },
          {
             id: 15,
             question: "Joe will pay",
             options: ["£25.", "£145.", "£170."],
             correct: 1
          }
        ]
      },
      {
        id: 4,
        title: "Part 4",
        description: "You will hear a girl asking for information about going to Kendal by bus. Listen and complete questions 16-20. You will hear the conversation twice.",
        audio: "/audio/quyen1/test1-2/09_Track_9.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Bus to Kendal",
          items: [
            { id: 0, label: "First bus leaves at:", prefix: "", suffix: "", answer: "6.45 am", isExample: true },
            { id: 16, label: "Cost of single ticket:", prefix: "£", suffix: "", correct: "18.25" },
            { id: 17, label: "Buy ticket from:", prefix: "", suffix: "", correct: "driver" },
            { id: 18, label: "Address of bus station:", prefix: "", suffix: "Street", correct: "GATELY" },
            { id: 19, label: "next to:", prefix: "", suffix: "", correct: "museum" },
            { id: 20, label: "At bus station, you can buy:", prefix: "", suffix: "and newspapers", correct: "drinks" }
          ]
        },
        questions: [
          { id: 16, question: "Cost of single ticket:", correct: "18.25" },
          { id: 17, question: "Buy ticket from:", correct: "driver" },
          { id: 18, question: "Address of bus station:", correct: "GATELY" },
          { id: 19, question: "next to:", correct: "museum" },
          { id: 20, question: "At bus station, you can buy:", correct: "drinks" }
        ]
      },
      {
        id: 5,
        title: "Part 5",
        description: "You will hear a telephone message about a trip to the theatre. Listen and complete questions 21-25. You will hear the information twice.",
        audio: "/audio/quyen1/test1-2/10_Track_10.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "☎ Telephone message ☎",
          items: [
            { id: 'to', label: "To:", prefix: "", suffix: "", answer: "Jamie", isExample: true },
            { id: 'from', label: "From:", prefix: "", suffix: "", answer: "Michael", isExample: true },
            { id: 21, label: "Name of play:", prefix: "The", suffix: "Party", correct: "Dinner" },
            { id: 22, label: "Date:", prefix: "", suffix: "August", correct: "29" },
            { id: 23, label: "The theatre is opposite:", prefix: "the", suffix: "", correct: "library" },
            { id: 24, label: "Meet Michael at:", prefix: "", suffix: "pm", correct: "6.45" },
            { id: 25, label: "Mobile number:", prefix: "", suffix: "", correct: "077432316" }
          ]
        },
        questions: [
          { id: 21, question: "Name of play:", correct: "Dinner" },
          { id: 22, question: "Date:", correct: "29" },
          { id: 23, question: "The theatre is opposite:", correct: "library" },
          { id: 24, question: "Meet Michael at:", correct: "6.45" },
          { id: 25, question: "Mobile number:", correct: "077432316" }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Test 3",
    book: "Quyển 1",
    description: "Cambridge English Key - Practice Test 3",
    parts: [
      {
        id: 1,
        title: "Part 1",
        description: "You will hear five short conversations. Choose the correct answer A, B or C.",
        audio: "/audio/quyen1/test3-4/01_Track_1.mp3",
        optionsType: "image",
        questions: [
          {
            id: 1,
            question: "Where is the photograph now?",
            options: [
              "/images/test3/part1/q1_a.png",
              "/images/test3/part1/q1_b.png",
              "/images/test3/part1/q1_c.png"
            ],
            correct: 2
          },
          {
            id: 2,
            question: "When can Suzy come to dinner?",
            options: [
              "/images/test3/part1/q2_a.png",
              "/images/test3/part1/q2_b.png",
              "/images/test3/part1/q2_c.png"
            ],
            correct: 0
          },
          {
            id: 3,
            question: "Where did Jane go on holiday?",
            options: [
              "/images/test3/part1/q3_a.png",
              "/images/test3/part1/q3_b.png",
              "/images/test3/part1/q3_c.png"
            ],
            correct: 1
          },
          {
            id: 4,
            question: "What has Maria hurt?",
            options: [
              "/images/test3/part1/q4_a.png",
              "/images/test3/part1/q4_b.png",
              "/images/test3/part1/q4_c.png"
            ],
            correct: 1
          },
          {
            id: 5,
            question: "What time will Clare meet Jack at the station?",
            options: [
              "/images/test3/part1/q5_a.png",
              "/images/test3/part1/q5_b.png",
              "/images/test3/part1/q5_c.png"
            ],
            correct: 2
          }
        ]
      },
      {
        id: 2,
        title: "Part 2",
        description: "Listen to Diana talking to a friend about the days they can do some courses. For questions 6–10, write a letter A–H next to each day. You will hear the conversation twice.",
        audio: "/audio/quyen1/test3-4/02_Track_2.mp3",
        type: "matching",
        matchingData: {
          leftHeading: "Days",
          rightHeading: "Courses",
          example: { id: 0, question: "Monday", answer: "F" },
          options: ["Business Studies", "Computer Studies", "Cooking", "Film Studies", "Geography", "Guitar", "History of Art", "The Night Sky"]
        },
        questions: [
          {
            id: 6,
            question: "Tuesday",
            options: ["Business Studies", "Computer Studies", "Cooking", "Film Studies", "Geography", "Guitar", "History of Art", "The Night Sky"],
            correct: 2
          },
          {
            id: 7,
            question: "Wednesday",
            options: ["Business Studies", "Computer Studies", "Cooking", "Film Studies", "Geography", "Guitar", "History of Art", "The Night Sky"],
            correct: 3
          },
          {
            id: 8,
            question: "Thursday",
            options: ["Business Studies", "Computer Studies", "Cooking", "Film Studies", "Geography", "Guitar", "History of Art", "The Night Sky"],
            correct: 0
          },
          {
            id: 9,
            question: "Friday",
            options: ["Business Studies", "Computer Studies", "Cooking", "Film Studies", "Geography", "Guitar", "History of Art", "The Night Sky"],
            correct: 7
          },
          {
            id: 10,
            question: "Saturday",
            options: ["Business Studies", "Computer Studies", "Cooking", "Film Studies", "Geography", "Guitar", "History of Art", "The Night Sky"],
            correct: 6
          }
        ]
      },
      {
        id: 3,
        title: "Part 3",
        description: "Listen to a girl asking for information about a coach trip to Edinburgh. For questions 11–15, tick (✓) A, B or C.",
        audio: "/audio/quyen1/test3-4/03_Track_3.mp3",
        type: "multiple-choice-group",
        example: { question: "The girl wants to go to Edinburgh", answer: "C", options: ["this morning.", "this afternoon.", "tomorrow morning."] },
        questions: [
          {
            id: 11,
            question: "The girl will pay",
            options: ["£5.", "£7.", "£9."],
            correct: 1
          },
          {
            id: 12,
            question: "The girl will get on the coach",
            options: ["outside the library.", "in front of the Grand Hotel.", "in Bridge Street."],
            correct: 0
          },
          {
            id: 13,
            question: "The coach will be at the girl's stop at",
            options: ["8.45 am.", "8.55 am.", "9.05 am."],
            correct: 1
          },
          {
            id: 14,
            question: "In Edinburgh, the girl will visit",
            options: ["the castle and shops.", "the cathedral and museums.", "the castle and cathedral."],
            correct: 2
          },
          {
            id: 15,
            question: "The whole trip takes",
            options: ["2 hours.", "2¼ hours.", "4¼ hours."],
            correct: 2
          }
        ]
      },
      {
        id: 4,
        title: "Part 4",
        description: "You will hear the manager of a shop leaving a message for a customer. Listen and complete questions 16–20. You will hear the conversation twice.",
        audio: "/audio/quyen1/test3-4/04_Track_4.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Message for Anna",
          items: [
            { id: 0, label: "From:", prefix: "", suffix: "", answer: "Bob Watson", isExample: true },
            { id: 16, label: "Name of shop:", prefix: "", suffix: "", correct: "FORSTERS" },
            { id: "boots", label: "Boots:", prefix: "", suffix: "", answer: "", isExample: true },
            { id: 17, label: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Size:", prefix: "", suffix: "", correct: 1 },
            { id: 18, label: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Colour:", prefix: "", suffix: "", correct: 1 },
            { id: 19, label: "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0Sale price:", prefix: "£", suffix: "", correct: 1 },
            { id: 20, label: "Tomorrow shop closes at:", prefix: "", suffix: "", correct: ["2", "2.00"] }
          ]
        },
        questions: [
          { id: 16, question: "Name of shop:", correct: "FORSTERS" },
          { id: 17, question: "Size:", correct: "38" },
          { id: 18, question: "Colour:", correct: ["Green", "green"], displayCorrect: "Green" },
          { id: 19, question: "Sale price:", correct: ["65", "65.00"], displayCorrect: "65" },
          { id: 20, question: "Tomorrow shop closes at:", correct: ["2", "2.00"], displayCorrect: "2" }
        ]
      },
      {
        id: 5,
        title: "Part 5",
        description: "You will hear a man on the radio giving information about an art class. Listen and complete questions 21–25. You will hear the information twice.",
        audio: "/audio/quyen1/test3-4/05_Track_5.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Art class for families",
          items: [
            { id: 0, label: "Place:", prefix: "", suffix: "", answer: "Hadley College", isExample: true },
            { id: 21, label: "Date:", prefix: "9th", suffix: "", correct: "October" },
            { id: 22, label: "Start time:", prefix: "", suffix: "am", correct: "10.15" },
            { id: 23, label: "Name of special guest:", prefix: "J.P.", suffix: "", correct: "HAYWARD" },
            { id: 24, label: "Price of family ticket:", prefix: "£", suffix: "", correct: "8.70" },
            { id: 25, label: "To book a place, call:", prefix: "", suffix: "", correct: "4497 6390" }
          ]
        },
        questions: [
          { id: 21, question: "Date:", correct: "October" },
          { id: 22, question: "Start time:", correct: "10.15" },
          { id: 23, question: "Name of special guest:", correct: "HAYWARD" },
          { id: 24, question: "Price of family ticket:", correct: "8.70", displayCorrect: "8.7" },
          { id: 25, question: "To book a place, call:", correct: "4497 6390" }
        ]
      }
    ]
  },
  {
    id: 4,
    title: "Test 4",
    book: "Quyển 1",
    description: "Cambridge English Key - Practice Test 4",
    parts: [
      {
        id: 1,
        title: "Part 1",
        description: "You will hear five short conversations. Choose the correct answer A, B or C.",
        audio: "/audio/quyen1/test3-4/06_Track_6.mp3",
        optionsType: "image",
        questions: [
          {
            id: 1,
            question: "What is the man going to take to the repair shop?",
            options: [
              "/images/test4/part1/q1_a.png",
              "/images/test4/part1/q1_b.png",
              "/images/test4/part1/q1_c.png"
            ],
            correct: 0
          },
          {
            id: 2,
            question: "How will Nancy and Joe get to the sports centre?",
            options: [
              "/images/test4/part1/q2_a.png",
              "/images/test4/part1/q2_b.png",
              "/images/test4/part1/q2_c.png"
            ],
            correct: 1
          },
          {
            id: 3,
            question: "How much is the prize for the competition?",
            options: [
              "/images/test4/part1/q3_a.png",
              "/images/test4/part1/q3_b.png",
              "/images/test4/part1/q3_c.png"
            ],
            correct: 1
          },
          {
            id: 4,
            question: "What will the weather be like tomorrow lunchtime?",
            options: [
              "/images/test4/part1/q4_a.png",
              "/images/test4/part1/q4_b.png",
              "/images/test4/part1/q4_c.png"
            ],
            correct: 2
          },
          {
            id: 5,
            question: "What time will they leave home?",
            options: [
              "/images/test4/part1/q5_a.png",
              "/images/test4/part1/q5_b.png",
              "/images/test4/part1/q5_c.png"
            ],
            correct: 1
          }
        ]
      },
      {
        id: 2,
        title: "Part 2",
        description: "Listen to Ben talking to his wife about the clothes in his suitcase. Which clothes will he wear each day? For questions 6–10, write a letter A–H next to each day. You will hear the conversation twice.",
        audio: "/audio/quyen1/test3-4/07_Track_7.mp3",
        type: "matching",
        matchingData: {
          leftHeading: "Days",
          rightHeading: "Clothes",
          example: "0 Sunday = [ D ]",
          options: ["blue shirt", "coat", "jacket", "jeans", "light trousers", "shorts", "suit", "sweater"]
        },
        questions: [
          {
            id: 6,
            question: "Monday",
            options: ["blue shirt", "coat", "jacket", "jeans", "light trousers", "shorts", "suit", "sweater"],
            correct: 6
          },
          {
            id: 7,
            question: "Tuesday",
            options: ["blue shirt", "coat", "jacket", "jeans", "light trousers", "shorts", "suit", "sweater"],
            correct: 4
          },
          {
            id: 8,
            question: "Wednesday",
            options: ["blue shirt", "coat", "jacket", "jeans", "light trousers", "shorts", "suit", "sweater"],
            correct: 1
          },
          {
            id: 9,
            question: "Thursday",
            options: ["blue shirt", "coat", "jacket", "jeans", "light trousers", "shorts", "suit", "sweater"],
            correct: 5
          },
          {
            id: 10,
            question: "Friday",
            options: ["blue shirt", "coat", "jacket", "jeans", "light trousers", "shorts", "suit", "sweater"],
            correct: 0
          }
        ]
      },
      {
        id: 3,
        title: "Part 3",
        description: "Listen to Duncan talking to a friend about a tennis course. For questions 11–15, tick (✓) A, B or C. You will hear the conversation twice.",
        audio: "/audio/quyen1/test3-4/08_Track_8.mp3",
        type: "multiple-choice-group",
        example: { question: "How long was the tennis course?", answer: "C", options: ["one day", "two days", "five days"] },
        questions: [
          {
            id: 11,
            question: "Duncan stayed in a hotel",
            options: ["in a town.", "near the sea.", "in the mountains."],
            correct: 2
          },
          {
            id: 12,
            question: "Duncan's teacher comes from",
            options: ["England.", "France.", "Canada."],
            correct: 2
          },
          {
            id: 13,
            question: "How much did Duncan pay for the course?",
            options: ["£185", "£205", "£265"],
            correct: 1
          },
          {
            id: 14,
            question: "Before the course, Duncan bought himself some tennis",
            options: ["shoes.", "clothes.", "balls."],
            correct: 0
          },
          {
            id: 15,
            question: "On the last evening, there was",
            options: ["a party.", "a film show.", "a tennis match."],
            correct: 0
          }
        ]
      },
      {
        id: 4,
        title: "Part 4",
        description: "You will hear a woman phoning for information about a boat trip. Listen and complete questions 16–20. You will hear the conversation twice.",
        audio: "/audio/quyen1/test3-4/09_Track_9.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Boat trip on the River Dee",
          items: [
            { id: 0, label: "Days of boat trip:", prefix: "", suffix: "", answer: "Friday and Sunday", isExample: true },
            { id: 16, label: "Get on boat at the:", prefix: "", suffix: "", correct: "Bridge" },
            { id: 17, label: "Time boat leaves:", prefix: "", suffix: "pm", correct: "12.15" },
            { id: 18, label: "Boat goes to:", prefix: "", suffix: "", correct: "ALDFORD" },
            { id: 19, label: "On boat, you can buy:", prefix: "drinks and", suffix: "", correct: ["Ice-cream", "ice-cream", "ice cream"] },
            { id: 20, label: "Cost of adult ticket:", prefix: "£", suffix: "", correct: "3.95" }
          ]
        },
        questions: [
          { id: 16, question: "Get on boat at the:", correct: "Bridge" },
          { id: 17, question: "Time boat leaves:", correct: "12.15" },
          { id: 18, question: "Boat goes to:", correct: "ALDFORD" },
          { id: 19, question: "On boat, you can buy:", correct: ["Ice-cream", "ice-cream", "ice cream"], displayCorrect: "Ice-cream" },
          { id: 20, question: "Cost of adult ticket:", correct: "3.95" }
        ]
      },
      {
        id: 5,
        title: "Part 5",
        description: "You will hear a woman giving information on the radio about a theatre school. Listen and complete questions 21–25. You will hear the information twice.",
        audio: "/audio/quyen1/test3-4/10_Track_10.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Children's theatre school",
          items: [
            { id: 0, label: "Name of school:", prefix: "", suffix: "", answer: "Silver Star", isExample: true },
            { id: 21, label: "Cost for children over 14:", prefix: "£", suffix: "per week", correct: "89" },
            { id: 22, label: "Children must take their own:", prefix: "", suffix: "", correct: ["Lunch", "lunch"] },
            { id: 23, label: "There is a show every:", prefix: "", suffix: "", correct: ["Friday", "friday"] },
            { id: 24, label: "The first summer course starts on:", prefix: "21st", suffix: "", correct: ["July", "july"] },
            { id: 25, label: "Phone number:", prefix: "", suffix: "", correct: "8447 6953" }
          ]
        },
        questions: [
          { id: 21, question: "Cost for children over 14:", correct: "89" },
          { id: 22, question: "Children must take their own:", correct: ["Lunch", "lunch"], displayCorrect: "Lunch" },
          { id: 23, question: "There is a show every:", correct: ["Friday", "friday"], displayCorrect: "Friday" },
          { id: 24, question: "The first summer course starts on:", correct: ["July", "july"], displayCorrect: "July" },
          { id: 25, question: "Phone number:", correct: "8447 6953" }
        ]
      }
    ]
  },
  {
    id: 5,
    title: "Test 5",
    book: "Quyển 2",
    description: "Cambridge English Key - Practice Test 1 (Quyển 2)",
    parts: [
      {
        id: 1,
        title: "Part 1",
        description: "You will hear five short conversations. You will hear each conversation twice. There is one question for each conversation. For questions 1–5, put a tick (✓) under the right answer.",
        audio: "/audio/quyen2/test1-2/01_Track_1.mp3",
        optionsType: "image",
        questions: [
          {
            id: 1,
            question: "Which T-shirt does the woman buy?",
            options: [
              "/images/test5/part1/q1_a.png",
              "/images/test5/part1/q1_b.png",
              "/images/test5/part1/q1_c.png"
            ],
            correct: 0
          },
          {
            id: 2,
            question: "When is the girl's swimming lesson next week?",
            options: [
              "/images/test5/part1/q2_a.png",
              "/images/test5/part1/q2_b.png",
              "/images/test5/part1/q2_c.png"
            ],
            correct: 2
          },
          {
            id: 3,
            question: "Which bus stop does the woman need?",
            options: [
              "/images/test5/part1/q3_a.png",
              "/images/test5/part1/q3_b.png",
              "/images/test5/part1/q3_c.png"
            ],
            correct: 0
          },
          {
            id: 4,
            question: "Which is the man's raincoat?",
            options: [
              "/images/test5/part1/q4_a.png",
              "/images/test5/part1/q4_b.png",
              "/images/test5/part1/q4_c.png"
            ],
            correct: 1
          },
          {
            id: 5,
            question: "Which is the office manager?",
            options: [
              "/images/test5/part1/q5_a.png",
              "/images/test5/part1/q5_b.png",
              "/images/test5/part1/q5_c.png"
            ],
            correct: 2
          }
        ]
      },
      {
        id: 2,
        title: "Part 2",
        description: "Listen to Amy and James talking about planning a birthday party. What job is each person going to do? For questions 6–10, write a letter A–H next to each person. You will hear the conversation twice.",
        audio: "/audio/quyen2/test1-2/02_Track_2.mp3",
        type: "matching",
        matchingData: {
          leftHeading: "People",
          rightHeading: "Jobs",
          example: "0 Chris = [ F ]",
          options: ["book the room", "buy a present", "buy party food", "get drinks", "invite guests", "make cake", "plan the music", "put up balloons"]
        },
        questions: [
          { id: 6, question: "Amy", options: ["book the room", "buy a present", "buy party food", "get drinks", "invite guests", "make cake", "plan the music", "put up balloons"], correct: 0 },
          { id: 7, question: "James", options: ["book the room", "buy a present", "buy party food", "get drinks", "invite guests", "make cake", "plan the music", "put up balloons"], correct: 4 },
          { id: 8, question: "Claire", options: ["book the room", "buy a present", "buy party food", "get drinks", "invite guests", "make cake", "plan the music", "put up balloons"], correct: 6 },
          { id: 9, question: "Tom", options: ["book the room", "buy a present", "buy party food", "get drinks", "invite guests", "make cake", "plan the music", "put up balloons"], correct: 3 },
          { id: 10, question: "Jane", options: ["book the room", "buy a present", "buy party food", "get drinks", "invite guests", "make cake", "plan the music", "put up balloons"], correct: 1 }
        ]
      },
      {
        id: 3,
        title: "Part 3",
        description: "Listen to Jessica talking to Frank about a dance class. For questions 11–15, tick (✓) A, B or C. You will hear the conversation twice.",
        audio: "/audio/quyen2/test1-2/03_Track_3.mp3",
        type: "multiple-choice-group",
        example: { question: "What time does the class start?", answer: "B", options: ["7.30 p.m.", "8 p.m.", "9 p.m."] },
        questions: [
          {
            id: 11,
            question: "The class takes",
            options: ["half an hour.", "three quarters of an hour.", "an hour."],
            correct: 1
          },
          {
            id: 12,
            question: "What doesn't Frank need to take?",
            options: ["trainers", "sports clothes", "drink"],
            correct: 1
          },
          {
            id: 13,
            question: "The teacher needs to know",
            options: ["if people are beginners.", "how fit people are.", "people's age."],
            correct: 1
          },
          {
            id: 14,
            question: "The normal price of classes is",
            options: ["£5.", "£6.", "£8."],
            correct: 2
          },
          {
            id: 15,
            question: "They will meet",
            options: ["at Jessica's house.", "at college.", "in the café."],
            correct: 2
          }
        ]
      },
      {
        id: 4,
        title: "Part 4",
        description: "You will hear a woman asking about a tour of a castle. Listen and complete questions 16–20. You will hear the conversation twice.",
        audio: "/audio/quyen2/test1-2/04_Track_4.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Castle Tours",
          items: [
            { id: 0, label: "Time of first tour:", prefix: "", suffix: "", answer: "10 a.m.", isExample: true },
            { id: 16, label: "Tour takes:", prefix: "", suffix: "minutes", correct: "45" },
            { id: 17, label: "Price of a family ticket:", prefix: "£", suffix: "", correct: "22" },
            { id: 18, label: "Ticket includes:", prefix: "soft drink or", suffix: "", correct: ["tea", "Tea"] },
            { id: 19, label: "Name of gardens:", prefix: "", suffix: "", correct: "Highclere" },
            { id: 20, label: "What to see in gardens:", prefix: "800-year-old", suffix: "", correct: "tree" }
          ]
        },
        questions: [
          { id: 16, question: "Tour takes:", correct: "45" },
          { id: 17, question: "Price of a family ticket:", correct: "22" },
          { id: 18, question: "Ticket includes:", correct: ["tea", "Tea"], displayCorrect: "tea" },
          { id: 19, question: "Name of gardens:", correct: "Highclere" },
          { id: 20, question: "What to see in gardens:", correct: "tree" }
        ]
      },
      {
        id: 5,
        title: "Part 5",
        description: "You will hear someone talking on the radio about a cooking programme. Listen and complete questions 21–25. You will hear the information twice.",
        audio: "/audio/quyen2/test1-2/05_Track_5.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "New cooking programme",
          items: [
            { id: 0, label: "Name of programme:", prefix: "", suffix: "", answer: "Cooking for Beginners", isExample: true },
            { id: 21, label: "Day of programme:", prefix: "", suffix: "", correct: ["Friday", "friday"] },
            { id: 22, label: "Start time:", prefix: "", suffix: "p.m.", correct: "3.15" },
            { id: 23, label: "Total number of shows:", prefix: "", suffix: "", correct: "6" },
            { id: 24, label: "Things to cook:", prefix: "cakes, main courses and", suffix: "", correct: ["snacks", "Snacks"] },
            { id: 25, label: "Date of first programme:", prefix: "", suffix: "", correct: "5th July" }
          ]
        },
        questions: [
          { id: 21, question: "Day of programme:", correct: ["Friday", "friday"], displayCorrect: "Friday" },
          { id: 22, question: "Start time:", correct: "3.15" },
          { id: 23, question: "Total number of shows:", correct: "6" },
          { id: 24, question: "Things to cook:", correct: ["snacks", "Snacks"], displayCorrect: "snacks" },
          { id: 25, question: "Date of first programme:", correct: "5th July" }
        ]
      }
    ]
  },
  {
    id: 6,
    title: "Test 6",
    book: "Quyển 2",
    description: "Cambridge English Key - Practice Test 2 (Quyển 2)",
    parts: [
      {
        id: 1,
        title: "Part 1",
        description: "You will hear five short conversations. You will hear each conversation twice. There is one question for each conversation. For questions 1–5, put a tick (✓) under the right answer.",
        audio: "/audio/quyen2/test1-2/06_Track_6.mp3",
        optionsType: "image",
        questions: [
          {
            id: 1,
            question: "What does the woman order?",
            options: [
              "/images/test6/part1/q1_a.png",
              "/images/test6/part1/q1_b.png",
              "/images/test6/part1/q1_c.png"
            ],
            correct: 2
          },
          {
            id: 2,
            question: "What size boots is the woman going to try on next?",
            options: [
              "/images/test6/part1/q2_a.png",
              "/images/test6/part1/q2_b.png",
              "/images/test6/part1/q2_c.png"
            ],
            correct: 1
          },
          {
            id: 3,
            question: "Where will the man get off the bus?",
            options: [
              "/images/test6/part1/q3_a.png",
              "/images/test6/part1/q3_b.png",
              "/images/test6/part1/q3_c.png"
            ],
            correct: 2
          },
          {
            id: 4,
            question: "How many books does the boy want to borrow now?",
            options: [
              "/images/test6/part1/q4_a.png",
              "/images/test6/part1/q4_b.png",
              "/images/test6/part1/q4_c.png"
            ],
            correct: 0
          },
          {
            id: 5,
            question: "What job does Mark's brother do?",
            options: [
              "/images/test6/part1/q5_a.png",
              "/images/test6/part1/q5_b.png",
              "/images/test6/part1/q5_c.png"
            ],
            correct: 0
          }
        ]
      },
      {
        id: 2,
        title: "Part 2",
        description: "Listen to Emily and John talking about activities they did last weekend. Which activity did each person do? For questions 6–10, write a letter A–H next to each person. You will hear the conversation twice.",
        audio: "/audio/quyen2/test1-2/07_Track_7.mp3",
        type: "matching",
        matchingData: {
          leftHeading: "People",
          rightHeading: "Activities",
          example: "0 John = [ C ]",
          options: ["basketball", "cycling", "fishing", "football", "skateboarding", "swimming", "table-tennis", "tennis"]
        },
        questions: [
          { id: 6, question: "Pete", options: ["basketball", "cycling", "fishing", "football", "skateboarding", "swimming", "table-tennis", "tennis"], correct: 1 },
          { id: 7, question: "Emily", options: ["basketball", "cycling", "fishing", "football", "skateboarding", "swimming", "table-tennis", "tennis"], correct: 7 },
          { id: 8, question: "Jenny", options: ["basketball", "cycling", "fishing", "football", "skateboarding", "swimming", "table-tennis", "tennis"], correct: 4 },
          { id: 9, question: "Joe", options: ["basketball", "cycling", "fishing", "football", "skateboarding", "swimming", "table-tennis", "tennis"], correct: 3 },
          { id: 10, question: "Andy", options: ["basketball", "cycling", "fishing", "football", "skateboarding", "swimming", "table-tennis", "tennis"], correct: 6 }
        ]
      },
      {
        id: 3,
        title: "Part 3",
        description: "Listen to Suzy talking to a friend about a new shop. For questions 11–15, tick (✓) A, B or C. You will hear the conversation twice.",
        audio: "/audio/quyen2/test1-2/08_Track_8.mp3",
        type: "multiple-choice-group",
        example: { question: "When did the new shop open?", answer: "C", options: ["today", "yesterday", "last week"] },
        questions: [
          {
            id: 11,
            question: "Where is the new shop?",
            options: ["near the college", "outside the town centre", "opposite the newsagent's"],
            correct: 1
          },
          {
            id: 12,
            question: "In the shop you cannot buy",
            options: ["clothes.", "bags.", "boots."],
            correct: 1
          },
          {
            id: 13,
            question: "What time does the shop close on a Thursday?",
            options: ["6 p.m.", "8 p.m.", "10 p.m."],
            correct: 1
          },
          {
            id: 14,
            question: "What days does the shop open?",
            options: ["Tuesday to Sunday", "every day", "Monday to Friday"],
            correct: 2
          },
          {
            id: 15,
            question: "What should Suzy's friend do if she wants a job?",
            options: ["phone the manager", "go to the shop", "write a letter"],
            correct: 2
          }
        ]
      },
      {
        id: 4,
        title: "Part 4",
        description: "You will hear a man phoning about a flat he wants to rent. Listen and complete questions 16–20. You will hear the conversation twice.",
        audio: "/audio/quyen2/test1-2/09_Track_9.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Flat to rent",
          items: [
            { id: 0, label: "Address of flat:", prefix: "", suffix: "", answer: "25A Green Street", isExample: true },
            { id: 16, label: "Price of flat:", prefix: "£", suffix: "a month", correct: "825" },
            { id: 17, label: "How far from station:", prefix: "", suffix: "minutes on foot", correct: "15" },
            { id: 18, label: "Number of bedrooms:", prefix: "", suffix: "", correct: "2" },
            { id: 19, label: "Furniture in flat:", prefix: "", suffix: "and table", correct: ["Sofa", "sofa"] },
            { id: 20, label: "Day to see flat:", prefix: "", suffix: "", correct: ["Monday", "monday"] }
          ]
        },
        questions: [
          { id: 16, question: "Price of flat:", correct: "825" },
          { id: 17, question: "How far from station:", correct: "15" },
          { id: 18, question: "Number of bedrooms:", correct: "2" },
          { id: 19, question: "Furniture in flat:", correct: ["Sofa", "sofa"], displayCorrect: "Sofa" },
          { id: 20, question: "Day to see flat:", correct: ["Monday", "monday"], displayCorrect: "Monday" }
        ]
      },
      {
        id: 5,
        title: "Part 5",
        description: "You will hear some information for new students about a college. Listen and complete questions 21–25. You will hear the information twice.",
        audio: "/audio/quyen2/test1-2/10_Track_10.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Langley College",
          items: [
            { id: 0, label: "Day classes start:", prefix: "", suffix: "", answer: "Wednesday", isExample: true },
            { id: 21, label: "Cost to join sports centre per year:", prefix: "£", suffix: "", correct: "79" },
            { id: 22, label: "Closing time of café:", prefix: "", suffix: "p.m.", correct: "3" },
            { id: 23, label: "Name of receptionist:", prefix: "Mrs", suffix: "", correct: "Myatt" },
            { id: 24, label: "Phone number:", prefix: "", suffix: "", correct: "99365412704" },
            { id: 25, label: "What to bring to college:", prefix: "", suffix: "", correct: ["photo", "Photo"] }
          ]
        },
        questions: [
          { id: 21, question: "Cost to join sports centre per year:", correct: "79" },
          { id: 22, question: "Closing time of café:", correct: "3" },
          { id: 23, question: "Name of receptionist:", correct: "Myatt" },
          { id: 24, question: "Phone number:", correct: "99365412704" },
          { id: 25, question: "What to bring to college:", correct: ["photo", "Photo"], displayCorrect: "photo" }
        ]
      }
    ]
  },
  {
    id: 7,
    title: "Test 7",
    book: "Quyển 2",
    description: "Cambridge English Key - Practice Test 3 (Quyển 2)",
    parts: [
      {
        id: 1,
        title: "Part 1",
        description: "You will hear five short conversations. You will hear each conversation twice. There is one question for each conversation. For questions 1–5, put a tick (✓) under the right answer.",
        audio: "/audio/quyen2/test3/11_Track_11.mp3",
        optionsType: "image",
        questions: [
          {
            id: 1,
            question: "What instrument is Edward learning to play?",
            options: [
              "/images/test7/part1/q1_a.png",
              "/images/test7/part1/q1_b.png",
              "/images/test7/part1/q1_c.png"
            ],
            correct: 0
          },
          {
            id: 2,
            question: "What will Anna have for breakfast today?",
            options: [
              "/images/test7/part1/q2_a.png",
              "/images/test7/part1/q2_b.png",
              "/images/test7/part1/q2_c.png"
            ],
            correct: 2
          },
          {
            id: 3,
            question: "How much is the watch?",
            options: [
              "/images/test7/part1/q3_a.png",
              "/images/test7/part1/q3_b.png",
              "/images/test7/part1/q3_c.png"
            ],
            correct: 0
          },
          {
            id: 4,
            question: "What does Mandy's brother do?",
            options: [
              "/images/test7/part1/q4_a.png",
              "/images/test7/part1/q4_b.png",
              "/images/test7/part1/q4_c.png"
            ],
            correct: 0
          },
          {
            id: 5,
            question: "Who is coming to stay this weekend?",
            options: [
              "/images/test7/part1/q5_a.png",
              "/images/test7/part1/q5_b.png",
              "/images/test7/part1/q5_c.png"
            ],
            correct: 1
          }
        ]
      },
      {
        id: 2,
        title: "Part 2",
        description: "Listen to the conversation between Sally and her father about a computer course. How many free places are there on the computer course each day? For questions 6–10, write a letter A–H next to each day. You will hear the conversation twice.",
        audio: "/audio/quyen2/test3/12_Track_12.mp3",
        type: "matching",
        matchingData: {
          leftHeading: "DAYS",
          rightHeading: "NUMBER OF FREE PLACES",
          example: "0 Monday = [ D ]",
          options: ["none", "one", "two", "three", "four", "five", "six", "seven"]
        },
        questions: [
          { id: 6, question: "Tuesday", options: ["none", "one", "two", "three", "four", "five", "six", "seven"], correct: 0 },
          { id: 7, question: "Wednesday", options: ["none", "one", "two", "three", "four", "five", "six", "seven"], correct: 5 },
          { id: 8, question: "Thursday", options: ["none", "one", "two", "three", "four", "five", "six", "seven"], correct: 1 },
          { id: 9, question: "Friday", options: ["none", "one", "two", "three", "four", "five", "six", "seven"], correct: 2 },
          { id: 10, question: "Saturday", options: ["none", "one", "two", "three", "four", "five", "six", "seven"], correct: 4 }
        ]
      },
      {
        id: 3,
        title: "Part 3",
        description: "Listen to Stephen talking to Jenny about making some soup. For questions 11–15, tick (✓) A, B or C. You will hear the conversation twice.",
        audio: "/audio/quyen2/test3/13_Track_13.mp3",
        type: "multiple-choice-group",
        example: { question: "To make the soup, Jenny uses", answer: "C", options: ["roast tomatoes.", "fresh tomatoes.", "a can of tomatoes."] },
        questions: [
          {
            id: 11,
            question: "Jenny was shown how to make the soup by",
            options: ["her aunt.", "her friend.", "her mother."],
            correct: 1
          },
          {
            id: 12,
            question: "How has Jenny improved the soup?",
            options: ["She adds less water.", "She makes it thinner.", "She uses bigger cups."],
            correct: 1
          },
          {
            id: 13,
            question: "To make it really good, Jenny adds",
            options: ["milk.", "butter.", "cream."],
            correct: 1
          },
          {
            id: 14,
            question: "How long does the soup take to make?",
            options: ["about 5 minutes", "about 10 minutes", "about 20 minutes"],
            correct: 2
          },
          {
            id: 15,
            question: "What will they eat next?",
            options: ["fruit cake", "pasta", "lemon chicken"],
            correct: 2
          }
        ]
      },
      {
        id: 4,
        title: "Part 4",
        description: "You will hear a boy asking for information about a plant. Listen and complete questions 16–20. You will hear the conversation twice.",
        audio: "/audio/quyen2/test3/14_Track_14.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Plant for Mum",
          items: [
            { id: 0, label: "Name of plant:", prefix: "", suffix: "", answer: "Sweet William", isExample: true },
            { id: 16, label: "Colour of flowers:", prefix: "", suffix: "", correct: ["pink", "Pink"] },
            { id: 17, label: "Season to see flowers:", prefix: "", suffix: "", correct: ["Spring", "spring"] },
            { id: 18, label: "Month to put plant outside:", prefix: "", suffix: "", correct: ["September", "september"] },
            { id: 19, label: "Final size of plant:", prefix: "", suffix: "cm tall", correct: "40" },
            { id: 20, label: "Price of plant today:", prefix: "£", suffix: "", correct: "8" }
          ]
        },
        questions: [
          { id: 16, question: "Colour of flowers:", correct: ["pink", "Pink"], displayCorrect: "pink" },
          { id: 17, question: "Season to see flowers:", correct: ["Spring", "spring"], displayCorrect: "Spring" },
          { id: 18, question: "Month to put plant outside:", correct: ["September", "september"], displayCorrect: "September" },
          { id: 19, question: "Final size of plant:", correct: "40" },
          { id: 20, question: "Price of plant today:", correct: "8" }
        ]
      },
      {
        id: 5,
        title: "Part 5",
        description: "You will hear some information about a day trip. Listen and complete questions 21–25. You will hear the information twice.",
        audio: "/audio/quyen2/test3/15_Track_15.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Day trip to the lake",
          items: [
            { id: 0, label: "Name of lake:", prefix: "", suffix: "", answer: "North Lake", isExample: true },
            { id: 21, label: "Travel there by:", prefix: "", suffix: "", correct: ["train", "Train"] },
            { id: 22, label: "Time to meet:", prefix: "", suffix: "p.m.", correct: "1.15" },
            { id: 23, label: "Activities:", prefix: "walking and", suffix: "", correct: ["fishing", "Fishing"] },
            { id: 24, label: "How much money to take:", prefix: "£", suffix: "", correct: "12" },
            { id: 25, label: "Meet at end of day at:", prefix: "the", suffix: "Hotel", correct: "Aster" }
          ]
        },
        questions: [
          { id: 21, question: "Travel there by:", correct: ["train", "Train"], displayCorrect: "train" },
          { id: 22, question: "Time to meet:", correct: "1.15" },
          { id: 23, question: "Activities:", correct: ["fishing", "Fishing"], displayCorrect: "fishing" },
          { id: 24, question: "How much money to take:", correct: "12" },
          { id: 25, question: "Meet at end of day at:", correct: "Aster" }
        ]
      }
    ]
  },
  {
    id: 8,
    title: "Test 8",
    book: "Quyển 2",
    description: "Cambridge English Key - Practice Test 4 (Quyển 2)",
    parts: [
      {
        id: 1,
        title: "Part 1",
        description: "You will hear five short conversations. You will hear each conversation twice. There is one question for each conversation. For questions 1–5, put a tick (✓) under the right answer.",
        audio: "/audio/quyen2/test4/16_Track_16.mp3",
        optionsType: "image",
        questions: [
          {
            id: 1,
            question: "How will they travel to the pop concert?",
            options: [
              "/images/test8/part1/q1_a.png",
              "/images/test8/part1/q1_b.png",
              "/images/test8/part1/q1_c.png"
            ],
            correct: 0
          },
          {
            id: 2,
            question: "What was the weather like on Beth's holiday?",
            options: [
              "/images/test8/part1/q2_a.png",
              "/images/test8/part1/q2_b.png",
              "/images/test8/part1/q2_c.png"
            ],
            correct: 1
          },
          {
            id: 3,
            question: "Where has the teacher put the dictionaries?",
            options: [
              "/images/test8/part1/q3_a.png",
              "/images/test8/part1/q3_b.png",
              "/images/test8/part1/q3_c.png"
            ],
            correct: 1
          },
          {
            id: 4,
            question: "Where did Paul go running yesterday?",
            options: [
              "/images/test8/part1/q4_a.png",
              "/images/test8/part1/q4_b.png",
              "/images/test8/part1/q4_c.png"
            ],
            correct: 2
          },
          {
            id: 5,
            question: "What does Karen still need to get for the school play?",
            options: [
              "/images/test8/part1/q5_a.png",
              "/images/test8/part1/q5_b.png",
              "/images/test8/part1/q5_c.png"
            ],
            correct: 1
          }
        ]
      },
      {
        id: 2,
        title: "Part 2",
        description: "Listen to Gemma telling a friend about her visits to different countries. What did she like most about each country? For questions 6–10, write a letter A–H next to each country. You will hear the conversation twice.",
        audio: "/audio/quyen2/test4/17_Track_17.mp3",
        type: "matching",
        matchingData: {
          leftHeading: "COUNTRIES",
          rightHeading: "FAVOURITE THINGS",
          example: "0 France = [ H ]",
          options: ["animals", "beach", "countryside", "food", "hotel", "shops", "sport", "weather"]
        },
        questions: [
          { id: 6, question: "Italy", options: ["animals", "beach", "countryside", "food", "hotel", "shops", "sport", "weather"], correct: 5 },
          { id: 7, question: "Mexico", options: ["animals", "beach", "countryside", "food", "hotel", "shops", "sport", "weather"], correct: 3 },
          { id: 8, question: "India", options: ["animals", "beach", "countryside", "food", "hotel", "shops", "sport", "weather"], correct: 2 },
          { id: 9, question: "Australia", options: ["animals", "beach", "countryside", "food", "hotel", "shops", "sport", "weather"], correct: 0 },
          { id: 10, question: "Canada", options: ["animals", "beach", "countryside", "food", "hotel", "shops", "sport", "weather"], correct: 4 }
        ]
      },
      {
        id: 3,
        title: "Part 3",
        description: "Listen to Tony talking to Lisa about a science club competition. For questions 11–15, tick (✓) A, B or C. You will hear the conversation twice.",
        audio: "/audio/quyen2/test4/18_Track_18.mp3",
        type: "multiple-choice-group",
        example: { question: "Tony says the competition is on", answer: "C", options: ["Monday.", "Tuesday.", "Wednesday."] },
        questions: [
          {
            id: 11,
            question: "Which building will the competition be in?",
            options: ["the school", "the town hall", "the university"],
            correct: 1
          },
          {
            id: 12,
            question: "How has the team decided to get there?",
            options: ["They will catch a bus.", "They will walk.", "They will go on the underground."],
            correct: 1
          },
          {
            id: 13,
            question: "The total number of questions in the quiz will be",
            options: ["five.", "fifteen.", "twenty-five."],
            correct: 1
          },
          {
            id: 14,
            question: "Tony's favourite area of science is",
            options: ["biology.", "chemistry.", "physics."],
            correct: 2
          },
          {
            id: 15,
            question: "Winners of the competition get",
            options: ["T-shirts.", "cinema tickets.", "a box of chocolates."],
            correct: 2
          }
        ]
      },
      {
        id: 4,
        title: "Part 4",
        description: "You will hear a girl asking for information about a summer job. Listen and complete questions 16–20. You will hear the conversation twice.",
        audio: "/audio/quyen2/test4/19_Track_19.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Summer holiday job",
          items: [
            { id: 0, label: "Type of job:", prefix: "", suffix: "", answer: "Farm worker", isExample: true },
            { id: 16, label: "Time working day ends:", prefix: "", suffix: "", correct: "2" },
            { id: 17, label: "You need to be:", prefix: "", suffix: "and careful", correct: ["strong", "Strong"] },
            { id: 18, label: "You will earn:", prefix: "£", suffix: "a week", correct: "300" },
            { id: 19, label: "What you must pay for:", prefix: "", suffix: "", correct: ["Bus tickets", "bus tickets"] },
            { id: 20, label: "Date work begins:", prefix: "", suffix: "May", correct: "24th" }
          ]
        },
        questions: [
          { id: 16, question: "Time working day ends:", correct: "2" },
          { id: 17, question: "You need to be:", correct: ["strong", "Strong"], displayCorrect: "strong" },
          { id: 18, question: "You will earn:", correct: "300" },
          { id: 19, question: "What you must pay for:", correct: ["Bus tickets", "bus tickets"], displayCorrect: "Bus tickets" },
          { id: 20, question: "Date work begins:", correct: "24th" }
        ]
      },
      {
        id: 5,
        title: "Part 5",
        description: "You will hear the manager of a cycling club giving some information about a bike race. Listen and complete questions 21–25. You will hear the information twice.",
        audio: "/audio/quyen2/test4/20_Track_20.mp3",
        type: "fill-in-group",
        fillInData: {
          title: "Cardiff Bike Race",
          items: [
            { id: 0, label: "Date of race:", prefix: "", suffix: "", answer: "22nd September", isExample: true },
            { id: 21, label: "Team colour:", prefix: "", suffix: "", correct: ["blue", "Blue"] },
            { id: 22, label: "Number of people per team:", prefix: "", suffix: "", correct: "3" },
            { id: 23, label: "Time of race:", prefix: "", suffix: "a.m.", correct: "8.30" },
            { id: 24, label: "Food at snack place:", prefix: "", suffix: "and drink", correct: ["cake", "Cake"] },
            { id: 25, label: "First prize:", prefix: "a new", suffix: "", correct: ["watch", "Watch"] }
          ]
        },
        questions: [
          { id: 21, question: "Team colour:", correct: ["blue", "Blue"], displayCorrect: "blue" },
          { id: 22, question: "Number of people per team:", correct: "3" },
          { id: 23, question: "Time of race:", correct: "8.30" },
          { id: 24, question: "Food at snack place:", correct: ["cake", "Cake"], displayCorrect: "cake" },
          { id: 25, question: "First prize:", correct: ["watch", "Watch"], displayCorrect: "watch" }
        ]
      }
    ]
  }
];

export default testsData;
