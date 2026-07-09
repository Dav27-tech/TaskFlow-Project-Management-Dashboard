import Sidebar from "../components/Sidebar";
import StatisticCard from "../components/statisticCard";

export default function Dashboard() {
  return (
    <div className="d-flex">
      <Sidebar />
      <main style={{ marginLeft: "320px", flex: 1, padding: "2rem" }}>
        <StatisticCard />
      </main>
    </div>
  );
}
