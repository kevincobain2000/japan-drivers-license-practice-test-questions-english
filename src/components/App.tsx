import React, { useEffect, useState } from 'react';
import shortid from 'shortid';
import QuestionAnswer from '../elements/QuestionAnswer';
import Fuse from 'fuse.js';

import {
    Cog6ToothIcon,
    HomeIcon,
    MagnifyingGlassIcon,
    CheckBadgeIcon,
    XCircleIcon,
    TrophyIcon
} from '@heroicons/react/24/solid'

export default function App() {
    const [currentMode, setCurrentMode] = useState("dark");
    const [questions, setQuestions] = useState([]);
    const [questionsBackup, setQuestionsBackup] = useState([]);
    const [activeTab, setActiveTab] = useState("questions");
    const [showAllAnswers, setShowAllAnswers] = useState(false);
    const [questionsLimit, setQuestionsLimit] = useState(50);
    const [correctlyAnswered, setCorrectlyAnswered] = useState(0);
    const [incorrectlyAnswered, setIncorrectlyAnswered] = useState(0);

    const searchOptions = {
        keys: ['question'],
        threshold: 0.3
    };

    const updateQuestions = (num: number) => {
        setQuestions(questionsBackup.slice(0, num));
        setCorrectlyAnswered(0);
        setIncorrectlyAnswered(0);
    }

    const handleSearch = (search: string) => {
        search = search.trim()
        if (!search) {
            setQuestions(questionsBackup.slice(0, questionsLimit));
            return
        }
        const fuse = new Fuse(questions, searchOptions);

        const filteredData = fuse.search(search);
        const filteredQuestions: [] = []
        for (let i = 0; i < filteredData.length; i++) {
            filteredQuestions.push(filteredData[i].item)
        }

        setQuestions(filteredQuestions)
    }

    // document when ready
    useEffect(() => {
        const text = document.getElementById('questions').getAttribute('data-questions');

        setQuestionsBackup(JSON.parse(text));

        let questions = JSON.parse(text).slice(0, questionsLimit)
        questions = shuffle(questions)
        setQuestions(questions);
    }, []);

    useEffect(() => {
        const dataTheme = document.documentElement.getAttribute('data-theme');
        if (!dataTheme) {
            // check if dark mode is enabled for browser
            if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
                document.documentElement.setAttribute('data-theme', 'dark');
                setCurrentMode("dark");
            } else {
                document.documentElement.setAttribute('data-theme', 'light');
                setCurrentMode("light");
            }
        }
    }, [])

    const toggleThemeMode = () => {
        const dataTheme = document.documentElement.getAttribute('data-theme');
        if (dataTheme) {
            document.documentElement.setAttribute('data-theme', dataTheme === 'dark' ? 'light' : 'dark');
            setCurrentMode(dataTheme === 'dark' ? 'light' : 'dark');
        }

    }

    const handleOverallScore = (question) => {
        if (question.answer == question.chosenAnswer) {
            setCorrectlyAnswered(correctlyAnswered + 1);
        } else {
            setIncorrectlyAnswered(incorrectlyAnswered + 1);
        }

    }

    const reshuffleQuestions = () => {
        let questions = questionsBackup.slice(0, questionsLimit);
        questions = shuffle(questions);
        setQuestions(questions);
        setCorrectlyAnswered(0);
        setIncorrectlyAnswered(0);
        setActiveTab("questions");
    }
    const shuffle = (questions) => {
        for (let i = questions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [questions[i], questions[j]] = [questions[j], questions[i]];
        }
        return questions;
    }


    return (
        <>
            {activeTab === "questions" &&
                <>
                    {!showAllAnswers &&
                        <div className='grid place-items-center mt-5 sticky top-0 z-50'>
                            <div className="card w-96 bg-base-200 text-neutral-content">
                                <div className="items-center">
                                    <div className="overflow-x-auto">
                                        <table className="table table-compact w-full">
                                            <tbody>
                                                <tr>
                                                    <th className='text-success font-bold'>
                                                        <CheckBadgeIcon className='w-5 h-5 inline' /> Correct
                                                    </th>
                                                    <td className='text-success font-bold'>{correctlyAnswered}</td>
                                                    <td>
                                                        <span className='pl-10 pr-10'>
                                                            <b>{correctlyAnswered + incorrectlyAnswered}</b> of <b>{questions.length}</b> questions
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th className='text-error'>
                                                        <XCircleIcon className='w-5 h-5 inline' /> Wrong
                                                    </th>
                                                    <td className='text-error'>{incorrectlyAnswered}</td>
                                                    <td className='text-slate-500'>
                                                        <span className='pl-10 pr-10'>
                                                        </span>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <th>
                                                        <TrophyIcon className='w-5 h-5 inline' /> Result
                                                    </th>
                                                    <td className='font-bold'>
                                                        {(incorrectlyAnswered > 0 || correctlyAnswered > 0) && (
                                                            Math.round((correctlyAnswered / (correctlyAnswered + incorrectlyAnswered)) * 100) >= 90 ? (
                                                                <span className='text-success'>PASSING</span>
                                                            ) : (
                                                                <span className='text-error'>FAILING</span>
                                                            )
                                                        )}

                                                    </td>
                                                    <td>
                                                        <span className='pl-10 pr-10'>
                                                            {(incorrectlyAnswered > 0 || correctlyAnswered > 0) && (
                                                                <>
                                                                    <div className={`ml-5 radial-progress border-4 ${Math.round((correctlyAnswered / (correctlyAnswered + incorrectlyAnswered)) * 100) >= 90 ? "bg-success text-success-content border-success" : "bg-error text-error-content border-error"}`}
                                                                        style={{ "--value": Math.round((correctlyAnswered / (correctlyAnswered + incorrectlyAnswered)) * 100), "--size": "2.5rem" }}>
                                                                        <small>{Math.round((correctlyAnswered / (correctlyAnswered + incorrectlyAnswered)) * 100)}%</small>
                                                                    </div>
                                                                    <span className='pl-2'>Score</span>
                                                                </>
                                                            )}
                                                        </span>
                                                    </td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }

                    <div className="form-control grid place-items-center text-center mt-5">
                        <label htmlFor="search" className="relative text-gray-400 focus-within:text-gray-600 block">
                            <MagnifyingGlassIcon className="pointer-events-none w-4 h-4 absolute top-1/2 transform -translate-y-1/2 left-3" />
                            <input type="text" placeholder="Filter questions" className="input pl-10 input-sm input-bordered" onChange={(e) => handleSearch(e.target.value)} />
                        </label>
                    </div>

                    {showAllAnswers &&
                        <p className='grid place-items-center text-center mt-5 text-slate-500'>
                            Showing all answers with explainations.
                            <br />
                            User input and score management is disabled.
                        </p>
                    }
                    {questions.map((question, index) => (
                        <QuestionAnswer
                            key={shortid.generate()}
                            question={question}
                            index={index}
                            showAllAnswers={showAllAnswers}
                            handleOverallScore={handleOverallScore} />
                    ))}
                    <div className='grid place-items-center mt-10'></div>
                    <div className='grid place-items-center mt-10'></div>
                    <div className='grid place-items-center mt-10'></div>

                </>
            }
            {activeTab === "settings" &&
                <>
                    <div className='grid place-items-center mt-5 sticky top-0 z-50'>
                        <div className="card w-96 bg-base-200 text-neutral-content rounded-none">
                            <div className="card-body text-success">
                                <h2 className="card-title">
                                    Settings
                                </h2>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Dark Mode</span>
                                        <input
                                            type="checkbox"
                                            onChange={toggleThemeMode}
                                            className="toggle toggle-success"
                                            checked={currentMode === "dark" ? true : false}
                                        />
                                    </label>
                                </div>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text">Number of Questions</span>
                                    </label>
                                    <p className='text-slate-500 text-sm pb-2'>
                                        Learners test has 50 questions, and final test has 100 questions.
                                    </p>
                                    <select
                                        defaultValue={questionsLimit}
                                        className="select select-bordered"
                                        onChange={(e) => {
                                            setQuestionsLimit(parseInt(e.target.value));
                                            updateQuestions(parseInt(e.target.value));
                                            setActiveTab("questions");
                                        }
                                        }
                                    >
                                        <option>10</option>
                                        <option>50</option>
                                        <option>100</option>
                                        <option>1000</option>
                                    </select>
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Show all answers</span>
                                        <input
                                            type="checkbox"
                                            onChange={(e) => {
                                                setShowAllAnswers(e.target.checked);
                                                setActiveTab("questions");
                                            }}
                                            className="toggle toggle-success"
                                            checked={showAllAnswers}
                                        />
                                    </label>
                                </div>
                                <button className='btn btn-warning mt-5' onClick={reshuffleQuestions}>Reshuffle</button>
                            </div>
                        </div>
                    </div>
                </>
            }
            <div className="btm-nav">
                <button className={activeTab == "questions" ? "active" : ""} onClick={() => setActiveTab("questions")}>
                    <HomeIcon className="h-5 w-5" /> Questions
                </button>
                <button className={activeTab == "settings" ? "active" : ""} onClick={() => setActiveTab("settings")}>
                    <Cog6ToothIcon className="h-5 w-5" /> Settings
                </button>
            </div>
        </>
    );
}
