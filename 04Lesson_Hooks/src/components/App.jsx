import { useState, useEffect } from 'react';
import { Button } from "./Button/Button";
import { ImageGallery } from "./ImageGallery/ImageGallery";
import { SearchBar } from "./SearchBar/SearchBar";
import { Loader } from "./Loader/Loader";
import { getAPI, perPage } from '../pixabay-api';
import css from './App.module.css';
import toast, { Toaster } from 'react-hot-toast';

export const App = () => {
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(1);
  const [photos, setPhotos] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isEnd, setIsEnd] = useState(false);

  useEffect(() => {
    if(search === '') return;
    (async () => {
      await fetchImages(search, page);
    })();
    return () => {};
  }, [search, page]);

  const fetchImages = async(search, page) => {
    try{
      setIsLoading(true);
      const fetchedImages = await getAPI(search, page);
      const { hits, totalHits } = fetchedImages;
      console.log(hits, totalHits);

      if(hits.length === 0){
        toast.error(`Sorry, search queried has no matching images.`);
      }
      if(page === 1){
        toast.success(`Found ${totalHits} images!`);
      }
      if(page * perPage >= totalHits){
        setIsEnd(true);
        toast(`We're sorry, but you'ved reached the end of search results.`, {
          icon: '👏',
          style: {
            borderRadius: '10px',
            background: '#333',
            color: '#fff',
          },
        })
      }
      setPhotos(prevState => [...prevState, ...hits]);
    }catch{   setIsError(true);
    }finally{ setIsLoading(false);
    }
  }

  const handleSubmit = e => {
    e.preventDefault();

    const newSearch = e.target.search.value.trim().toLowerCase();
    if(newSearch !== search){
      setSearch(newSearch);
      setPage(1);
      setPhotos([]);
    }
  }
  const handlePage = () => {
    setPage(prevState => prevState + 1);
  }
  return (
    <div className={css.app}>
      <SearchBar onSubmit={handleSubmit}/>
      {photos.length > 0 && <ImageGallery photos={photos}/>}
      {photos.length > 0 && !isEnd && <Button onClick={handlePage}/>}
      {isLoading && <Loader />}
      {isError && toast.error(`An error encountered. Please reload page.`)}
      <Toaster position="top-right" reverseOrder={false} />
      
    </div>
  );
};