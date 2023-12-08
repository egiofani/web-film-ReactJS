import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

import { getTrendingDay, getTrendingWeek, getMovie } from '../api'
import { useEffect } from 'react';

const Content = () => {
    // Untuk menampung data dari API
    const [ListMovieTranding, setListMovieTranding] = useState([]);
    const [activeTab, setActiveTab] = useState('day');

    // mengambil dari api
    useEffect(() => {
        if (activeTab === 'day') {
            getTrendingDay().then(result => {
                setListMovieTranding(result);
            });
        } else if (activeTab === 'week') {
            getTrendingWeek().then(result => {
                setListMovieTranding(result);
            });
        }

    }, [activeTab])

    const handleTabChange = tab => {
        setActiveTab(tab);
    };

    //   Memuat komponen API
    const setListMovie = () => {
        return ListMovieTranding.map((movie, i) => {
            return (
                // <Col lg={2} md={4} xs={6}>
                <div className='film-wrapper p-1 bg-white' key={i}>
                    <div className='cover-film'>
                        <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="slider image" />
                    </div>
                    <div className='p-2'>
                        <div className='judul'>
                            {movie.title}
                        </div>
                        <div className='tanggal'>
                            {movie.realise_date}
                        </div>
                    </div>
                </div>

                // </Col>
            )
        })
    }

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 6,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1680,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 5,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1545,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 770,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]
    };


    return (
        <Container  >
            <div className="text-heading mb-3 text-white flex gap-3" id='trend'>
                <h3>Trending</h3>
                <button className={`btn text-white ${activeTab === 'day' ? 'active' : ''}`} onClick={() => handleTabChange('day')}>
                    Today
                </button>
                <button className={`btn text-white ${activeTab === 'week' ? 'active' : ''}`} onClick={() => handleTabChange('week')}>
                    Week
                </button>
            </div>
            <div className='px-5 m-auto'>
                <div className=''>
                    <Slider {...settings}>
                        {ListMovieTranding.map((movie, i) => {
                            return (
                                <div className='film-wrapper p-1 ' key={i}>
                                    <div className='cover-film'>
                                        <img src={`${process.env.REACT_APP_BASEIMGURL}/${movie.poster_path}`} alt="slider image" />
                                    </div>
                                    <div className='p-2'>
                                        <div className='judul'>
                                            {movie.title}
                                        </div>
                                        <div className='tanggal'>
                                            {movie.release_date}
                                        </div>
                                    </div>
                                </div>
                            );
                        })
                        }
                    </Slider>
                </div>
            </div>


        </Container>
    );
}

export default Content;
