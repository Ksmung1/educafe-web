import React, { useState, useEffect } from "react";

const quotes = {
          quote1: "The only way to do great work is to love what you do. - Steve Jobs",
          quote2: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
          quote3: "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
          quote4: "Believe you can and you're halfway there. - Theodore Roosevelt",
          quote5: "In three words I can sum up everything I've learned about life: it goes on. - Robert Frost",
          quote6: "Do not wait to strike till the iron is hot, but make it hot by striking. - William Butler Yeats",
          quote7: "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
          quote8: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
          quote9: "The best way to predict the future is to create it. - Peter Drucker",
          quote10: "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
          quote11: "It always seems impossible until it's done. - Nelson Mandela",
          quote12: "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
          quote13: "Strive not to be a success, but rather to be of value. - Albert Einstein",
          quote14: "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
          quote15: "A journey of a thousand miles begins with a single step. - Lao Tzu",
          quote16: "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
          quote17: "It's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
          quote18: "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
          quote19: "You miss 100% of the shots you don't take. - Wayne Gretzky",
          quote20: "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
          quote21: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
          quote22: "The best way to predict the future is to create it. - Peter Drucker",
          quote23: "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
          quote24: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
          quote25: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
          quote26: "Life is 10% what happens to us and 90% how we react to it. - Charles R. Swindoll",
          quote27: "Success usually comes to those who are too busy to be looking for it. - Henry David Thoreau",
          quote28: "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
          quote29: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
          quote30: "The only way to do great work is to love what you do. - Steve Jobs",
          quote31: "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
          quote32: "Success is not in what you have, but who you are. - Bo Bennett",
          quote33: "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
          quote34: "Success is not just about making money. It's about making a difference. - Unknown",
          quote35: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
          quote36: "Your work is going to fill a large part of your life, and the only way to be truly satisfied is to do what you believe is great work. And the only way to do great work is to love what you do. - Steve Jobs",
          quote37: "I find that the harder I work, the more luck I seem to have. - Thomas Jefferson",
          quote38: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
          quote39: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. - Booker T. Washington",
          quote40: "Your life does not get better by chance, it gets better by change. - Jim Rohn",
          quote41: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
          quote42: "It's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
          quote43: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
          quote44: "The best way to predict the future is to create it. - Peter Drucker",
          quote45: "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
          quote46: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
          quote47: "The only way to do great work is to love what you do. - Steve Jobs",
          quote48: "It always seems impossible until it's done. - Nelson Mandela",
          quote49: "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
          quote50: "Strive not to be a success, but rather to be of value. - Albert Einstein",
          quote51: "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
          quote52: "A journey of a thousand miles begins with a single step. - Lao Tzu",
          quote53: "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
          quote54: "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
          quote55: "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
          quote56: "You miss 100% of the shots you don't take. - Wayne Gretzky",
          quote57: "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
          quote58: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. - Booker T. Washington",
          quote59: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
          quote60: "Your life does not get better by chance, it gets better by change. - Jim Rohn",
          quote61: "Don't be pushed around by the fears in your mind. Be led by the dreams in your heart. - Roy T. Bennett",
          quote62: "It's not the years in your life that count. It's the life in your years. - Abraham Lincoln",
          quote63: "The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt",
          quote64: "The best way to predict the future is to create it. - Peter Drucker",
          quote65: "Success is walking from failure to failure with no loss of enthusiasm. - Winston Churchill",
          quote66: "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
          quote67: "The only way to do great work is to love what you do. - Steve Jobs",
          quote68: "It always seems impossible until it's done. - Nelson Mandela",
          quote69: "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
          quote70: "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
          quote71: "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
          quote72: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
          quote73: "Your life does not get better by chance, it gets better by change. - Jim Rohn",
          quote74: "Success is a state of mind. If you want success, start thinking of yourself as a success. - Joyce Brothers",
          quote75: "Success is not how high you have climbed, but how you make a positive difference to the world. - Roy T. Bennett",
          quote76: "Success is a journey, not a destination. - Ben Sweetland",
          quote77: "Your time is limited, so don't waste it living someone else's life. - Steve Jobs",
          quote78: "Believe you can and you're halfway there. - Theodore Roosevelt",
          quote79: "Success is liking yourself, liking what you do, and liking how you do it. - Maya Angelou",
          quote80: "Opportunities don't happen. You create them. - Chris Grosser",
          quote81: "Success is not in what you have, but who you are. - Bo Bennett",
          quote82: "Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill",
          quote83: "The only way to do great work is to love what you do. - Steve Jobs",
          quote84: "It always seems impossible until it's done. - Nelson Mandela",
          quote85: "Don't watch the clock; do what it does. Keep going. - Sam Levenson",
          quote86: "Strive not to be a success, but rather to be of value. - Albert Einstein",
          quote87: "You are never too old to set another goal or to dream a new dream. - C.S. Lewis",
          quote88: "A journey of a thousand miles begins with a single step. - Lao Tzu",
          quote89: "What you get by achieving your goals is not as important as what you become by achieving your goals. - Zig Ziglar",
          quote90: "It's not whether you get knocked down, it's whether you get up. - Vince Lombardi",
          quote91: "Success is stumbling from failure to failure with no loss of enthusiasm. - Winston S. Churchill",
          quote92: "You miss 100% of the shots you don't take. - Wayne Gretzky",
          quote93: "The only place where success comes before work is in the dictionary. - Vidal Sassoon",
          quote94: "Success is to be measured not so much by the position that one has reached in life as by the obstacles which he has overcome. - Booker T. Washington",
          quote95: "The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort",
          quote96: "Your life does not get better by chance, it gets better by change. - Jim Rohn",
          quote97: "The only way to achieve the impossible is to believe it is possible. - Charles Kingsleigh",
          quote98: "The road to success and the road to failure are almost exactly the same. - Colin R. Davis",
          quote99: "Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful. - Albert Schweitzer",
          quote100: "Your life does not get better by chance, it gets better by change. - Jim Rohn",

};




function Quote() {
          const [currentQuote, setCurrentQuote] = useState("The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it. - Jordan Belfort");
          const [quoteIndex, setQuoteIndex] = useState(1); // Initial quote index
          useEffect(() => {
                    const updateQuote = () => {
                        const nextIndex = (quoteIndex % 100) + 1;
                        const selectedQuoteKey = `quote${nextIndex}`;
                        setCurrentQuote(quotes[selectedQuoteKey]);
                        setQuoteIndex(nextIndex);
                    };
                
                    setTimeout(updateQuote, 30000);  // 1 hour in milliseconds
                }, [quoteIndex]);  // Add `quoteIndex` as a dependency
                

          return (
                    <div>
                              <p style={{ backgroundColor: 'white', padding: "10px", color: 'black' }}>{currentQuote}</p>
                    </div>
          );
}

export default Quote;
