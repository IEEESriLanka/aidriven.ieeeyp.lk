import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";
import * as React from "react";

interface ContactFormEmailProps {
  fname: string;
  lname: string;
  email: string;
  comments?: string;
}

export const ContactFormEmail = ({
  fname,
  lname,
  email,
  comments,
}: ContactFormEmailProps) => (
  <Html>
    <Head />
    <Preview>
      New message from {fname} {lname}
    </Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New Contact Form Submission</Heading>
        <Text style={text}>
          You have received a new message from the contact form on your website.
        </Text>
        <Section style={section}>
          <Text style={label}>Name:</Text>
          <Text style={value}>
            {fname} {lname}
          </Text>

          <Text style={label}>Email:</Text>
          <Text style={value}>{email}</Text>

          <Hr style={hr} />

          <Text style={label}>Message:</Text>
          <Text style={paragraph}>{comments || "No comments provided."}</Text>
        </Section>
        <Text style={footer}>Sent via AI Driven SL Website</Text>
      </Container>
    </Body>
  </Html>
);

export default ContactFormEmail;

const main = {
  backgroundColor: "#ffffff",
  fontFamily:
    '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  margin: "0 auto",
  padding: "20px 0 48px",
  maxWidth: "580px",
};

const h1 = {
  color: "#333",
  fontSize: "24px",
  fontWeight: "bold",
  paddingBottom: "20px",
  textAlign: "center" as const,
};

const section = {
  padding: "24px",
  border: "1px solid #e6e6e6",
  borderRadius: "12px",
  backgroundColor: "#fafafa",
};

const text = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  textAlign: "left" as const,
};

const label = {
  color: "#666",
  fontSize: "14px",
  fontWeight: "bold",
  marginBottom: "4px",
  marginTop: "16px",
};

const value = {
  color: "#333",
  fontSize: "16px",
  marginTop: "0",
  marginBottom: "16px",
};

const paragraph = {
  color: "#333",
  fontSize: "16px",
  lineHeight: "24px",
  whiteSpace: "pre-wrap" as const,
};

const hr = {
  borderColor: "#e6e6e6",
  margin: "20px 0",
};

const footer = {
  color: "#8898aa",
  fontSize: "12px",
  marginTop: "24px",
  textAlign: "center" as const,
};
