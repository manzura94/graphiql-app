'use client';

import { Box, Button, Typography, Container } from '@mui/material';
import React from 'react';

function NotFound() {
  return (
    <html>
      <head>
        <title>Graphiql App</title>
        <meta name="description" content="By RNG team"></meta>
      </head>
      <body>
        <Container
          sx={{
            maxWidth: '640px',
            minHeight: '90vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '24px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              maxWidth: '100%',
              width: '100%',
              padding: '24px',
              boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
          >
            <Typography
              sx={{
                textAlign: 'center',
                fontSize: '9rem',
                fontWeight: 'bold',
                color: 'gray',
                marginBottom: '16px',
              }}
              variant="h1"
              component="div"
            >
              404
            </Typography>
            <Typography
              variant="h5"
              component="div"
              sx={{
                textAlign: 'center',
                marginBottom: '20px',
              }}
            >
              Sorry, the page you are looking for does not exist.
            </Typography>

            <Button
              variant="contained"
              color="primary"
              onClick={() => (window.location.href = '/')}
              sx={{
                fontSize: '1rem',
              }}
            >
              return to main page
            </Button>
          </Box>
        </Container>
      </body>
    </html>
  );
}

export default NotFound;