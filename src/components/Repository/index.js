import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';

import { Container, Avatar, Header, Name, Description, Stats, Stat, StatCount, Refresh, RefreshText } from './styles';

export default function Repository( { data, onRefresh } ) {
  return (
    <Container>

        <Header>
            <Avatar source={{ uri: data.avatar }} />
            <Name>{ data.name }</Name>
        </Header>
        <Description>{ data.description }</Description>

        <Stats>
            <Stat>
                <Icon name="star" size={16} color="#333"  />
                <StatCount>{ data.stars }</StatCount>
            </Stat>
             
            <Stat>
                <Icon name="code-fork" size={16} color="#333"  />
                <StatCount>{ data.forks }</StatCount>
            </Stat>
        </Stats>

        <Refresh onPress={ onRefresh } >
            <Icon name="refresh" size={16} color="#11998e" />
            <RefreshText>ATUALIZAR</RefreshText>
        </Refresh>
    </Container>
  );
}
