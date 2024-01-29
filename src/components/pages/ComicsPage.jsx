import { Helmet } from 'react-helmet';
import ComicsList from '../comicsList/ComicsList';
import AppBanner from '../appBanner/AppBanner';

const ComicsPage = () => {

  return (
    <>
    <Helmet>
      <meta 
        name='Page with list of our comics'
        content='Comics Page'
      />
      <title>Comics Page</title>
    </Helmet>
      <AppBanner />
      <ComicsList />
    </>
  )
}

export default ComicsPage