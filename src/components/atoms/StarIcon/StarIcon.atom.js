import React from 'react';
import { Button, UnselectedIcon, SelectedIcon } from './LogButton.styles';

const StarIcon = () => {


  return (
    <>
    <section>
      <Button>
        {clicked ? (
          <UnselectedIcon />
        ) : (
          <SelectedIcon />
        )}
      </Button>
    </section>
    </>
  );
};

export default StarIcon;
