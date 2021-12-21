import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
  Button,
} from "@material-ui/core";
import { grid } from "@mui/system";
import Layout from "../component/Layout";

function EntireHomes() {
  return (
    <Layout>
      <Grid container spacing={3}>
        {edata.ehomes.map((ehomes) => (
          <Grid item md={4} key={ehomes.name}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={ehomes.image}
                  title={ehomes.name}
                ></CardMedia>
                <CardContent>
                  <Typography>{ehomes.name}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography>{ehomes.rating}</Typography>
                <Button size="small" color="primary">
                  Pick
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
