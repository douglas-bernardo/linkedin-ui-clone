import React from 'react';

import {
  Container,
  Wrapper,
  LinkedInIcon,
  SearchInput,
  HomeIcon,
  NotificationsIcon,
  ProfileCircle,
  CareDownIcon,
  MyNetworkIcon,
  JobsIcon,
  MessageIcon,
} from './styles';

const DesktopHeader: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <div className="left">
          <LinkedInIcon />
          <SearchInput placeholder='Pesquisar' />
        </div>

        <div className="right">
          <nav>
            <button className="active">
              <HomeIcon className='active' />
              <span>Inicio</span>
            </button>
            <button>
              <MyNetworkIcon />
              <span>Minha rede</span>
            </button>
            <button>
              <JobsIcon />
              <span>Vagas</span>
            </button>
            <button>
              <MessageIcon />
              <span>Mensagens</span>
            </button>
            <button>
              <NotificationsIcon />
              <span>Notificações</span>
            </button>
            <button>
              <ProfileCircle src='https://avatars.githubusercontent.com/u/29052049?v=4' />
              <span>
                Eu <CareDownIcon />
              </span>
            </button>
          </nav>
        </div>
      </Wrapper>
    </Container>
  );
}

export default DesktopHeader;