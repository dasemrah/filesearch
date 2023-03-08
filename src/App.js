import React, {useEffect, useState} from "react";
import './App.css';
import Head from "./components/Head";
import Search from "./components/Search";
import ResultsView from "./components/ResultsView";
import {Animation} from "rsuite";
import PanelView from "./components/PanelView";
import PlaceView from "./components/PlaceView";


const App =() => {
    const regex = /[0-9]{4}/g;
    const [name, setName] = useState('');
    const [dir, setDir] = useState('')
    const [groups, setGoups] = useState([])
    const [selected, setSelected] = useState({})
    const [show, setShow] = useState(false)
    const [load, setLoad] = useState(false)
    useEffect(() => {
        console.log(show)
    },[show])

    const backendBaseURL ="http://licavision.com:3001/"
      async function fetchDir(){
        const resp = await fetch(backendBaseURL+'dir')
        return resp.json()
      }
    async function fetchImgs(name){
        const resp = await fetch(backendBaseURL+'find/'+name)
        return resp.json()
      }
      useEffect(() => {
        fetchDir()
        .then(result => {
          console.log(result)
          setDir(result)
        })
      },[])

    useEffect( () => {
        console.log(name)
        if(name.length > 2){
            setLoad(true)
            fetchImgs(name)
                .then(results => {
                    console.log(results)
                    const ids = []
                    results.map(result => {
                        const idnum = result.name.match(regex)[0];
                        const index = ids.findIndex(t => t.id === idnum)
                        if(index > -1){
                            ids[index].imgs.push(result)
                        }else ids.push({id:idnum, imgs: [result]})
                    })
                    console.log(ids)
                    setGoups([])
                    setGoups(ids)
                    setLoad(false)
                })
        }

    },[name])
  return (
   <>
       {
           show ?
           <Animation.Slide in={show} placement={'left'}>
               {(props, ref) => <PanelView setShow={setShow} ref={ref} selected={selected} />}
           </Animation.Slide>
               :
               <div className="App">

                   <Head dir={dir}/>
                   <Search name={name} setName={(text) => setName(text)}/>
                   {
                       load ? <PlaceView/>
                           :<ResultsView
                               groups={groups}
                               selected={selected}
                               setSelected={e => setSelected(e)}
                               setShow={e => setShow(e)}
                           />
                   }
               </div>

       }
   </>
  );
}

export default App;
