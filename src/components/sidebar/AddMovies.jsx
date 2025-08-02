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

  return (
    <div className="container">
      <form action="">
        <div className="row">
          <div className="col-12">
            <div className="col-6">
              <label htmlFor="" className="form-label">
                Enter Movie Name
              </label>
              <input type="text" className="form-control" />
            </div>
            <div className="col-6">
              <label htmlFor="">Director Name</label>
              <input type="text" />
            </div>
          </div>
          <div className="col-12">
            <div className="col-6">
              <label htmlFor="">Movie Content</label>
              <textarea name="" id=""></textarea>
            </div>
            <div className="col-6">
              <label htmlFor="">Movie realesed Year</label>
              <input type="year" />
            </div>
          </div>
          <div className="col-12">
            <div className="col-6">
              <label htmlFor="">Choose Languages</label>
              <input type="text" list="lang" />
              <datalist id="lang">
                {langs.map((lang) => {
                  <option value="{lang}">{lang}</option>;
                })}
              </datalist>
            </div>
            <div className="col-6">
              <label htmlFor="">Choose genres</label>
              <input type="text" list="genre" />
              <datalist id="genre">
                {genres.map((genre) => {
                  <option value={genre}>{genre}</option>;
                })}
              </datalist>
            </div>
          </div>
          <div className="col-12">
            <div className="col-6">
              <label htmlFor="">Movie Image</label>
              <input type="file" />
            </div>
            <div className="col-6">
              <label htmlFor=""> Upload Movie Video</label>
              <input type="file" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default AddMovies;
