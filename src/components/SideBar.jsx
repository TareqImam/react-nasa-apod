import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

export default function SideBar(props) {
    const { data, handleShowModal } = props;

    return (
        <div className="sidebar">
            <div className="bg-overlay"></div>
            <div className="sidebar-contents">
                <h2>{data?.title}</h2>
                <div className="descriptionContainer">
                    <p className="descriptionTitle">{data?.date}</p>
                    <p>{data?.explanation}</p>
                </div>
                <button onClick={() => handleShowModal()}>
                    <ArrowForwardIcon />
                </button>
            </div>
        </div>
    );
}
