import React from 'react';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import type { ArticleType } from '../../schemas/article.schema';
import styles from '../css/Article.module.css';

type ArticleProp = {
  article: ArticleType;
};

export default function ArticleCard({ article }: ArticleProp): React.JSX.Element {
  return (
    <Card variant="outlined" className={styles.article_card}>
      <Box sx={{ p: 2 }}>
        <Stack direction="row" className="article_content">
          <Typography gutterBottom variant="h5" component="div" className={styles.article_title}>
            {article.title}
          </Typography>
        </Stack>

        <Typography
          variant="body2"
          className={styles.article_description}
        >
          {article.desc}
        </Typography>
      </Box>
    </Card>
  );
}
