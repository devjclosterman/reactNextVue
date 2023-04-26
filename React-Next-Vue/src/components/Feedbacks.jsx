import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";





const Feedbacks = () => {
  return (
    <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div className="feedback">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction part. 2</p>
        <h2 className={styles.sectionHeadText}>Fun Facts:</h2>
      </motion.div>
    
       <h1 className={styles.sectionSubText}>What am I doing now?</h1>
       <p>I just started learning Python on 4/25/23</p>
       <p>I will be updating my progress periodically, I have a great mentor so I'm excited!</p>
     <br />
      <h2 className={styles.sectionSubText}>My Hope:</h2>   
        <p>One day I was thinking about how I could give back to the community. 
        I feel blessed that I have the knowledge to build and deploy website's.
         So I want to contribute my part in making the world a better place.
         I will be deploying a volunteer website for my local community.
         Let's say an elder or a disabled person needs help and they live a few blocks away, they can make a request.
        Then a volunteer can accept the request and help the person in need. 
        My team and I were brainstorming and we thought about some features such as
         rides to Doctor's appointments, walking dogs, landscaping, grocery shopping, spend time outside in the park, etc.
         My final goal would to have the app deployed in every city in the United States.
         Please join the team! Offer advice! Let's make the world a better place! 
          </p>
          </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
