import React from "react";
import { useState } from "react";
import backgroundVideo from "../src/assets/backgroundVideo.mp4";
import TTTlogo from "./assets/TTTlogo.png";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";

function Main() {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await fetch("https://www.terriblytinytales.com/test.txt");
    const text = await response.text();
    const words = text.split(/\s+/);
    const counts = {};
    words.forEach((word) => {
      counts[word] = (counts[word] || 0) + 1;
    });
    const sorted = Object.entries(counts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 20);
    const chartData = sorted.map(([word, count]) => ({ word, count }));
    setData(chartData);
  };

  const exportData = () => {
    const csv = data.map(({ word, count }) => `${word},${count}`).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "ttt_histogram_data.csv";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="main">
      <video src={backgroundVideo} autoPlay loop muted />

      <span className="content">
        <a
          href="https://www.terriblytinytales.com/"
          target="_blank"
          rel="noreferrer"
        >
          <img src={TTTlogo} alt="logo" className="image" />
        </a>

        <div>
          <p>Terribly Tiny Tales tells great stories with top creators for the <br />
             world's most ambitious brands.</p>
        </div>

        <button id="submit_button" onClick={fetchData}>
          SUBMIT
        </button>

        {data.length > 0 && (
          <div className="chart">
            <BarChart width={1000} height={400} data={data}>
              <XAxis dataKey="word" fontSize={20} />
              <YAxis fontSize={20} />
              <Tooltip />
              <Legend />
              <Bar dataKey="count" fill="#E1A407"/>
            </BarChart>

            <button className="export_button" onClick={exportData}>
              Export CSV
            </button>
          </div>
        )}
      </span>
    </div>
  );
}

export default Main;
