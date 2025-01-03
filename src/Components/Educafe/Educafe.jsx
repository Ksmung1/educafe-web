import React, { useState, useEffect, useRef} from "react";
import "./Educafe.css";
import { Link } from "react-router-dom";
import Clock from "./Clock";
import ReactCalendar from "./ReactCalendar";
import Quotes from "../DailyQuotes/Quote";

function Educafe() {
          const slides = [
                    {
                              videoSrc: "./images/studyhall.mp4",
                              content: (
                                        <div className="edu-cafe-pros">
                                                  <h1>Study Hall</h1>
                                                  <p>
                                                            The Study Hall is a unique space, a no-disturbance zone for self-studying and working independently. The hall is equipped with spacious cabins, power backup, ceiling fans, AC, and clean drinking water.
                                                  </p>
                                        </div>
                              ),
                              startTime: 0,
                              endTime: 38,
                    },
                    {
                              videoSrc: "./images/leisure.mp4",
                              content: (

                                        <div className="edu-cafe-pros">
                                                  <h1>Cafeteria</h1>
                                                  <p>
                                                            Food for health, energy, and staying alert. The cafeteria is a self-service restaurant with healthy food, snacks, and light beverages on the counters.
                                                  </p>
                                        </div>
                              ),
                              startTime: 38,
                              endTime: 48,
                    },
                    {
                              videoSrc: "./images/cafe.mp4",
                              content: (
                                        <div className="edu-cafe-pros">
                                                  <h1>Leisure Space</h1>
                                                  <p>
                                                            The leisure area is a block for discussing, chatting, resting, relaxing, and meditation. This area has books, magazines, and newspapers for entrance and competitive examinations.
                                                  </p>
                                        </div>
                              ),
                              startTime: 48,
                              endTime: 58,
                    },
          ];

          const [currentContent, setCurrentContent] = useState(null);
          const videoRef = useRef(null);

          useEffect(() => {
                    const intervalId = setInterval(() => {
                              const currentTime = videoRef.current.currentTime;
                              const currentSlide = slides.find(slide => currentTime >= slide.startTime && currentTime <= slide.endTime);

                              if (currentSlide) {
                                        setCurrentContent(currentSlide.content);
                              } else {
                                        setCurrentContent(null);
                              }
                    }, 1000);

                    return () => clearInterval(intervalId);
          }, [slides]);

          return (
                    <div className="edu-cafe">
                              <div className="heading animated-text">
                                        <h1>edu-cafe</h1>
                                        <Link to='https://focus-acade.netlify.app/'><img src="./images/diamond.gif" alt="" /></Link>
                                        <Link to='/edupage' ><img src="./images/coffee-cup.gif" style={{ marginRight: '120px' }} alt="" /></Link>
                                        <Link to="/image"><img src="./images/kpop.gif" style={{ marginRight: '80px' }} alt="" /></Link>
                                        <Link to="/nightowl"><img src="./images/owl.gif" style={{ marginRight: '40px' }} alt="" /></Link>
                              </div>

                              <div className="datesntime">
                                        <Clock></Clock>
                                        <ReactCalendar />
                              </div>
                              <div className="quote">
                                        <Quotes></Quotes>
                              </div>

                              <h1 style={{ fontSize: '14px', marginBottom: '30px' }}>The perfect study environment with all the latest and modern facilities. A calm environment for aspirants.</h1>
                              <p style={{ fontStyle: 'italic' }}>For those students preparing for UPSC CSE, RBI, NABARD, SEBI, CA, MBA, SSC, Banking, JEE, NEET-UG & PG, NDA, CDS, CAPF, AFCAT, IB ACIO,  School Exams, College Exams, etc.</p>

                              <div>
                                        <video
                                                  ref={videoRef}
                                                  src='/images/educafe.mp4'
                                                  autoPlay={true}
                                                  loop
                                                  muted
                                                  className="backgroundVideo"
                                                  style={{ width: '100%' }}
                                        ></video>
                                        {currentContent && (
                                                  <div>
                                                            {currentContent}
                                                  </div>
                                        )}
                              </div>
                              <div className="motto">
                                        <h5>
                                                  <ul>
                                                            <li>Connect</li>
                                                            <li>Learn</li>
                                                            <li>Succeed</li>
                                                  </ul>
                                        </h5>
                              </div>

                              <div className="edu-cafe-foot">
                                        <div className="contacts">
                                                  <ul>
                                                            <li><a href="https://g.co/kgs/MZwhbe"><img src="./images/map.png" alt="" /></a></li>
                                                            <li><a href="https://wa.me/918974808279"><img src="./images/whatsapp.png" alt="" /></a></li>
                                                            <li><a href="#"><img src="./images/instagram.png" alt="" /></a></li>
                                                            <li><a href="#"><img src="./images/telegram.png" alt="" /></a></li>
                                                  </ul>
                                        </div>
                              </div>

                              <div className="nextj">Made with ❤️ by Nextjourney</div>
                    </div >
          );
}

export default Educafe;
