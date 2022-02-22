import React from 'react';

import Panel from '../../Panel';

import {
  Container,
  Row,
  PostImage,
  Separator,
  Avatar,
  Column,
  LikeIcon,
  CommentIcon,
  ShareIcon,
  SendIcon,
} from './styles';

const FeedPost: React.FC = () => {
  return (
    <Panel>
      <Container>
        <Row className="heading">
          <Avatar src="https://avatars.githubusercontent.com/u/29052049?v=4" alt="Rocketseat" />
          <Column>
            <h3>Douglas Bernardo</h3>
            <h4>Software Engineer</h4>
            <time>1 sem</time>
          </Column>
        </Row>

        <PostImage
          src="https://ik.imagekit.io/rcjzrqiiqm7/Screenshot_from_2022-02-21_20-20-07_AsLIt7tCz.png?ik-sdk-version=javascript-1.4.3&updatedAt=1645485627391"
          alt="Rocketseat Blog"
        />

        <Row className="likes">
          <span className="circle blue" />
          <span className="circle green" />
          <span className="circle red" />
          <span className="number">49</span>
        </Row>

        <Row>
          <Separator />
        </Row>

        <Row className="actions">
          <button>
            <LikeIcon />
            <span>Gostei</span>
          </button>
          <button>
            <CommentIcon />
            <span>Comentar</span>
          </button>
          <button>
            <ShareIcon />
            <span>Compartilhar</span>
          </button>
          <button>
            <SendIcon />
            <span>Enviar</span>
          </button>
        </Row>
      </Container>
    </Panel>
  );
};

export default FeedPost;
