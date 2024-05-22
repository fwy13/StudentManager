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
      <CardHeader title="Thông báo" />
      <CardContent>
        <Card>
          <CardHeader subheader="Thông báo 19-5-2024" />
          <CardContent>Điểm học kì đã được cập nhật.</CardContent>
        </Card>
      </CardContent>
    </Card>
  );
};

export default News;
