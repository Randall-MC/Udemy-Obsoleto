import React from 'react';
import { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';


const GifExpertApp = () => {

    const [categories, setCategories] = useState([]);

    return (
      <>
        <h1>Gif Expert App</h1>
        <AddCategory setCategories={setCategories} />
        <hr />
        <section className="gifGrid">
            {
              categories.map( category => (
                  <GifGrid 
                    key ={ category }
                    category ={ category }
                  />
              ))
            }
        </section>
      </>
    );
}

export default GifExpertApp;