import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './ArticleBlock.css';

const ArticleBlock = () => {
  const { i18n } = useTranslation();
  const [latestArticles, setLatestArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getLatestArticles = async () => {
      try {
        const response = await axios.get(`/api/articles?lang=${i18n.language}`);
        console.log(response.data);  // Log the response data
        setLatestArticles(response.data);
      } catch (error) {
        console.error('Error fetching the latest articles:', error);
        setError('Error fetching the latest articles.');
      } finally {
        setLoading(false);
      }
    };

    getLatestArticles();
  }, [i18n.language]);

  if (loading) {
    return <div>Loading articles...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (latestArticles.length === 0) {
    return <div>No articles found.</div>;
  }

  return (
    <div className="container mt-4">
      <Helmet>
        <title>Latest Articles</title>
        <meta name="description" content="Browse the latest articles on our platform." />
      </Helmet>
      <div className="row">
        {latestArticles.map(article => (
          <div key={article.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <Link to={`/articles/${article.slug}`}>
                {article.image_large && (
                  <img
                    srcSet={`${article.image_thumbnail} 100w, ${article.image_medium} 300w, ${article.image_large} 600w`}
                    sizes="(max-width: 600px) 100vw, (max-width: 900px) 50vw, 33vw"
                    src={article.image_large}
                    alt={article.title}
                    className="card-img-top"
                  />
                )}
              </Link>
              <div className="card-body">
                <h5 className="card-title">
                  <Link to={`/articles/${article.slug}`} className="text-dark">
                    {article.title}
                  </Link>
                </h5>
                <p className="card-text">
                  <small className="text-muted">By {article.author}</small>
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArticleBlock;
