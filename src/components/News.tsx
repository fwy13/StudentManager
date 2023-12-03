import { ExpandMore } from "@mui/icons-material";
import {
  Card,
  CardActions,
  CardContent,
  CardHeader,
  IconButton,
} from "@mui/material";

const News: React.FC = () => {
  return (
    <Card sx={{ width: 400 }}>
      <CardHeader title="New's" />
      <CardContent>
        <Card>
          <CardHeader subheader="Bug's Fix v1.1" />
          <CardContent>This is Content</CardContent>
          <CardActions>
            <IconButton>
              <ExpandMore />
            </IconButton>
          </CardActions>
        </Card>
      </CardContent>
    </Card>
  );
};

export default News;
