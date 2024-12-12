import React, { useState } from 'react';
import { Paper, Button, Box, Grid2 } from '@mui/material';
import { ArrowBackIosNew, ArrowForwardIos } from '@mui/icons-material';
import type { DescCardType } from '../../schemas/descCard.schema';
import DescCard from './DescCard';
import styles from '../css/Lite.module.css';

type DescCardProps = {
  descCard: DescCardType[];
  itemsPerPage: number;
};

export default function LiteVariant({ descCard, itemsPerPage }: DescCardProps): React.JSX.Element {
  const [startIndex, setStartIndex] = useState(0);
  // const itemsPerPage = 4;
  const [fadeOut, setFadeOut] = useState(false);

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handleNext = () => {
    if (startIndex < descCard.length - itemsPerPage) {
      setFadeOut(true);
      setTimeout(() => {
        setStartIndex(startIndex + 1);
        setFadeOut(false);
      }, 300); // Время, соответствующее времени анимации
    }
  };

  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  const handlePrev = () => {
    if (startIndex > 0) {
      setFadeOut(true);
      setTimeout(() => {
        setStartIndex(startIndex - 1);
        setFadeOut(false);
      }, 300);
    }
  };

  return (
    <Paper elevation={0} className={styles.paperContainer}>
      <Grid2 container spacing={2}>
        {descCard.slice(startIndex, startIndex + itemsPerPage).map((el, index) => (
          <Grid2 key={el.id}>
            <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between"
              height="100%"
              position="relative"
            >
              <Box
                className={`${styles.descCardContainer} ${fadeOut ? styles.fadeOut : styles.fadeIn}`}
              >
                <DescCard descCard={el} />
              </Box>
              <Box
                className={`${styles.buttonContainer} ${
                  // eslint-disable-next-line no-nested-ternary
                  index === 0
                    ? styles.buttonContainerStart
                    : index === descCard.slice(startIndex, startIndex + itemsPerPage).length - 1
                      ? styles.buttonContainerEnd
                      : styles.buttonContainerCenter
                }`}
              >
                {index === 0 && (
                  <Button
                    onClick={handlePrev}
                    disabled={startIndex === 0}
                    className={`${styles.navButton} ${styles.navButtonLeft}`}
                  >
                    <ArrowBackIosNew
                      style={{
                        background: 'linear-gradient(to right, #ffae00, #b73ec7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    />
                  </Button>
                )}
                {index === descCard.slice(startIndex, startIndex + itemsPerPage).length - 1 && (
                  <Button
                    onClick={handleNext}
                    disabled={startIndex >= descCard.length - itemsPerPage}
                    className={`${styles.navButton} ${styles.navButtonRight}`}
                  >
                    <ArrowForwardIos
                      style={{
                        background: 'linear-gradient(to right, #ffae00, #b73ec7)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    />
                  </Button>
                )}
              </Box>
            </Box>
          </Grid2>
        ))}
      </Grid2>
    </Paper>
  );
}
