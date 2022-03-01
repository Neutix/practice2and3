import {isCorrectAnswer, randomQuestion} from "./questions";
import {BrowserRouter, Link, Route, Routes, useNavigate} from "react-router-dom";
import React, {useState, useContext} from "react";

export const QuestionContext = React.createContext({randomQuestion})

export function FrontPage({correctAnswers, questionsAnswered, setQuestionsAnswered, setCorrectAnswers}) {
    return <div>
        <div>
            <h1>QuizGame</h1>
            <div data-testid={"status"}>You have answered {correctAnswers} of {questionsAnswered} correctly</div>
            <ul>
                <Link to={"/question"}>
                    <button>Ny Quiz</button>
                </Link>
            </ul>
        </div>
        <div>
            <ul>
                <button onClick={() => {
                    setQuestionsAnswered(q => q - questionsAnswered);
                    setCorrectAnswers(q => q - correctAnswers)
                }}
                >Reset
                </button>
            </ul>
        </div>
    </div>
}

export function ShowQuestion({setCorrectAnswers, setQuestionsAnswered}) {
    function handleAnswer(answer) {
        setQuestionsAnswered(q => q + 1)
        if (isCorrectAnswer(question, answer)) {
            setCorrectAnswers(q => q + 1);
            navigate("/answer/correct");
        } else {
            navigate("/answer/wrong")
        }
    }

    const navigate = useNavigate();
    const {randomQuestion} = useContext(QuestionContext);
    const [question] = useState(randomQuestion());
    return <div>
        <h1>{question.question}</h1>
        {Object.keys(question.answers)
            .filter(a => question.answers[a])
            .map(a => <div key={a} data-testid={a}>
                <button onClick={() => handleAnswer(a)}>{question.answers[a]}</button>
            </div>)}
    </div>
}

function ShowAnswer() {
    return <div>
        <Routes>
            <Route path={"correct"} element={<h1>Correct!</h1>}/>
            <Route path={"wrong"} element={<h1>Wrong!</h1>}/>
        </Routes>
        <div><Link to={"/"}>
            <button>Show score</button>
        </Link></div>
        <div><Link to={"/question"}>
            <button>New question</button>
        </Link></div>
    </div>
}

export function Application() {
    const [questionsAnswered, setQuestionsAnswered] = useState(0);
    const [correctAnswers, setCorrectAnswers] = useState(0);
    return (
        <Routes>
            <Route path="/" element={<FrontPage questionsAnswered={questionsAnswered} correctAnswers={correctAnswers}
                                                setQuestionsAnswered={setQuestionsAnswered}
                                                setCorrectAnswers={setCorrectAnswers}/>}/>
            <Route path="/question" element={<ShowQuestion setQuestionsAnswered={setQuestionsAnswered}
                                                           setCorrectAnswers={setCorrectAnswers}/>}/>
            <Route path="/answer/*" element={<ShowAnswer/>}/>
        </Routes>
    )

}
