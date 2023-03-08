import {
  Avatar,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  CardMedia,
  Checkbox,
  IconButton,
  Typography,
} from '@mui/material';
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material';
const Post = () => {
  return (
    <Card sx={{ margin: '5px' }}>
      <CardHeader
        avatar={
          <Avatar
            alt="Miranda Cohen"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE2EwZGxrzoWWhiDst647sBEXdGOnS2lmynBhD8iherGxYoTEzNlrGUF_uPiJIPYTyPlE&usqp=CAU"
            sx={{ width: 50, height: 50 }}
          />
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Miranda Cohen"
        subheader="September 14, 2016"
      />
      <CardMedia
        component="img"
        height="194"
        image="https://pbs.twimg.com/media/Fc8ihQgWQAcRgfH.jpg"
        alt="Paella dish"
        sx={{ objectFit: 'contain' }}
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the
          mussels, if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <Checkbox
            icon={<FavoriteBorder />}
            checkedIcon={<Favorite color="error" />}
          />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;
