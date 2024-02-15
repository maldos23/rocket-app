import SalesCard from "@/components/SalesCard";
import styles from "./styles.module.css";
import ForeCast from "@/components/ForeCast";
import TabsMarkets from "@/components/TabsMarkets";
export default function Dashboard() {
  return (
    <main>
      <section className={styles.totalsection}>
        <SalesCard />
        <SalesCard />
        <SalesCard />
      </section>
      <section style={{ margin: "1rem 0rem" }}>
        <ForeCast />
      </section>
      <section style={{ margin: "1rem 0rem" }}>
        <TabsMarkets />
      </section>
    </main>
  );
}
