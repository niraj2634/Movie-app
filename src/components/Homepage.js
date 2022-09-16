import React from 'react';
import {Link} from 'react-router-dom';
import '../style/Homepage.css'
import '../App.css'

export default function Homepage({data}) {
 
    return (
        <div className='display'>
            <div className="cocktails-center" >
           
        {data.map(p => {
        if(p.show.image){
          console.log("image", p.show.image)
            return  (
                <article key={p.show.id} className="cocktail">
                
                <div className="img-container">
                  <img src={p.show.image.medium} alt={p.show.name}  style={{height:"100%"}}/>
                </div>
                <div className="cocktail-footer">
                  <div className="product">
                    <h4>{p.show.name}</h4>
                 
                    
                    <h4 className="price">{p.show.rating.average ? p.show.rating.average : 8.00}</h4>
                  </div>
                  <Link
                    to={`/show/${p.show.id}`}
                    className="add-cart"
                    style={{
                      color: "#17252A",
                      background: "#fff",
                      border: "2px solid #17252A",
                    }}
                  >
                   <b> View </b>
                  </Link>
                </div>
              </article>
            )
        }
        //console.log(p?.show?.image?.medium);
       return undefined
      
        })
           }
           </div>
        </div>
    )
}