import { Button, CardActions, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Layout } from "../components/Layout";
import { selectUser } from "../features/generalSlice";
import services from "../services";

export default function Purchases() {
  const user = useSelector(selectUser);
  const [purchases, setPurchases] = useState([]);

  useEffect(() => {
    services
      .getPurchases(user.token)
      .then(({ data }) => setPurchases(data.purchases))
      .catch((err) => console.log(err));
  }, [user]);

  return (
    <Layout>
      {/*<div
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <p style={{ paddingTop: 50 }}>sd</p>
      </div>*/}
      {purchases.map((purchase) => (
        <div>
          <CardContent>
            <Typography
              sx={{ fontSize: 14 }}
              color="text.secondary"
              gutterBottom
            >
              Word of the Day
            </Typography>
            <Typography variant="h5" component="div">
              asd
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              adjective
            </Typography>
            <Typography variant="body2">
              well meaning and kindly.
              <br />
              {'"a benevolent smile"'}
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </div>
      ))}
    </Layout>
  );
}
