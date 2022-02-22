import React from 'react';

import Panel from '../../Panel';

import { Container } from './styles';

const ProfilePanel: React.FC = () => {
  return (
    <Panel>
      <Container>
        <div className="profile-cover"></div>
        <img
          src="https://avatars.githubusercontent.com/u/29052049?v=4"
          alt="Avatar"
          className="profile-picture"
        />
        <h1>Douglas Bernardo</h1>
        <h2>Software Engineer @acme</h2>

        <div className="separator"></div>

        <div className="key-value">
          <span className="key">Quem viu seu perfil</span>
          <span className="value">3.269</span>
        </div>
        <div className="key-value">
          <span className="key">Viram sua publicação</span>
          <span className="value">622</span>
        </div>
      </Container>
    </Panel>
  );
};

export default ProfilePanel;
