import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, Button } from 'reactstrap';
import PropTypes from 'prop-types';
import Container from './Container';

const WorkCard = ({ image, title, text, url }) => (
  <Container>
    <Card>
      <img style={{ width: '318px' }} src={image} alt={title} />
      <CardBody>
        <CardTitle tag="h5">{title}</CardTitle>
        <CardSubtitle tag="h6" className="mb-2 text-muted">
          {text}
        </CardSubtitle>
        <Button color="success" target="_blank" href={url}>
          View
        </Button>
      </CardBody>
    </Card>
  </Container>
);

WorkCard.propTypes = {
  url: PropTypes.string,
  text: PropTypes.string,
  title: PropTypes.string,
  image: PropTypes.string,
};

export default WorkCard;
