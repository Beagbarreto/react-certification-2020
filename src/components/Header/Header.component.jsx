import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Header, LogInIcon, LogOutIcon, LoginContainer, Row } from './Header.styles';
import { ToggleSwitch, LogButton } from '../atoms';
import { SearchBar, SideBar } from '../molecules';

const MainHeader = () => {

  return (
    <Header>
      <Row>
        <Col size={1}>
          <SideBar />
        </Col>
        <Col size={4}>
          <SearchBar />
        </Col>
        <Col size={1}>
          <ToggleSwitch
          />
        </Col>
        <Col size={1}>
          <LogButton />
        </Col>
      </Row>
    </Header>
  );
};

export default MainHeader;
