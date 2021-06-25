import React, {useState} from 'react';
import List from "../List";

import "./AddList.scss"

const AddList = () => {
    const [visi, setState] = useState()

    return (
        <div className="add-list">
            <List
                items={[
                    {
                        className: 'list__add-button',
                        icon: (
                            <svg
                                width="12"
                                height="16"
                                viewBox="0 0 16 16"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M8 1V15"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                                <path
                                    d="M1 8H15"
                                    stroke="black"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        ),
                        name: 'Добавить список',
                    },
                ]}
            />
            <div className="add-list__popup">
                <h1>123</h1>
            </div>
        </div>
    )
};

export default AddList;