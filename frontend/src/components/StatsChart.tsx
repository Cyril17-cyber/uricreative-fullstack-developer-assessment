"use client";
import React from "react";
import {
  VictoryBar,
  VictoryChart,
  VictoryAxis,
  VictoryTheme,
  VictoryTooltip,
} from "victory";

interface Stats {
  byStatus: Record<string, number>;
  total: number;
}

const StatsChart = ({ stats }: { stats: Stats }) => {
  const data = Object.keys(stats.byStatus).map((status) => ({
    x: status,
    y: stats.byStatus[status],
    label: `${status}: ${stats.byStatus[status]}`, // Tooltip content
  }));

  return (
    <div>
      <h3>Total Applications: {stats.total}</h3>
      <VictoryChart theme={VictoryTheme.material} domainPadding={20}>
        <VictoryAxis
          style={{
            axis: { stroke: "#756f6a" },
            ticks: { stroke: "grey", size: 5 },
            tickLabels: { fontSize: 10, padding: 5 },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "#756f6a" },
            tickLabels: { fontSize: 10, padding: 5 },
          }}
        />
        <VictoryBar
          data={data}
          labels={({ datum }) => datum.label}
          labelComponent={<VictoryTooltip />}
          style={{
            data: { fill: "#4caf50", width: 20 },
            labels: { fontSize: 12 },
          }}
        />
      </VictoryChart>
    </div>
  );
};

export default StatsChart;
