import NewsArticleGrid from '@/components/NewsArticleGrid';
import { NewsArticle } from '@/models/NewsArtile'
import Head from 'next/head';
import { FormEvent, useState } from "react";
import { Alert, Button, Form, Spinner } from 'react-bootstrap';


 const SearchNewsPage = () => {
    const [searchResults, setSearchResults] = useState<NewsArticle[] | null>(null);
    const [searchResultsLoading, setSearchResultsLoading] = useState(false)
    const [searchResultLoadingError, setSearchResultLoadingError] = useState(false)


    async function handleSubmit(e:FormEvent<HTMLFormElement>) {
      e.preventDefault();
      const formData = new FormData(e.target as HTMLFormElement);
      const searchQuery = formData.get("searchQuery")?.toString()?.trim()
      if(searchQuery){
        try {
          setSearchResults(null)
          setSearchResultLoadingError(false)
          setSearchResultsLoading(true)
          const response = await fetch(`/api/search-news?q=${searchQuery}`)
          const articles:NewsArticle[] = await response.json();
          setSearchResults(articles)
        } catch (error) {
          console.log(error)
          setSearchResultLoadingError(true)
        }finally{
          setSearchResultsLoading(false)
        }
      }
    }

  return (
    <>
    <Head>
    <title key={'title'}>Search News</title>
    </Head>
    <main>
        <Alert>
          This is page uses <strong>client-side data fetching</strong> to show fresh data for every search.
          Requests are handled by our backend via <strong>API routes</strong>.
        </Alert>
        <Form onSubmit={handleSubmit}>
          <Form.Group className='mb-3' controlId='search-input'>
            <Form.Label>
              Search Query
            </Form.Label>
            <Form.Control name='searchQuery'
            placeholder='Search'
            />
          </Form.Group>
          <Button type='submit' className='mb-3' disabled={searchResultsLoading}>Search</Button>
        </Form>
        <div className='d-flex flex-column align-items-center'>
        {searchResultsLoading && <Spinner animation='border' />}
        {searchResultLoadingError && <p>Something Went Wrong</p>}
        {searchResults?.length === 0 && <p>Nothing found</p>}
        {searchResults?.length && <NewsArticleGrid articles={searchResults}/>}
        </div>
    </main>
    </>
  )
}
export default SearchNewsPage
