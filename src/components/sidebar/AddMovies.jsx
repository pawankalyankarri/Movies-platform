import { useRef, useState } from "react";
import "../../styles/sidebar/addMovies.css";
import axios from "axios";

const AddMovies = () => {
  const langs = [
    "English",
    "Hindi",
    "Telugu",
    "Tamil",
    "Kannada",
    "Malayalam",
    "Marathi",
    "Bengali",
    "Punjabi",
    "Gujarati",
    "Urdu",
    "Odia",
    "Assamese",
    "Spanish",
    "French",
    "German",
    "Italian",
    "Russian",
    "Chinese (Mandarin)",
    "Japanese",
    "Korean",
    "Arabic",
    "Turkish",
    "Portuguese",
    "Thai",
    "Vietnamese",
    "Indonesian",
    "Filipino (Tagalog)",
    "Persian (Farsi)",
    "Hebrew",
  ];

  const genres = [
    "Drama",
    "Comedy",
    "Action",
    "Thriller",
    "Horror",
    "Science Fiction (Sci-Fi)",
    "Fantasy",
    "Adventure",
    "Romance",
    "Romantic Comedy (Rom-Com)",
    "Mystery",
    "Crime",
    "Historical",
    "Musical",
    "Documentary",
    "Animation",
    "Western",
    "Psychological",
    "War",
    "Biographical (Biopic)",
  ];



  // let [formData, setFormData] = useState({
  //   mname: "",
  //   dname: "",
  //   mcontent: "",
  //   myear: "",
  //   mlang: "",
  //   mgenre: "",
  //   mimg: null,
  //   mvideo: null,
  // });

  // function handlechange(e) {
  //   let { id, value, files } = e.target;
  //   setFormData((pre) => ({ ...pre, [id]: files ? files[0] : value }));
  // }

  // function sendData(e){
  //   e.preventDefault()
  //   console.log('here i send ')
  //   let data = {
  //     'mname':formData['mname'],
  //     'mdir':formData['dname'],
  //     'mcont':formData['mcontent'],
  //     'myear':formData['myear'],
  //     'mlang':formData['mlang'],
  //     'mtype':formData['mgenre'],
  //     'mimg':formData['mimg'],
  //     'mvideo':formData['mvideo']
  //   }
  //   axios.post('http://127.0.0.1:8000/movie/getmovies',data)
    
  // }

  let mnameref = useRef()
  let mdirref = useRef()
  let mcontref = useRef()
  let myearref = useRef()
  let mlangref = useRef()
  let mtyperef = useRef()
  let mimgref = useRef()
  let mvideoref = useRef()

  const sendData = () => {
    // e.preventDefault()
    let data = {
      mname: mnameref.current.value,
      mdir : mdirref.current.value,
      mcont: mcontref.current.value,
      myear : myearref.current.value,
      mlang : mlangref.current.value,
      mtype : mtyperef.current.value,
      mimg : mimgref.current.files[0],
      mvideo : mvideoref.current.files[0],

    }
    axios.post('http://127.0.0.1:8000/movie/getmovies',data,{
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      }).then((resp)=>{
      console.log(resp)
      console.log('inserted successfully')
    }).catch((err)=>{
      console.log(err)
      console.log('error occured')
    })
  }

  return (
    <div className="container addmovie">
      <form action="" className="addmovie-form" >
        <div className="row">
          <div className="col-6 mt-3">
            <label htmlFor="" className="form-label">
              Enter Movie Name
            </label>
            <input
              type="text"
              className="form-control"
              id="mname"
              // onChange={handlechange}
              ref={mnameref}
            />
          </div>
          <div className="col-6 mt-3">
            <label htmlFor="" className="form-label">
              Director Name
            </label>
            <input
              type="text"
              className="form-control"
              id="dname"
              // onChange={handlechange}
              ref={mdirref}
            />
          </div>

          <div className="col-6 mt-3">
            <label htmlFor="" className="form-label">
              Movie Content
            </label>
            <textarea
              name=""
              id="mcontent"
              className="form-control"
              // onChange={handlechange}
              ref={mcontref}
            ></textarea>
          </div>
          <div className="col-6 mt-3">
            <label htmlFor="" className="form-label">
              Movie realesed Year
            </label>
            <input
              type="number"
              className="form-control"
              id="myear"
              // onChange={handlechange}
              ref={myearref}
            />
          </div>

          <div className="col-6 mt-3">
            <label htmlFor="" className="form-label">
              Choose Languages
            </label>
            <input
              type="text"
              list="lang"
              className="form-control"
              id="mlang"
              // onChange={handlechange}
              ref={mlangref}
            />
            <datalist id="lang">
              {langs.map((lang) => {
                <option key={lang} value="{lang}"/>;
              })}
            </datalist>
          </div>
          <div className="col-6 mt-3">
            <label htmlFor="" className="form-label">
              Choose genres
            </label>
            <input
              type="text"
              list="genre"
              className="form-control"
              id="mgenre"
              // onChange={handlechange}
              ref={mtyperef}
            />
            <datalist id="genre">
              {genres.map((genre) => {
                <option key={genre} value={genre}/>;
              })}
            </datalist>
          </div>

          <div className="col-6 mt-3">
            <label htmlFor="" className="form-label">
              Movie Image
            </label>
            <input
              type="file"
              className="form-control"
              id="mimg"
              // onChange={handlechange}
              ref={mimgref}
            />
          </div>
          <div className="col-6 mt-3">
            <label htmlFor="" className="form-label">
              Upload Movie Video
            </label>
            <input
              type="file"
              className="form-control"
              id="mvideo"
              ref={mvideoref}
              // onChange={handlechange}
            />
          </div>
          <div className="col-6 mt-3">
            <div className="col-auto">
              <button className="btn btn-success" onClick={sendData}>
                Add Moive
              </button>
              {/* <input type="sumbit" className="btn btn-success" value="submit" /> */}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMovies;
