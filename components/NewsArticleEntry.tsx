import { NewsArticle } from '@/models/NewsArtile'
import React from 'react'
import { Card } from 'react-bootstrap'

interface NewsArticleEntryProps{
    article:NewsArticle
}

function NewsArticleEntry({article:{title,description,url,urlToImage}}:NewsArticleEntryProps) {
    const validImageUrl = ( urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://"))?urlToImage : undefined
  return (
    <a href={url}> 
        <Card className='h-100'>
            <Card.Img variant='top' src={validImageUrl} />
            <Card.Body>
                <Card.Title>
                    {title}
                </Card.Title>
                <Card.Text>
                    {description}
                </Card.Text>
            </Card.Body>
        </Card>
    </a>
  )
}

export default NewsArticleEntry