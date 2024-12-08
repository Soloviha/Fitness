import React from 'react';
import { useAppSelector } from '../../providers/redux/hooks';
import ArticleCard from '../ui/ArticleCard';
import styles from '../css/Article.module.css';

export default function ArticlePage(): React.JSX.Element {
  const articles = useAppSelector((state) => state.article.article);

  return (
    <div className={styles.container}>
      <div className="row" style={{ marginTop: 200 }}>
        {articles.map((article) => (
          <div className="col-4" style={{ marginLeft: 140, marginBlock: 10 }} key={article.id}>
            <ArticleCard article={article} />
          </div>
        ))}
      </div>
    </div>
  );
}
