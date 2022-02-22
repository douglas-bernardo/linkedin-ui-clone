import React from 'react';

import { Container, MessageIcon, ProfileCircle, SearchInput } from './styles';

const MobileHeader: React.FC = () => {
  return (
      <Container>
          <ProfileCircle src='https://avatars.githubusercontent.com/u/29052049?v=4' />
          <SearchInput placeholder='Pesquisar' />
          <MessageIcon />
      </Container>
  );
}

export default MobileHeader;