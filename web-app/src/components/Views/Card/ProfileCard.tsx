import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Box } from '@mui/material';


export default function ProfileCard() {

  return (
    <Card sx={{ marginLeft: 'auto', marginRight: 'auto', width: '100%', marginTop: "24px" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
            M
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Musab Dedecik"
      />
      <Box style={{ display: 'flex', flexWrap: "wrap", alignItems: 'center' }}>
        <CardMedia
          component="img"
          style={{ width: '200px', borderRadius: '50%', paddingLeft: 16, marginBottom: '16px' }}
          image="https://media-exp1.licdn.com/dms/image/C4D03AQEt_sNcvhPDvA/profile-displayphoto-shrink_800_800/0/1647852980917?e=1655942400&v=beta&t=IU43NxnbNfIhGppnWc4BJcWEE1OuuQaVRFw95KWlem0"
          alt="Musab Dedecik"
        />
        <CardContent className="text-bio" style={{ paddingTop: 0, width: '75%' }}>
          <Typography variant="body2" color="text.secondary">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Typography>
        </CardContent>
      </Box>
      <CardActions disableSpacing>
        <IconButton onClick={() => {
          window.open("https://www.linkedin.com/in/musab-dedecik/", "_blank")
        }} aria-label="add to favorites">
          <LinkedInIcon
          />
        </IconButton>
        <IconButton onClick={() => {
          window.open("https://github.com/musabdedecik/", "_blank")
        }} aria-label="share">
          <GitHubIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}