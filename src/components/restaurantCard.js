import * as React from 'react';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import ButtonBase from '@material-ui/core/ButtonBase';
import { useNavigate } from "react-router-dom";
import { withStyles } from '@material-ui/core/styles';
import {  Row, Col, Container } from "react-bootstrap";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import './restaurantCard.css'


const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function randomColor() {
    let hex = Math.floor(Math.random() * 0xFFFFFF);
    let color = "#" + hex.toString(16);
    return color;
  }

function RestaurantCard(props) {

  const restInfo = props.restInfo;

  const [expanded, setExpanded] = React.useState(false);
  const [userLiked, setUserLiked] = React.useState(false);
  const [likes, setLikes] = React.useState(restInfo.likes);
  const [userCollected, setUserCollected] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const incrementLikes = () => {
      if (!userLiked) {
          setLikes((preState) => {return (preState + 1)});
          setUserLiked(true);
      } else {
          setLikes((preState) => {return (preState - 1)});
          setUserLiked(false);
      }
  }

  const incrementCollections = () => {
      if (!userCollected) {
          setUserCollected(true);
      } else {
          setUserCollected(false);
      }
  }

  const restName = restInfo.name;
  const restImg = restInfo.img;
  const restIntro = restInfo.intro;
  const restStartDate = restInfo.startDate;
  const avatarLetter = restName.slice(0,1).toUpperCase()
  
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/order`; 
    navigate(path);
  }

  return (
      <>
    <Card sx={{ maxWidth: 345, marginBottom:'25px', marginTop: '25px'}}>       
      <CardHeader sx={{ maxWidth: 345, height: 100, fontSize: 20, }} className='card-header-height'
        avatar={
          <Avatar sx={{ bgcolor: randomColor() }} aria-label="recipe">
            {avatarLetter}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={restName}
        titleTypographyProps={{variant:'body1'}}
        subheader={restStartDate}
      />

     <ButtonBase onClick={routeChange} style={{height:'100%', width:'100%'}}> 
        <CardMedia
            component="img"
            height="194"
            image={String(restImg)}
            alt={restName}
        />
     </ButtonBase>
    
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          <p className='intro-text'>{restIntro}</p>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton aria-label="likes" onClick={incrementLikes}>
            <div style={{
                display: 'flex',
                alignItems: 'center',
                flexWrap: 'wrap',
                fontSize: '15px'
            }}>
          {userLiked? <FavoriteIcon /> : <FavoriteBorderIcon/>}
          <span>{likes}</span>
          </div>
        </IconButton>
        <IconButton aria-label="add to collections" onClick={incrementCollections}>
          {userCollected? <BookmarkIcon /> : <BookmarkBorderIcon />}
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
            aside for 10 minutes.
          </Typography>
          <Typography paragraph>
            Add rice and stir very gently to distribute. Top with artichokes and
            peppers, and cook without stirring, until most of the liquid is absorbed,
            15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
            mussels, tucking them down into the rice, and cook again without
            stirring, until mussels have opened and rice is just tender, 5 to 7
            minutes more. (Discard any mussels that don???t open.)
          </Typography>
          <Typography>
            Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
        </CardContent>
      </Collapse>
     
    </Card>
    </>
  );
}

export default (RestaurantCard)