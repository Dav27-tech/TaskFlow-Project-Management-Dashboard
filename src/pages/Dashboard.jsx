import Sidebar from "../components/Sidebar";
import StatisticCard from "../components/StatisticCard";

export default function Dashboard() {
  return (
    <div>
      <Sidebar />
      <main>
        <StatisticCard />
      </main>
    </div>
  );
}
