// pages/index.tsx

import React, { useState } from 'react';
import { TextField, Button, TextareaAutosize, Typography, Container } from '@mui/material';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phoneNumber: '',
    requirement: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

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
    }
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Typography className='underline' variant="h4" component="div" color='#209D50' gutterBottom>
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
          sx={{ color: 'blue' }}
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
          inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} // Restrict input to numbers
          sx={{ color: 'green' }}
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
        >
          Submit
        </Button>
      </form>
    </Container>
  );
};

export default Form;
