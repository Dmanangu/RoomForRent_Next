import {
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Button,
} from "@material-ui/core";
import Grid from "@mui/material/Grid";
import Layout from "../component/Layout";
import Data from "../component/data";

export default function EntireHomes() {
  return (
    <Layout>
      <Grid container spacing={3}>
        {Data.Product.map((Product) => (
          <Grid item md={4} key={Product.name}>
            <Card>
              <CardActionArea>
                <CardMedia
                  component="img"
                  image={Product.image}
                  title={Product.name}
                ></CardMedia>
                <CardContent>
                  <Typography>{Product.name}</Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                <Typography>{Product.rating}</Typography>
                <Button size="small" color="primary">
                  Ratings
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Layout>
  );
}
