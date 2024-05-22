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
  image: string;
}

const CardExam: React.FC<TypeCardExam> = (props) => {
  return (
    <Grid item>
      <Card sx={{ maxWidth: 300 }} className="p-2">
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
          subheader={props.day}
        />
        <CardMedia
          component="img"
          height="194"
          image={props.image}
          alt="Paella dish"
        />
      </Card>
    </Grid>
  );
};

export default CardExam;
