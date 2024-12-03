import styled from "styled-components";

// Contact Section styled components
export const ContactSectionWrapper = styled.section`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin: 0 auto;
`;

export const Input = styled.input`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #1E1E1E;
  color: #FFFFFF;
`;

export const Textarea = styled.textarea`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #1E1E1E;
  color: #FFFFFF;
  min-height: 80px;
`;

export const SubmitButton = styled.button`
  padding: 10px;
  border-radius: 5px;
  border: none;
  background-color: #6200EA;
  color: #FFFFFF;
  cursor: pointer;
`;
