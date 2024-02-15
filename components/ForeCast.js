import Image from "next/image";
import Typography from "@mui/joy/Typography";
import { currencyFormatter } from "@/helpers/currency";

//  Styles
const container = {
  display: "flex",
  gap: "1rem",
  alignItems: "center",
};

export default function ForeCast({ current = 0, goal = 0 }) {
  return (
    <article style={container}>
      <Image src="/icons/Cloud.svg" height={42} width={42} alt="main-icon" />
      <Typography level="h2">Plan del mes</Typography>
      <div style={{ position: "relative" }}>
        <div
          style={{
            width: "0px",
            height: "21px",
            background: "#D4F536",
            borderRadius: "50px",
            position: "absolute",
            zIndex: 2,
          }}
        ></div>
        <div
          style={{
            width: "600px",
            height: "21px",
            background: "#D9D9D9",
            borderRadius: "50px",
          }}
        ></div>
      </div>
      <Typography
        sx={{ fontWeight: 500, fontSize: 20 }}
        level="body-md"
      >{`${currencyFormatter(current)} / ${currencyFormatter(goal)}`}</Typography>
    </article>
  );
}
