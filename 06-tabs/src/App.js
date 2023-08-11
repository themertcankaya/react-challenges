import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [value, setValue] = useState(0);
  const [jobs, setJobs] = useState([]);

  const fetchData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setJobs(data);
    setIsLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading === true) return <h2>Loading...</h2>;
  console.log(jobs);
  const { id, order, title, dates, duties, company } = jobs[value];
  return (
    <div style={{ marginTop: "4rem" }}>
      <h2 className="title-h2">tabs project setup</h2>
      <div className="wrapper-sec">
        <div className="buttons-sec">
          {jobs.map((item, index) => (
            <button
              onClick={() => setValue(index)}
              className={index === value && "active"}
              key={item.id}
            >
              {item.company}
            </button>
          ))}
        </div>
        <div className="info-sec">
          <h3>{title}</h3>
          <p className="company-sec">{company}</p>
          <p className="date-sec">{dates}</p>
          {duties.map((item, index) => (
            <div key={index} className="duty-sec">
              <FaAngleDoubleRight className="icon-sec" />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
