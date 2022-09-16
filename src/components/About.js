import React from 'react'
import '../style/SingleProduct.css';

export default function About() {
  
  
    return (
        <div className="show-center">
            <img className="show-photo" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mv5bmge0ytixnmqtytmyms00zdjjltkwndctzjnhmte4yzjimjk4xkeyxkfqcgdeqxvymjgyoti4mgatat-v1-1589918053.jpg?crop=0.75xw:1xh;center,top&resize=480:*" alt="Niraj Yadav" style={{height:"65vh",width:"65%",marginLeft:"3.7rem",marginRight:"2rem"}}  />
            <section className="content-prod">
           
              <h2><strong>Niraj kumar Yadav </strong></h2>
             
              <br/>
              <p>
             <b><super>krniraj092002@gmail.com </super></b></p>
              <br />
               <p className="description" ><b>Expert in implementation of each step of the project. </b></p> 
               <p>
               <h6>More Details : </h6> 
               <button className="link-detail">
               <a href="https://www.linkedin.com/in/niraj-yadav-88024a227/">Here</a>
               </button>
               </p>
            </section>
          </div>
    )
}