import Typography from "@mui/joy/Typography";
import Divider from "@mui/joy/Divider";
import { currencyFormatter } from "@/helpers/currency";

//  Styles
let card = {
  display: "flex",
  flexDirection: "column",
  borderRadius: "12px",
  background: "#fff",
  boxShadow: "0px 6px 16px 5px rgba(119, 119, 119, 0.2)",
  padding: "1rem",
  maxWidth: "360px",
  minWidth: "320px"
};

let subTotals = {
  display: "flex",
  justifyContent: "space-between",
};

export default function SalesCard({
  total = 0,
  profit = 0,
  ships = { orders: 0, units: 0 },
}) {
  return (
    <article style={card}>
      <Typography level="h2">{currencyFormatter(total)}</Typography>
      <Typography>Ventas hoy</Typography>
      <Divider
        sx={{
          margin: "1rem 0rem",
          borderRadius: "10px",
          "--Divider-thickness": "4px",
          "--Divider-lineColor": "var(--joy-palette-primary-500)",
        }}
      />
      <section style={subTotals}>
        <div>
          <Typography>{`${ships.orders}/${ships.units}`}</Typography>
          <Typography color="primary">Ordenes/ Unidades</Typography>
        </div>
        <div>
          <Typography>{currencyFormatter(profit)}</Typography>
          <Typography color="primary">Profit</Typography>
        </div>
      </section>
    </article>
  );
}
