import React from 'react'
import { useParams } from "react-router-dom";
import '../style/SingleProduct.css';

export default function SingleProduct({data}) {

    let {id} = useParams();
    id = parseInt(id);
    const shows = data;
    console.log(id,typeof(id));
    console.log("shows",shows);
    const temp = shows.filter((son) => son.show.id === id);
    console.log("temp",temp)
    return (
        <div>
            {temp.map((nir) => {
        return (
          <div className="show-center" key={nir.show.id}>
            <img className="show-photo" src={nir.show.image.medium} alt={nir.show.name} style={{height:"65vh",width:"65%",marginLeft:"3.7rem",marginRight:"2rem"}} />
            <section className="content-prod">
              <h2>{nir.show.name}</h2>
              <br/>
              <h5>Rating: {nir.show.rating.average ? nir.show.rating.average : 8}</h5> 
              <br />
               <p className="description"><b> {nir.show.summary}</b></p> 
               <p>
               <h6>More Details : </h6> 
               <button className="link-detail">
               <a href={nir.show.url}>Here</a>
               </button>
               </p>
            </section>
          </div>
        );
      })}
        </div>            
    )
}