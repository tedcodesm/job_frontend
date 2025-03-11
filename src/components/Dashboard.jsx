import React, { useEffect, useState } from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from "recharts";
import axios from "axios";

const Dashboard = () => {
    const [jobData, setJobData] = useState([]);

    useEffect(() => {
      const fetchJobs = async () => {
        try {
          const response = await axios.get("http://localhost:8000/api/job/getjob");
          const formattedData = response.data.map((job) => ({
            name: job.name,
            salary: job.salary,
          }));
          setJobData(formattedData);
        } catch (error) {
          console.error("Error fetching job data", error);
        }
      };
    
      fetchJobs();
    }, []);     

return (
  <div className="p-6 bg-white h-screen shadow-lg rounded-lg">
    <h2 className="text-xl font-bold mb-4 text-gray-700">Job Salary Graph</h2>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={jobData}>
        <XAxis dataKey="name" tick={{ fill: "#4B5563" }} />
        <YAxis tick={{ fill: "#4B5563" }} />
        <Tooltip />
        <Legend />
        <Bar dataKey="salary" fill="#2563EB" barSize={40} radius={[10, 10, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
);
};
  


export default Dashboard
