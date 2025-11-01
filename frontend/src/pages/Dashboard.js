import { useEffect, useState } from "react";
import api from "../services/api";

export default function Dashboard() {
  const [stats, setStats] = useState({});
  useEffect(() => { api.get("dashboard/").then(res => setStats(res.data)); }, []);

  return (
    <div className="grid grid-cols-2 gap-4 p-6">
      {Object.entries(stats).map(([k, v]) => (
        <div key={k} className="bg-gray-100 p-4 rounded shadow">
          <h3 className="text-lg font-semibold capitalize">{k.replace('_',' ')}</h3>
          <p className="text-2xl font-bold">{v}</p>
        </div>
      ))}
    </div>
  );
}
