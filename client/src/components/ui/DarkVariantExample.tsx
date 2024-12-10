import React from 'react';
import Box from '@mui/material/Box';
// import Carousel from 'react-carousel-mui';
// import DescCard from '../ui/DescCard';
import type { DescCardType } from '../../schemas/descCard.schema';
import styles from '../css/DarkVariantExample.module.css';

type DescCardProps = {
  descCard: DescCardType[];
};

export default function DarkVariantExample({ descCard }: DescCardProps): React.JSX.Element {
  return (
    <Box className={styles.carouselContainer}> 
      
        {/* <Carousel maxContainerWidth={2400} 
          items={descCard}
          itemsPerPage={{
            xs: 2,
            sm: 2,
            tablet: 3,
            md: 3,
            lg: 4,
            xl: 4,
          }}
          itemRenderer={(item) => <DescCard descCard={item} />}
        /> */}
    
    </Box>
  );
}
