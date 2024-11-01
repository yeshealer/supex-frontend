import { Question } from "../src/types/question";

const data: Question[] = [
  {
    category: "a",
    group: "DP 1",
    id: 101,
    prompt:
      "Concernant le contrôle de l'asthme, parmi les propositions suivantes, lesquelles peuvent être qualifiées d’asthme contrôlé (2 réponses exactes) :",
    answers: [
      {
        id: "a",
        text: "Marie, 15 ans, a réalisé des EFR de contrôle qui trouve un rapport VEMS/CV > 0,7 et un VEMS > 0,8. Elle n’a pas eu de symptômes asthmatiques ces 4 dernières semaines. Elle a consulté trois fois aux urgences cette année pour asthme aigu grave.",
        state: "correct",
      },
      {
        id: "b",
        text: "Louis, 19 ans, a réalisé des EFR de contrôle qui trouve un rapport VEMS/CV > 0,7 et un VEMS > 0,8. Il n’a pas eu de symptômes asthmatiques ces 4 dernières semaines. Il n’est pas limité dans sa vie quotidienne. Il a consulté une fois aux urgences cette année où il a reçu une cure de corticothérapie systémique.",
        state: "wrong",
      },
      {
        id: "c",
        text: "Louise, 25 ans, a réalisé des EFR de contrôle qui trouve un rapport VEMS/CV < 0,7 et un VEMS > 0,8. Elle n’a pas eu de symptômes asthmatiques ces 4 dernières semaines. Elle n’a pas eu de corticothérapie systémique au cours de la dernière année.",
        state: "wrong",
      },
      {
        id: "d",
        text: "Matthieu, 30 ans, a réalisé des EFR de contrôle qui trouve un rapport VEMS/CV > 0,7 et un VEMS > 0,8. Depuis 4 semaines il se plaint d’être limité dans sa vie de tous les jours à cause de son asthme. Il a notamment augmenté la prise de SALBUTAMOL car il est particulièrement essoufflé. Il n’a pas eu de corticothérapie systémique au cours de la dernière année.",
        state: "correct",
      },
      {
        id: "e",
        text: "Caroline, 29 ans, a réalisé des EFR de contrôle qui trouve un rapport VEMS/CV > 0,7 et un VEMS > 0,8. Elle n’a pas eu de symptômes asthmatiques ces 4 dernières semaines. Elle n’a pas reçu de corticothérapie systémique au cours de l’année.",
        state: "wrong",
      },
    ],
  },
  {
    category: "a",
    group: "DP 1",
    id: 102,
    prompt: "Prompt for scenario 2",
    answers: [
      {
        id: "a",
        text: "Answer A for scenario 2",
        state: "correct",
      },
      {
        id: "b",
        text: "Answer B for scenario 2",
        state: "wrong",
      },
    ],
  },
  {
    category: "a",
    group: "DP 1",
    id: 103,
    prompt: "Prompt for scenario 3",
    answers: [
      {
        id: "a",
        text: "Answer A for scenario 3",
        state: "correct",
      },
      {
        id: "b",
        text: "Answer B for scenario 3",
        state: "wrong",
      },
    ],
  },
  {
    category: "a",
    group: "DP 2",
    id: 104,
    prompt: "Prompt for scenario 4",
    answers: [
      {
        id: "a",
        text: "Answer A for scenario 4",
        state: "correct",
      },
      {
        id: "b",
        text: "Answer B for scenario 4",
        state: "wrong",
      },
    ],
  },
  {
    category: "a",
    group: "DP 2",
    id: 105,
    prompt: "Prompt for scenario 5",
    answers: [
      {
        id: "a",
        text: "Answer A for scenario 5",
        state: "correct",
      },
      {
        id: "b",
        text: "Answer B for scenario 5",
        state: "wrong",
      },
    ],
  },
  {
    category: "a",
    group: "Questions isolées",
    id: 106,
    prompt: "Prompt for scenario 6",
    answers: [
      {
        id: "a",
        text: "Answer A for scenario 6",
        state: "correct",
      },
      {
        id: "b",
        text: "Answer B for scenario 6",
        state: "wrong",
      },
    ],
  },
  {
    category: "a",
    group: "Questions isolées",
    id: 107,
    prompt: "Prompt for scenario 7",
    answers: [
      {
        id: "a",
        text: "Answer A for scenario 7",
        state: "correct",
      },
      {
        id: "b",
        text: "Answer B for scenario 7",
        state: "wrong",
      },
    ],
  },
  {
    category: "a",
    group: "Questions isolées",
    id: 108,
    prompt: "Prompt for scenario 8",
    answers: [
      {
        id: "a",
        text: "Answer A for scenario 8",
        state: "correct",
      },
      {
        id: "b",
        text: "Answer B for scenario 8",
        state: "wrong",
      },
    ],
  },
  {
    category: "a",
    group: "Questions isolées",
    id: 109,
    prompt: "Prompt for scenario 9",
    answers: [
      {
        id: "a",
        text: "Answer A for scenario 9",
        state: "correct",
      },
      {
        id: "b",
        text: "Answer B for scenario 9",
        state: "wrong",
      },
    ],
  },
  {
    category: "a",
    group: "Questions isolées",
    id: 110,
    prompt: "Prompt for scenario 10",
    answers: [
      {
        id: "a",
        text: "Answer A for scenario 10",
        state: "correct",
      },
      {
        id: "b",
        text: "Answer B for scenario 10",
        state: "wrong",
      },
    ],
  },
];

export default data;
