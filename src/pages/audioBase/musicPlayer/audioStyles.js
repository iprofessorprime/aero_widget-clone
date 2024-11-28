import styled from "styled-components";

export const AudioPageWrapper = styled.div`
  display: flex;
  // flex-direction: column;
  // align-items: center;
  // justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f0f0;
  font-family: Arial, sans-serif;
`;


export const SideMenuWrapper = styled.div`
  width: 30%;
  background-color: #f0f0f0;
  padding: 15px;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;

  h4{
  font-size: 10px;
}
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  margin: 5px 0;
  background-color: #fff;
  border-radius: 10px;
  cursor: pointer;
  text-align: center;
  transition: background-color 0.3s ease;
  font-size: 10px;

  &:hover {
    background-color: #ddd;
  }
`;


export const Button = styled.button`
  padding: ${({ icon }) => icon ? '5px' : '10px 20px'};
  font-size: 10px;
  cursor: pointer;
  border: none;
  border-radius:${({ icon }) => icon ? '50%' : '5px'} ;
  background-color: ${({ color }) => color ? color : '#007bff'};
  color: #fff;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: ${({ color }) => color ? color + 50 : '#007bff'};
  }
`;

export const AudioListWrapper = styled.div`
  width: 70%;
  background-color: #fff;
  padding: 15px;
  border-right: 1px solid #ddd;
  display: flex;
  flex-direction: column;
`;
export const AudioList = styled.div`
  margin-top: 20px;
  width: 80%;
  max-width: 500px;
`;

export const AudioPlayerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AudioItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const AudioTrack = styled.div`
  display: flex;
  flex-direction: column;
`;
export const VolumeTrack = styled.div`
  display: flex;
  flex-direction: column;
`;
export const AudioItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 10px 0;
  background-color: #fff;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

export const Input = styled.input`
  margin: 10px 0;
`;