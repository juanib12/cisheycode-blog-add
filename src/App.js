import './App.css';
import axios from 'axios';
import {useState, useEffect} from 'react'
 
function App() {

  const [articulo, setArticulo] = useState({
    user: "",
    avatar: "",
    image: "",
    description: "",
    createtime: "",
    title: "",
    resume: "",
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setArticulo({
      ...articulo,
      [name]: value,
    })
  }

  const createPost = () => {
    axios.post("https://blog-server-82an.onrender.com/articulos", articulo)
    .then((res) => {
      alert("SE AGREGO")
    }).catch((err) => {
      console.log(err)
    })
  }

  return (
    <section className='home bd-grid'>
      <div className='form'>
        <div className='form-data'>
          <input placeholder='Usuario' type="text" name='user' onChange={handleChange}/>
          <input placeholder='Avatar' type="text" name='avatar' onChange={handleChange}/>
          <input placeholder='Image' type="text" name='image' onChange={handleChange}/>
          <input placeholder='Title' type="text" name='title' onChange={handleChange}/>
          <input placeholder='Description' type="text" name='description' onChange={handleChange}/>
          <input placeholder='Resume' type="text" name='resume' onChange={handleChange}/>
          <input placeholder='Createtime' type="text" name='createtime' onChange={handleChange}/>
          <button onClick={createPost()}>Agregar</button>
        </div>
      </div>
    </section>
  );
}

export default App;
