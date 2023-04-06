import React, { useState } from 'react';

import {
    CheckBadgeIcon,
    InformationCircleIcon,
    XCircleIcon
} from '@heroicons/react/24/solid'

interface Question {
    question: string;
    img: string;
    answer: boolean;
    explaination: string;

    chosenAnswer: null | boolean;
    answered: boolean;
}

interface Props {
    question: Question;
    index: number;
    showAllAnswers: boolean;
    handleOverallScore: (question) => void;
}

export default function QuestionAnswer(props: Props) {
    const { question, index, showAllAnswers, handleOverallScore } = props;

    const handleAnswer = (answer: boolean) => {
        question.answered = true
        question.chosenAnswer = answer;
        handleOverallScore(question)
    }

    return (
        <div className='grid place-items-center mt-10'>
            <div className="card w-96 bg-neutral text-neutral-content rounded-none">
                <div className="card-body ">
                    <span className='text-slate-500'>
                        Q.{index + 1}
                    </span>
                    <p className='text-slate-200'>{question.question}</p>
                    {question.img != "" &&
                        <div className="grid w-full place-items-center mt-5">
                            <img src={"images/" + question.img} alt="traffic sign" height="200" width="200" />
                        </div>
                    }

                    <div className='divider'></div>
                    <div className="card-actions justify-center">
                        {(!question.answered && !showAllAnswers) ? (
                            <>
                                <button
                                    className="btn pl-10 pr-10"
                                    onClick={() => handleAnswer(true)}>True</button>
                                <button
                                    className="btn pl-10 pr-10"
                                    onClick={() => handleAnswer(false)}>False</button>
                            </>
                        ) : (
                            <>
                                <button className={`btn pl-10 pr-10 ${question.answer === true ? 'btn-success' : ''} ${question.chosenAnswer === true ? 'btn-outline' : ''}`}>True</button>
                                <button className={`btn pl-10 pr-10 ${question.answer === false ? 'btn-error' : ''} ${question.chosenAnswer === false ? 'btn-outline' : ''}`}>False</button>
                            </>
                        )}
                    </div>
                    {question.answered &&
                        <>
                            <div className='divider'></div>
                            {question.answer !== question.chosenAnswer &&
                                <div className='text-error uppercase font-bold'>
                                    <XCircleIcon className='w-5 h-5 inline pb-1' /> Wrong
                                </div>
                            }
                            {question.answer === question.chosenAnswer &&

                                <div className='text-success uppercase font-bold'>
                                    <CheckBadgeIcon className='w-5 h-5 inline pb-1' /> Correct
                                </div>

                            }
                        </>
                    }
                    {(question.explaination && question.explaination.trim().toLowerCase() != "correct") && (showAllAnswers || question.answered) &&
                        <p className='text-slate-400 mt-4 text-info'>
                            <InformationCircleIcon className='w-5 h-5 inline pb-1' /> {question.explaination}
                        </p>
                    }
                </div>
            </div>
        </div>
    );
}
