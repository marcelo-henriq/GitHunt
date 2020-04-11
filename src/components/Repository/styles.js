import styled from 'styled-components/native';

export const Container = styled.View`
  padding: 20px;
  border-radius: 4px;
  background: #fff;
  margin-bottom: 15px;

`;

export const Header = styled.View`
  flex-direction: row;
  margin-left: -5px;
  align-items: center;
`;

export const Avatar = styled.Image`
margin-right: 5px;
  width: 32px;
  height: 32px;
  border-radius: 16px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #333;
`; 

export const Description = styled.Text.attrs({
  numberOfLines: 2,
})`
  color: #666;
  margin-top: 5px;
  line-height: 20px;
`; 

export const Stats = styled.View`
  flex-direction: row;
  margin-top: 15px;
`; 

export const Stat = styled.View`
  flex-direction: row;
  margin-right: 15px;
  align-items: center;
`; 

export const StatCount = styled.Text`
  margin-left: 6px;
`; 

export const Refresh = styled.TouchableOpacity`
  margin-top: 20px;
  flex-direction: row;
  width: 30%;
`;

export const RefreshText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: #11998e;
  margin-left: 5px;
`;