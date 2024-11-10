import React, { useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import "chart.js/auto";
import "./Dashboard.css";
import ChartDataLabels from "chartjs-plugin-datalabels";
import imgImport from "../../utilities/imgImport";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

// Register necessary components and plugins
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const icons = {
  icon1: "icon1",
  icon2: "icon2",
  icon3: "icon3",
};
const personNames = {
  person1: "person1",
  person2: "person2",
  person3: "person3",
  person4: "person4",
};
const Dashboard = ({ data }) => {
  const [isSelected, setIsSelected] = useState(0);

  const cardSelect = (id) => {
    setIsSelected(id);
  };
  const weeklyActivityData = {
    labels: ["Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri"],
    datasets: [
      {
        label: "Deposit",
        data: data.weeklyActivity.deposit,
        backgroundColor: "#3b82f6",
        borderRadius: 8,
        barThickness: 12,
        categoryPercentage: 0.8,
        // barPercentage: 0.5,
      },
      {
        label: "Withdraw",
        data: data.weeklyActivity.withdraw,
        backgroundColor: "#34d399",
        borderRadius: 8,
        barThickness: 12,
        categoryPercentage: 0.8,
        // barPercentage: 0.5,
      },
    ],
  };

  const barOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false, // Disable the display of data labels
      },
    },
  };

  const expenseData = {
    labels: data.expenseStatistics.map((item) => item.category),
    datasets: [
      {
        data: data.expenseStatistics.map((item) => item.value),
        backgroundColor: ["#2b2e55", "#ff7d05", "#ff00ff", "#1a1aff"],
        hoverBackgroundColor: ["#2b2e55", "#ff7d05", "#ff00ff", "#1a1aff"],
        borderWidth: 8,
        borderColor: "#ffffff",
      },
    ],
  };

  const balanceHistoryData = {
    labels: ["Jul", "Aug", "Sep", "Oct", "Nov", "Dec", "Jan"],
    datasets: [
      {
        label: "Balance History",
        data: data.balanceHistory,
        borderColor: "#6366f1",
        fill: true,
        tension: 0.4,
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea } = chart;

          if (!chartArea) {
            // This will happen initially, wait for `chartArea` to be available
            return null;
          }

          // Create a gradient
          const gradient = ctx.createLinearGradient(
            0,
            chartArea.top,
            0,
            chartArea.bottom
          );
          gradient.addColorStop(0, "rgba(99, 102, 241, 0.5)"); // Light blue at the top
          gradient.addColorStop(1, "rgba(99, 102, 241, 0)"); // Transparent at the bottom

          return gradient;
        },
      },
    ],
  };
  const lineOptions = {
    plugins: {
      datalabels: {
        display: false,
      },
    },
  };
  console.log(data);

  const options = {
    plugins: {
      legend: {
        display: false, // Hide the legend
      },
      tooltip: {
        callbacks: {
          label: (context) => `${context.label}: ${context.raw}%`,
        },
      },
      datalabels: {
        color: "#ffffff",
        anchor: "center",
        align: "center",
        formatter: (value, context) => {
          const label = context.chart.data.labels[context.dataIndex];
          return `${value}%\n${label}`;
        },
        font: {
          weight: "bold",
          size: 10,
        },
        textAlign: "center",
      },
    },
  };

  const username = JSON.parse(localStorage.getItem("User"));
  // console.log(imgImport("abc"))
  // const ans = imgImport("person1");
  // console.log(ans);

  return (
    <div className="main-content">
      <div className="navbar">
        <div className="navbar-left">Overview</div>
        <div className="navbar-center">
          <input
            type="text"
            className="search-input"
            placeholder="Search for something"
          />
        </div>
        <div className="navbar-right">
          <button className="icon-button">
            <img src={imgImport("settingIcon")} alt="setting" />
          </button>
          <button className="icon-button">
            <img src={imgImport("bellIcon")} alt="bellIcon" />
          </button>
          <div className="profile-pic">
            {/* <img src={imgImport("profileIcon")} alt="Profile" /> */}
            {username[0]}
          </div>
        </div>
      </div>
      <div className="dashboard-content">
        <div className="cards">
          <p>My Cards</p>
          <div className="cards-container">
            {data.cards.map((card, index) => (
              <div
                key={index}
                className={`scroller ${isSelected === index ? "active" : ""}`}
                onClick={() => cardSelect(index)}
              >
                <div className="card">
                  <div className="card-segment">
                    <div className="balance">
                      <p className="card-title">Balance: </p>
                      <p>{card.balance}</p>
                    </div>
                    <div className="card-icon">
                      <img
                        src={
                          isSelected
                            ? imgImport("cardIcon1")
                            : imgImport("cardIcon2")
                        }
                        alt="card"
                      />
                    </div>
                  </div>
                  <div className="card-segment">
                    <div className="card-detail">
                      <p className="card-title">CARD HOLDER </p>
                      <p>{card.cardHolder}</p>
                    </div>
                    <div className="card-detail">
                      <p className="card-title">VALID THRU</p>
                      <p> {card.validThru}</p>
                    </div>
                  </div>
                  <div className="card-segment card-number">
                    <p>3778 **** **** {card.lastFourDigits}</p>
                    <div className="bank-icon">
                      <img
                        src={
                          isSelected
                            ? imgImport("bankIcon2")
                            : imgImport("bankIcon1")
                        }
                        alt="bankIcon"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="transactions">
          <p>Recent Transactions</p>
          <ul className="trasactions-container">
            {data.transactions.map((transaction, index) => (
              <li key={index}>
                <div className="icon">
                  <img
                    src={imgImport(icons[transaction.icon])}
                    alt={transaction.icon}
                  />
                </div>
                <div className="type">
                  <p>
                    {transaction.type} {transaction.source || transaction.to}
                  </p>
                  <p className="date">{transaction.date}</p>
                </div>
                <div className="amount">
                  {transaction.amount > 0 ? "+" : ""}${transaction.amount}
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="chart1">
          <p>Weekly Activity</p>
          <div className="weekly-activity">
            <Bar data={weeklyActivityData} options={barOptions} />
          </div>
        </div>

        <div className="chart2">
          <p>Expense Statistics</p>
          <div className="expense-statistics">
            <Pie data={expenseData} options={options} />
          </div>
        </div>

        <div className="quick-transfer">
          <p>Quick Transfer</p>
          <div className="transfer-stats">
            <div className="person-list">
              <div className="persons">
                {data.quickTransfer.map((person, index) => (
                  <div key={index} className="person">
                    <div className="person-img">
                      <img
                        src={imgImport(personNames[person.img])}
                        alt={person.img}
                      />
                    </div>
                    <p>{person.name}</p>
                    <p className="designation">{person.role}</p>
                  </div>
                ))}
              </div>

              <div className="nextIcon">
                <img src={imgImport("nextIcon")} alt="next" />
              </div>
            </div>
            <div className="send-amount">
              <p>Write Amount</p>
              <div className="send-input">
                <div className="input">
                  <input type="text" />
                </div>
                <button className="sendBtn">
                  send
                  <img src={imgImport("sendIcon")} alt="send" />
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="chart3">
          <p>Balance History</p>
          <div className="balance-history">
            <Line data={balanceHistoryData} options={lineOptions} />
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default Dashboard;
