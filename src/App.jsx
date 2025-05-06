import React, { useEffect, useState } from 'react';
import Home from './components/Home';
import Footer from './components/Footer';
import SideBar from './components/SideBar';
import SettingsIcon from '@mui/icons-material/Settings';

export default function App() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [showModal, setShowModal] = useState(false);

    function handleShowModal() {
        setShowModal(!showModal);
    }

    useEffect(() => {
        async function fetchData() {
            const NASA_API_KEY = import.meta.env.VITE_NASA_API_KEY;
            const url =
                'https://api.nasa.gov/planetary/apod' +
                `?api_key=${NASA_API_KEY}`;

                const today = (new Date()).toDateString()
                const localKey = `NASA-${today}`
                const storedData = localStorage.getItem(localKey)
                if(storedData) {
                  setData(JSON.parse(storedData))
                  console.log('Local');
                  return
                }
                localStorage.clear()

            try {
                const res = await fetch(url);
                const apiData = await res.json();

                localStorage.setItem(localKey, JSON.stringify(apiData))
                setData(apiData);

                console.log('Loaded');
            } catch (error) {
                console.log(error.message);
            }
        }
        fetchData();
    }, []);

    return (
        <>
            {data ? (
                <Home data={data} />
            ) : (
                <div className="loadingState">
                    <SettingsIcon />
                </div>
            )}
            {showModal && <SideBar data={data} handleShowModal={handleShowModal} />}
            {data && <Footer data={data} handleShowModal={handleShowModal} />}
        </>
    );
}
