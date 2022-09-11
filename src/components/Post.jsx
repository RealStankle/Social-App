import { useState } from 'react';
import dayjs from 'dayjs';
import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  IconButton,
  Typography,
} from '@mui/material';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';

const Post = ({ photo }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Card
      sx={{
        mb: 2,
      }}
    >
      <CardHeader
        avatar={
          <Avatar alt={photo.user.name} src={photo.user.profile_image.large} />
        }
        action={
          <IconButton>
            <MoreVert />
          </IconButton>
        }
        title={photo.user.name}
        subheader={dayjs(photo.created_at).format('MMMM DD, YYYY')}
      />
      <CardMedia
        component="img"
        image={photo.urls.regular}
        alt={photo.alt_description}
        height="500"
      />
      {photo.description && (
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {photo.description}
          </Typography>
        </CardContent>
      )}
      <CardActions disableSpacing>
        <IconButton onClick={() => setIsLiked((prev) => !prev)} color="error">
          {isLiked ? <Favorite /> : <FavoriteBorder />}{' '}
        </IconButton>
        <IconButton color="primary">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;