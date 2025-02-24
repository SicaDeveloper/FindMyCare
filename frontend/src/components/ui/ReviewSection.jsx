import PropTypes from 'prop-types';
import { 
  Box, 
  Container, 
  Typography, 
  Card, 
  CardContent, 
  Rating, 
  Stack 
} from '@mui/material';

const defaultReviews = [
  {
    id: 1,
    userName: "John Doe",
    rating: 4.5,
    content: "Amazing service!",
    date: "March 2024"
  },
];

const ReviewSection = ({ reviews = defaultReviews }) => {
  return (
    <Box 
      sx={{ 
        py: 8,
        backgroundColor: 'background.default'
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h2"
          sx={{
            textAlign: 'center',
            mb: 6,
            color: 'text.primary'
          }}
        >
          Find out what our patients are saying about us
        </Typography>
        
        <Stack
          direction={{ xs: 'column', md: 'row' }}
          spacing={4}
          sx={{ justifyContent: 'center' }}
        >
          {reviews?.map((review) => (
            <Card
              key={review.id}
              sx={{
                width: "20rem",
                height: '20rem',
                borderRadius: "1rem",
                alignItems: "flex-end",
                transition: 'transform 0.3s ease-in-out',
                '&:hover': {
                  transform: 'translateY(-5px)',
                  boxShadow: 3
                }
              }}
            >
              <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
                >
                <Rating 
                  sx={{
                    fontSize: "2rem",
                    py: 5,
                  }}
                  value={review.rating} 
                  precision={0.5} 
                  readOnly 
                />
                <Typography 
                  variant="h5" 
                  color="text.secondary"
                  sx={{ mb: 5 }}
                >
                  {review.content}
                </Typography>
                <Typography variant="bold" gutterBottom>
                  {review.userName}
                </Typography>
              </CardContent>
            </Card>
          ))}
        </Stack>
      </Container>
    </Box>
  );
};

ReviewSection.propTypes = {
  reviews: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      userName: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
      content: PropTypes.string.isRequired,
    })
  ),
};

export default ReviewSection;
