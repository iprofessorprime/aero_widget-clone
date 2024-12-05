import React from "react";
import {
  ContactForm,
  ContactSectionWrapper,
  Input,
  SubmitButton,
  Textarea,
} from "./contactStyles";
import { SectionTitle } from "../portfolioStyles";
import ContactSkeleton from "./skeleton";

const ContactSection = ({ isLoading = true }) => {
  return (
    <ContactSectionWrapper>
      {isLoading ? (
        <ContactSkeleton />
      ) : (
        <>
          <SectionTitle>Contact</SectionTitle>
          <ContactForm>
            <Input type="text" placeholder="Your Name" />
            <Input type="email" placeholder="Your Email" />
            <Textarea placeholder="Your Message"></Textarea>
            <SubmitButton type="submit">Send</SubmitButton>
          </ContactForm>
        </>
      )}
    </ContactSectionWrapper>
  );
};

export default ContactSection;
