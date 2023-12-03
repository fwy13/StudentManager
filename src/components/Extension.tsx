import { MoreVert } from "@mui/icons-material";
import { Avatar, Card, CardHeader, IconButton } from "@mui/material";
import { red } from "@mui/material/colors";

const Extension: React.FC = () => {
  return (
    <>
      <Card sx={{ width: 400 }}>
        <CardHeader 
        avatar={
          <Avatar sx={{ bgcolor: red[500] }}>Q</Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title="Huynh Quy"
        subheader="11B5"
        />
      </Card>
    </>
  );
};

export default Extension;
