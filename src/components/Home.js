import React from 'react';
import Cards from './Cards';

const Home = _ => {
    return(
        <>
        <div className="upperCards">
        <Cards colorCode="#FF6663" name="PINK"/>
        <Cards colorCode="#333333" name="GRAY"/>
        <Cards colorCode="#000000" name="BLACK"/>
        <Cards colorCode="#38BB14" name="GREEN"/>
        <Cards colorCode="#C90B0B" name="RED"/>
        </div>
        
        <div className="lowerCards"> 
        <Cards colorCode="#FF8000" name="ORANGE"/>
        <Cards colorCode="#FFF500" name="YELLOW"/>
        <Cards colorCode="#CCCCCC" name="LIGHT GRAY"/>
        <Cards colorCode="#7E41A2" name="PURPLE"/>
        <Cards colorCode="#C14911" name="BROWN"/>
        </div>
       
        </>
    );
}

export default Home;