import React from 'react';

export default function Home(props) {
    const { data } = props;
    console.log(data.media_type);

    return (
        <div className="image-container">
            {data.media_type === 'image' ? (
                <img src={data.url} alt="mars" className="bg-image" />
            ) : (
                <iframe
                    src={`${data?.url}&autoplay=1&mute=1&controls=0&showinfo=0&modestbranding=1&iv_load_policy=3&fs=0&disablekb=1&playsinline=1&loop=1`}
                    title={data?.title || 'mars'}
                    className="bg-image"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    frameBorder="0"
                />
            )}
        </div>
    );
}
