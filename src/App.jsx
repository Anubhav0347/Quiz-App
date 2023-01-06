import "./App.css";
import { useEffect, useMemo, useState } from "react";
import Start from "./components/Start";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";

function App() {
  const [username, setUsername] = useState(null);
  const [timeOut, setTimeOut] = useState(false);
  const [questionNumber, setQuestionNumber] = useState(1);
  const [earned, setEarned] = useState("0 Rupees");

  const data = [
    {
      id: 1,
      question: "G-shock is a company that specializes in what type of product?",
      answers: [
        {
          text: "Phone",
          correct: false,
        },
        {
          text: "Watches",
          correct: true,
        },
        {
          text: "Food",
          correct: false,
        },
        {
          text: "Cosmetic",
          correct: false,
        },
      ],
    },
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    {
      id: 3,
      question: "The trident-shaped symbol of Buddhism does not represent",
      answers: [
        {
          text: "Sangha",
          correct: false,
        },
        {
          text: "Buddha",
          correct: false,
        },
        {
          text: "Dharma",
          correct: false,
        },
        {
          text: "Nirvana",
          correct: true,
        },
      ],
    },
    {
      id: 4,
      question: "Who played the character of Hanuman in Mahabharata?",
      answers: [
        {
          text: "Adesh Rachit",
          correct: false,
        },
        {
          text: "Sipu singh",
          correct: false,
        },
        {
          text: "Ram charan",
          correct: false,
        },
        {
          text: "Dara Singh",
          correct: true,
        },
      ],
    },
    {
      id: 5,
      question: "The Battle of Plassey was fought in",
      answers: [
        {
          text: "1757",
          correct: true,
        },
        {
          text: "1788",
          correct: false,
        },
        {
          text: "1789",
          correct: false,
        },
        {
          text: "1690",
          correct: false,
        },
      ],
    },
    {
      id: 6,
      question: "The territory of Porus who offered strong resistance to Alexander was situated between the rivers of",
      answers: [
        {
          text: "Satluj and Beas",
          correct: false,
        },
        {
          text: "Chenab and Jhelum",
          correct: true,
        },
        {
          text: "Ravi and Chenab",
          correct: false,
        },
        {
          text: "ganga and Yamuna",
          correct: false,
        },
      ],
    },
    {
      id: 7,
      question: "Under Akbar, the Mir Bakshi was required to look after",
      answers: [
        {
          text: "military affairs",
          correct: true,
        },
        {
          text: "financial problems",
          correct: false,
        },
        {
          text: "economics",
          correct: false,
        },
        {
          text: "Literature",
          correct: false,
        },
      ],
    },
    {
      id: 8,
      question: "Tripitakas are sacred books of",
      answers: [
        {
          text: "Buddhists",
          correct: true,
        },
        {
          text: "Jains",
          correct: false,
        },
        {
          text: "Hindus",
          correct: false,
        },
        {
          text: "Sikhs",
          correct: false,
        },
      ],
    },
    {
      id: 9,
      question: "The use of Kharoshti in ancient Indian architecture is the result of India's contact with",
      answers: [
        {
          text: "Central asia",
          correct: false,
        },
        {
          text: "iran",
          correct: false,
        },
        {
          text: "China",
          correct: false,
        },
        {
          text: "Greece",
          correct: true,
        },
      ],
    },
    {
      id: 10,
      question: "The treaty of Mangalore was signed between",
      answers: [
        {
          text: "the English East India Company and Haidar Ali",
          correct: false,
        },
        {
          text: "the English East India Company and Tipu Sultan",
          correct: true,
        },
        {
          text: "Haidar Ali and the Zamorin of Calicut",
          correct: false,
        },
        {
          text: "the French East India Company and Tipu Sultan",
          correct: false,
        },
      ],
    },
    {
      id: 11,
      question: "To which professions earlier leaders who struggled for freedom of India mainly belonged",
      answers: [
        {
          text: "Lawyer",
          correct: false,
        },
        {
          text: "Teacher",
          correct: false,
        },
        {
          text: "Journalist",
          correct: false,
        },
        {
          text: "All",
          correct: true,
        },
      ],
    },
    {
      id: 12,
      question: "Todar Mal was associated with",
      answers: [
        {
          text: "Finance",
          correct: true,
        },
        {
          text: "Law",
          correct: false,
        },
        {
          text: "Literature",
          correct: false,
        },
        {
          text: "Dance",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(
    () =>
      [
        { id: 1, amount: "₹ 1000" },
        { id: 2, amount: "₹ 2000" },
        { id: 3, amount: "₹ 5000" },
        { id: 4, amount: "₹ 10000" },
        { id: 5, amount: "₹ 20000" },
        { id: 6, amount: "₹ 40000" },
        { id: 7, amount: "₹ 80000" },
        { id: 8, amount: "₹ 160000" },
        { id: 9, amount: "₹ 320000" },
        { id: 10, amount: "₹ 640000" },
        { id: 11, amount: "₹ 1250000" },
        { id: 12, amount: "₹ 2500000" },
        { id: 13, amount: "₹ 5000000" },
        { id: 14, amount: "₹ 10000000" },
        { id: 15, amount: "₹ 50000000" },
      ].reverse(),
    []
  );

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find((m) => m.id === questionNumber - 1).amount);
  }, [questionNumber, moneyPyramid]);

  return (
    <div className="app">
      {!username ? (
        <Start setUsername={setUsername} />
      ) : (
        <>
          <div className="main">
            {timeOut ? (
              <h1 className="endText">You earned: {earned}</h1>
            ) : (
              <>
                <div className="top">
                  <div>Made by Anubhav</div>
                  <div className="timer">
                    <Timer
                      setTimeOut={setTimeOut}
                      questionNumber={questionNumber}
                    />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                    setTimeOut={setTimeOut}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li
                  className={
                    questionNumber === m.id
                      ? "moneyListItem active"
                      : "moneyListItem"
                  }
                >
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </div>
  );
}

export default App;