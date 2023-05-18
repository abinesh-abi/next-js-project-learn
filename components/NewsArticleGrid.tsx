import { NewsArticle } from '@/models/NewsArtile'
import React from 'react'
import { Col, Row } from 'react-bootstrap'
import NewsArticleEntry from './NewsArticleEntry'

interface NewsArticleGridProps{
    articles:NewsArticle[],
}

export default function NewsArticleGrid({articles}:NewsArticleGridProps) {
  return (
    <Row xs={1} sm={2} xl={3}>
        {articles.map(article=>(
            <Col key={article.url}>
                <NewsArticleEntry article={article} />
            </Col>
        ))}
    </Row>
  )
}
