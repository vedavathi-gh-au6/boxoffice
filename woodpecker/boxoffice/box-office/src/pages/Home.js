import React ,{useState} from 'react'
import MainPageLayout from '../components/MainPageLayout';
import {apiGet} from '../misc/config';
import ShowGrid from '../components/show/ShowGrid';
import ActorGrid from '../components/actor/ActorGrid';
const Home = () => {
    const [input,setinput]=useState('');
    const [results,setResults]=useState(null)
    const [searchOption,setSearchOption]=useState('shows')
    const isShowsSearch=searchOption==='shows';
    const onSearch=()=>{
        apiGet(`/search/${searchOption}?q=${input}`)
        .then(result=>{
            setResults(result)
            console.log(result)
        });
       
    };
    const onInputChange=(ev)=>{
        setinput(ev.target.value);
        console.log(ev.target.value);
    }
    const onKeyDown=(ev)=>{
        if(ev.keyCode===13){
            onSearch()
        }
    };
    const onRadioChange=(ev)=>{
       setSearchOption(ev.target.value)
       console.log(searchOption)
    }
    const renderResults=()=>{
        if(results && results.length===0){
            return <div>No Results</div>
        }
        if(results && results.length>0){
        return results[0].show?(<ShowGrid data={results}/>): (<ActorGrid data={results}/>);   
        }
        return null;

    }
   
    return (
        
          <MainPageLayout>
              <input type="text" placeholder="Search for something" onChange={onInputChange} onKeyDown={onKeyDown} value={input}/>
               <div>
                   <label htmlFor="Shows-search">
                       Shows
                       <input
                        id="Shows-search"
                        type="radio"
                         value="shows" 
                          checked={isShowsSearch}
                           onChange={onRadioChange}
                           />
                   </label>
                   <label htmlFor="Actors-search">
                       Actors
                       <input 
                       id="Actors-search"
                       type="radio" 
                        value="people" 
                        checked={!isShowsSearch} 
                        onChange={onRadioChange}/>
                   </label>
               </div>
              <button type="button" onClick={onSearch}>Search</button>
              {renderResults()}
              </MainPageLayout>
        
    )
}

export default Home

