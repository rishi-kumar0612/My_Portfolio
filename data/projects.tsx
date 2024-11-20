
  
  // components/ui/ExpandableCardDemo.tsx

import { CardEx } from '@/components/ui/ExpandableCard';
// data/projects.tsx

export const cards: CardEx[] = [
  {
    description: "Advanced Wildfire Forecasting",
    title: "Advanced Wildfire Forecasting",
    src: "/ReadyPlayerMe-Avatar.png", // Placeholder image path
    ctaText: "View Details",
    ctaLink: "/projects/advanced-wildfire-forecasting", // Placeholder link
    content: () => (
      <p>
        Consolidated a 133k-row wildfire dataset, merged weather data, and achieved an ROC AUC score of 0.92 and an F1-score of 0.89 with an 86% accuracy for the Random Forest Classifier.
      </p>
    ),
    skills: ["Python", "pandas", "NumPy"],
  },
  {
    description: "Facial Expression Analysis with Deep Learning",
    title: "Facial Expression Analysis with Deep Learning",
    src: "/ReadyPlayerMe-Avatar.png", // Placeholder image path
    ctaText: "View Details",
    ctaLink: "/projects/facial-expression-analysis", // Placeholder link
    content: () => (
      <p>
        Developed a deep learning-based system for analyzing facial expressions from 10,000+ images, achieving 90% accuracy and an F1-score of 0.85.
      </p>
    ),
    skills: ["Python", "Deep Learning", "CNNs"],
  },
  {
    description: "Spotify API Data Pipeline",
    title: "Spotify API Data Pipeline",
    src: "/ReadyPlayerMe-Avatar.png",
    ctaText: "View Details",
    ctaLink: "/projects/spotify-api-data-pipeline",
    content: () => (
      <p>
        Engineered an ELT pipeline to extract Spotify data from playlists, simulating AWS S3 with Localstack, loading data into AWS S3, copying it to Snowflake, transforming it with dbt, and visualizing results in Google Looker Studio through Docker orchestration and Airflow management, enhancing data processing efficiency by 70%.
      </p>
    ),
    skills: [
      "Python",
      "Airflow",
      "Docker",
      "AWS S3",
      "Snowflake",
      "dbt",
      "Localstack",
      "Looker Studio",
    ],
  },
  {
    description: "Tesla Trend Forecaster",
    title: "Tesla Trend Forecaster",
    src: "/ReadyPlayerMe-Avatar.png",
    ctaText: "View Details",
    ctaLink: "/projects/tesla-trend-forecaster",
    content: () => (
      <p>
        Scraped Tesla stock prices for three months, conducted data analysis and feature engineering, and forecasted trends with a Mean Squared Error of 70.16%.
      </p>
    ),
    skills: ["Python", "NumPy", "Pandas", "Matplotlib", "Stochastic Gradient Descent"],
  },
  {
    description: "Flights Data ETL Pipeline using AWS",
    title: "Flights Data ETL Pipeline using AWS",
    src: "/ReadyPlayerMe-Avatar.png",
    ctaText: "View Details",
    ctaLink: "/projects/flights-data-etl-pipeline",
    content: () => (
      <p>
        Engineered a robust ETL pipeline utilizing AWS services to automate the extraction of flight data from S3, transforming it with Python scripts, and loading into a data warehouse, enhancing processing efficiency by 60%.
      </p>
    ),
    skills: ["Python", "AWS S3", "AWS Lambda", "AWS Redshift", "ETL", "Data Engineering"],
  },
  {
    description: "Kidney Disease Classification with Deep Learning",
    title: "Kidney Disease Classification with Deep Learning",
    src: "/ReadyPlayerMe-Avatar.png",
    ctaText: "View Details",
    ctaLink: "/projects/kidney-disease-classification",
    content: () => (
      <p>
        Engineered a robust classification system for kidney disease using MLflow for experiment tracking, DVC for data version control, and deployed on AWS EC2 with Docker, ensuring efficient and scalable real-time predictions.
      </p>
    ),
    skills: ["Python", "MLflow", "DVC", "AWS EC2", "Docker", "Deployment"],
  },
  {
    description: "Pet Image Classification Using Deep Learning Models",
    title: "Pet Image Classification Using Deep Learning Models",
    src: "/ReadyPlayerMe-Avatar.png",
    ctaText: "View Details",
    ctaLink: "/projects/pet-image-classification",
    content: () => (
      <p>
        Built and trained deep learning models for classifying cat and dog images, employing data augmentation and transfer learning, and achieved high accuracy with DenseNet121.
      </p>
    ),
    skills: ["Python", "TensorFlow", "Keras", "VGG16", "ResNet50", "DenseNet121"],
  },
  {
    description: "StockView: A Flask-Based Stock Analysis Platform",
    title: "StockView: A Flask-Based Stock Analysis Platform",
    src: "/ReadyPlayerMe-Avatar.png",
    ctaText: "View Details",
    ctaLink: "/projects/stockview",
    content: () => (
      <p>
        Built a web application using Flask to analyze stock data, implement real-time updates, and provide an intuitive user interface for seamless interaction.
      </p>
    ),
    skills: ["Python", "Flask", "HTML", "CSS"],
  },
  {
    description: "YouTube Script Generator",
    title: "YouTube Script Generator",
    src: "/ReadyPlayerMe-Avatar.png",
    ctaText: "View Details",
    ctaLink: "/projects/youtube-script-generator",
    content: () => (
      <p>
        Created a web application leveraging GPT-3 and NLP techniques to generate coherent YouTube video scripts with a user-friendly interface defined using Flask and Streamlit.
      </p>
    ),
    skills: ["Python", "Langchain", "Streamlit", "Flask", "GPT-3"],
  },
  {
    description: "Twitter Sentiment Analysis",
    title: "Twitter Sentiment Analysis",
    src: "/ReadyPlayerMe-Avatar.png",
    ctaText: "View Details",
    ctaLink: "/projects/twitter-sentiment-analysis",
    content: () => (
      <p>
        Developed an application to analyze tweet sentiments on specific topics using the Twitter API and Google Cloud NLP API for real-time sentiment analysis and scoring.
      </p>
    ),
    skills: ["JavaScript", "Node.js", "Google Cloud NLP API"],
  },
  {
    description: "NYC Motor Collision Analysis",
    title: "NYC Motor Collision Analysis",
    src: "/ReadyPlayerMe-Avatar.png",
    ctaText: "View Details",
    ctaLink: "/projects/nyc-motor-collision-analysis",
    content: () => (
      <p>
        Conducted a comprehensive analysis of NYC motor collision data, visualizing trends and patterns using Tableau to identify key factors contributing to collisions and enhance public safety awareness.
      </p>
    ),
    skills: ["Tableau", "Tableau Prep", "NYC Open Data"],
  },
];
