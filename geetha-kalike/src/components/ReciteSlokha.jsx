import React, { useContext, useEffect, useState, useRef } from 'react';
import { StoreContext } from '../store';


function ReciteSlokha(props) {
    const [state, setstate] = useState({
        data: [],
        mp3: null,
    });

    const [scrollTracker, setScrollTracker] = useState({
        scrollPosition: 0,
        audioTrack: 0,
        multiplier: 0,
    });

    const [playRate, setPlayRate] = useState(1);

    const [tracker, setTracker] = useState(0);
    const { store } = useContext(StoreContext);
    let { slokhaList, selctedSlokha } = store;

    const audioPlayer = useRef(null);

    if (selctedSlokha === undefined) {
        selctedSlokha = slokhaList[0] || {};
    }

    const [currentTrack, setCurrentTrack] = useState(selctedSlokha || {});

    const handleScroll = (e) => {
        if (audioPlayer && audioPlayer.current.currentTime) {
            let appHeight =
                document.querySelector('.sloka-container').offsetHeight - 300;
            let scrollTop = window.scrollY || window.pageYOffset;

            let multiplier = appHeight / audioPlayer.current.duration;
            audioPlayer.current.currentTime = scrollTop / multiplier;

            setScrollTracker({
                ...scrollTracker,
                scrollPosition: scrollTop,
                audioTrack: scrollTop / multiplier,
            });
        }
    };

    useEffect(() => {
        // document.addEventListener('scroll', () => {
        //     console.log('____________');
        // });
        // if($(".current").length == 0) return;
        // var a = $(".current").height();
        // var c = $("#lyrics").height();
        // var d = $(".current").offset().top - $(".current").parent().offset().top;
        // var e = d + (a/2) - (c*1/4);

        window.addEventListener('touchmove', handleScroll);
        return () => {
            window.removeEventListener('touchmove', handleScroll);
        };
    }, []);

    useEffect(() => {
        let data = require('../resources/BG_Dhyana_Shlokha.json');
        let mp3 = require('../resources/BG_Dhyana_Shlokha.mp3');
        if (currentTrack && currentTrack.json_name && currentTrack.mp3_name) {
            data = require('../resources/' + currentTrack.json_name + '.json');
            mp3 = require('../resources/' + currentTrack.mp3_name + '.mp3');
        }
        setstate({
            data: data.data,
            mp3: mp3.default,
        });
        if (audioPlayer && audioPlayer.current.currentTime) {
            let appHeight =
                document.querySelector('.sloka-container').offsetHeight - 300;

            let multiplier = appHeight / audioPlayer.current.duration;

            setScrollTracker({
                ...scrollTracker,
                multiplier,
            });
        }
    }, [currentTrack]);

    const setCurrentTrackFunction = (value) => {
        let { id } = currentTrack || {};
        if (id) {
            if (value === 'prev' && id - 2 >= 0) {
                setCurrentTrack(slokhaList[id - 2]);
            } else if (value === 'next' && id <= slokhaList.length) {
                setCurrentTrack(slokhaList[id]);
            }
        }
    };

    return (
        <div className="sloka-container">

            
            <div
                className="s-description"
                // style={{ height: 100, overflow: 'scroll' }}
                onTouchMove={() => {}}
                onScroll={(e) => {
                    let {
                        offsetHeight,
                        offsetTop,
                        scrollHeight,
                        scrollTop,
                    } = e.target;

                    // offsetHeight = 120
                    // offsetTop = 78
                    console.log(
                        offsetHeight,
                        offsetTop,
                        scrollHeight,
                        scrollTop
                    );
                }}
            >
                {state.data.map((item, index) => {
                    let className = '';
                    if (item.lines && !item.lines[0]) {
                        className = ' divider';
                    }
                    if (
                        tracker >= parseFloat(item.begin) &&
                        tracker <= parseFloat(item.end) &&
                        !item.lines[0]
                    ) {
                        // className += ' current';
                        const scrollView = document.querySelector('#active');

                        if (scrollView)
                            scrollView.scrollIntoView({
                                behavior: 'smooth',
                                block: 'start',
                                inline: 'start',
                            });
                    }
                    return (
                        <div
                            key={index}
                            className={className}
                            onClick={() => {}}
                            id={
                                tracker >= parseFloat(item.begin) &&
                                tracker <= parseFloat(item.end) &&
                                item.lines[0]
                                    ? 'active'
                                    : ''
                            }
                        >
                            <span>{item.lines[0]}</span>
                        </div>
                    );
                })}
            </div>
            <div className="player">
                <div
                    className="prev"
                    onClick={() => setCurrentTrackFunction('prev')}
                >
                    <div style={{ width: '0.75rem' }}>
                        <svg viewBox="0 0 12 12">
                            <path d="M3.5,6 L12,12 L12,0 L3.5,6 Z M0,0 L0,12 L2,12 L2,0 L0,0 L0,0 Z" />
                        </svg>
                    </div>
                </div>
                <audio
                    id="audio-player"
                    ref={audioPlayer}
                    onTimeUpdate={(e) => {
                        let currentTrack = e.target.currentTime;
                        setTracker(currentTrack);
                        let scrollPosition =
                            currentTrack * scrollTracker.multiplier;
                        setScrollTracker({
                            ...scrollTracker,
                            scrollPosition,
                            audioTrack: currentTrack,
                        });
                        // window.scrollTo(0, scrollPosition);
                    }}
                    src={state.mp3}
                    controls
                ></audio>

                <div
                    className="next"
                    onClick={() => setCurrentTrackFunction('next')}
                >
                    <div style={{ width: '0.75rem' }}>
                        <svg viewBox="0 0 12 12">
                            <path d="M0,12 L8.5,6 L0,0 L0,12 L0,12 Z M10,0 L10,12 L12,12 L12,0 L10,0 L10,0 Z" />
                        </svg>
                        
                    </div>
                </div>
                <div
                    className="playrate"
                    // onClick={() => setCurrentTrackFunction('next')}
                >
                    <div>
                        <span className="playicon">{playRate}X</span>
                    </div>

                    <div className="playrate-control">
                        <input
                            className="volume"
                            type="range"
                            value={playRate}
                            min="0.5"
                            max="2"
                            step="0.25"
                            onChange={(e) => {
                                let playratio = e.target.value;
                                setPlayRate(playratio);
                                if (
                                    audioPlayer &&
                                    audioPlayer.current.currentTime
                                ) {
                                    audioPlayer.current.playbackRate = playratio;
                                }
                            }}
                        />
                    </div>
                </div>
            </div>
            <div style={{ height: 50 }}></div>
        </div>
    );
}

export default ReciteSlokha;
