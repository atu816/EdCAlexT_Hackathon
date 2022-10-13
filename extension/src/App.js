import React, {useState, useEffect} from 'react'

function App({isDisabled}) {

const [data, setData] = useState(resources);
const [isDisabled, setisDisabled] = useState(false);
const [data, setData] = useState();

useEffect( () => {
  fetch('https://whatever/api')
  .then(res => res.json())
  .then(data => console.log(data))
  const dataSet = data

  data.map( obj => {
    obj
  })

}, [isDisabled]) // dependancies array


setData(oldData => {...oldData, isDisabled: !oldData.isDisabled})



  const styles = {
    backgroundColor: "black"
  }
  const styles2 = {
    backgroundColor: "white"
  }




  

  return (
    <>
      <div style={isDisabled ? styles : styles2}></div>
      <main>this is the body</main>
      <footer>this is the footer</footer>
    </>
  );
}

export default App;
