import React from 'react'
import styled from 'styled-components'
import { Button } from '../audioStyles';
const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  `;
const MusicPlayerHeader = ({setIsModalOpen}) => {
  return (
    <Container>
      <div>Audio</div>
      <Button onClick={() => setIsModalOpen(true)}>Add Audio 📤</Button>
    </Container>
  )
}

export default MusicPlayerHeader