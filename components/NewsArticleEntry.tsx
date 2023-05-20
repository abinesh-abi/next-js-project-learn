import { NewsArticle } from '@/models/NewsArtile'
import Image from 'next/image'
import React from 'react'
import { Card } from 'react-bootstrap'
import placeholderImage from "@/assets/images/newsArticle_placeholder.jpg"
import styles from '@/styles/NewsArticleEntry.module.css'

interface NewsArticleEntryProps{
    article:NewsArticle
}

function NewsArticleEntry({article:{title,description,url,urlToImage}}:NewsArticleEntryProps) {
    const validImageUrl = ( urlToImage?.startsWith("http://") || urlToImage?.startsWith("https://"))?urlToImage : undefined
  return (
    <a href={url}> 
        <Card className='h-100'>
            <Image  
                src={validImageUrl || placeholderImage}
                width={500}
                height={200}
                alt='news article image'
                className={`card-img-top ${styles.image}`}
            />
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