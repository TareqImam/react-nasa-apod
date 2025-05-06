import React from 'react'
import InfoIcon from '@mui/icons-material/Info';

export default function Footer(props) {
  const { showModal, handleShowModal } = props

    return (
        <footer>
            <div>
                <h2>The Mars Landscape</h2>
                <h1>APOD PROJECT</h1>
            </div>
            <button onClick={() => handleShowModal()}>
                <InfoIcon />
            </button>
        </footer>
    );
}
