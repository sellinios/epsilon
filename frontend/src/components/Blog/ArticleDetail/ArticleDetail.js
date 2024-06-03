import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

const ArticleDetail = () => {
  const { slug } = useParams();
  const { i18n } = useTranslation();
  const [article, setArticle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const hasImagesInContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    return doc.querySelectorAll('img').length > 0;
  };

  useEffect(() => {
    const getArticle = async () => {
      try {
        console.log(`Fetching article with slug: ${slug} in language: ${i18n.language}`);
        const response = await axios.get(`/api/articles/${slug}?lang=${i18n.language}`);
        setArticle(response.data);
      } catch (err) {
        console.error('Error fetching the article:', err);
        setError(`Error fetching the article: ${err.message}`);
      } finally {
        setLoading(false);
      }
    };

    if (slug) {
      getArticle();
    } else {
      setError('No slug provided.');
      setLoading(false);
    }
  }, [slug, i18n.language]);

  if (loading) {
    return <div className="text-center my-5">Loading...</div>;
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>;
  }

  if (!article) {
    return <div className="alert alert-warning">Article not found.</div>;
  }

  const showThumbnail = !hasImagesInContent(article.content);

  return (
    <div className="container mt-5 article-detail-container">
      <Helmet>
        <title>{article.title}</title>
        <meta name="description" content={article.content.substring(0, 150)} />
        <meta name="author" content={article.author} />
      </Helmet>
      <div className="card">
        <div className="card-body">
          <h1 className="card-title text-center article-detail-title">{article.title}</h1>
          {showThumbnail && article.image_thumbnail && (
            <div className="text-center">
              <img
                src={article.image_thumbnail}
                alt={article.title}
                className="img-fluid rounded mb-4 article-thumbnail"
              />
            </div>
          )}
          <div className="article-detail-content" dangerouslySetInnerHTML={{ __html: article.content }} />
          <div className="text-muted text-right mt-4 article-detail-meta">
            <p>Author: {article.author}</p>
            <p>Published on: {new Date(article.created_at).toLocaleDateString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleDetail;
