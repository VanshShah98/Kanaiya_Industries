import { useState } from 'react';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import { TextField, Button, TextareaAutosize, Typography, Container } from '@mui/material';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    requirement: '',
  });
  const [isSending, setIsSending] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSending(true);

    try {
      const response = await fetch('/api/submitForm', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      alert('Thank you for contacting KI. We will surely call you back.');

      // Reset the form fields after successful submission
      setFormData({
        name: '',
        phoneNumber: '',
        requirement: '',
      });
    } catch (error) {
      console.error('Error submitting form:', error);
    } finally {
      setIsSending(false);
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography variant="h4" component="div" color='#209D50' gutterBottom>
          Get in Touch : 
        </Typography>

        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          variant="filled"
          margin="normal"
          fullWidth
          required
        />

        <TextField
          label="Phone Number"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          variant="filled"
          margin="normal"
          fullWidth
          required
          type="number"
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
        />

        <TextareaAutosize
          aria-label="Requirement"
          name="requirement"
          value={formData.requirement}
          onChange={handleChange}
          minRows={3}
          placeholder="Requirement"
          style={{ width: '100%', marginBottom: '20px' }}
        />

        <Button
          type="submit"
          variant='outlined'
          color="primary"
          size="large"
          fullWidth
          disabled={isSending}
        >
          {isSending ? 'Sending...' : 'Submit'}
        </Button>
      </form>
    </Container>
  );
}
