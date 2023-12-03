import { MoreVert } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import { green } from "@mui/material/colors";

interface TypeCardExam {
  title: string;
  day?: string;
}

const CardExam: React.FC<TypeCardExam> = (props) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 300 }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: green[700] }} aria-label="recipe">
              Q
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={props.title}
          subheader="September 14, 2023"
        />
        <CardMedia
          component="img"
          height="194"
          image="https://mui.com/static/images/cards/paella.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            This impressive paella is a perfect party dish and a fun meal to
            cook together with your guests. Add 1 cup of frozen peas along with
            the mussels, if you like.
          </Typography>
        </CardContent>{" "}
      </Card>{" "}
    </Grid>
  );
};

export default CardExam;
