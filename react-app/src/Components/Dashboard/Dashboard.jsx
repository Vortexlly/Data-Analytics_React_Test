import React from 'react';
import img from './Dashboard.jpg'
import './Dashboard.css';

const Dashboard = () => {
  return (
    <section className="dashboard">
        <div className="dashboard__wrapper">
            <img src={img} alt="Computer-img" className="dashboard__img" />
            <div className="dashboard__text">
                <h4 className="dashboard__green-text">DATA ANALYTICS DASHBOARD</h4>
                <h2 className="dashboard__title">Manage Data Analytics Centrally</h2>
                <p className="dashboard__descr">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum molestiae delectus
                  culpa hic assumenda, voluptate reprehenderit dolore autem cum ullam sed odit
                  perspiciatis. Doloribus quos velit, eveniet ex deserunt fuga?
                </p>
                <button className="dashboard__btn">Get Started</button>
            </div>
        </div>
    </section>
  )
}

export default Dashboard