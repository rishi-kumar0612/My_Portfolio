
  
  // components/ui/ExpandableCardDemo.tsx

import { CardEx } from '@/components/ui/ExpandableCard';
// data/projects.tsx

export const cards: CardEx[] = [
  {
    description: "Advanced Wildfire Forecasting",
    title: "Advanced Wildfire Forecasting",
    src: "/wildfire.png", // Placeholder image path
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
    src: "/facial expressions.png", // Placeholder image path
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
    description: "Tesla Trend Forecaster",
    title: "Tesla Trend Forecaster",
    src: "/Tesla Stock.png",
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
    description: "Pet Image Classification Using Deep Learning Models",
    title: "Pet Image Classification Using Deep Learning Models",
    src: "/pet classification.png",
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
    description: "Chatbot for Restaurant Reservations and Queries",
    title: "Restaurant Chatbot with AWS Lex & RAG",
    src: "/chatbot.png",
    ctaText: "View Details",
    ctaLink: "/projects/restaurant-chatbot",
    content: () => (
      <p>
        Developed an <strong>AWS Lex</strong> chatbot that handles 
        reservation creation, modification, cancellation, and general 
        queries. Leveraged <strong>RAG (Retrieval-Augmented Generation)</strong>, 
        <strong>AWS Lambda</strong>, and <strong>AWS RDS</strong> for 
        dynamic responses. Integrated the <strong>Google Calendar API</strong> 
        for real-time scheduling and <strong>Twilio</strong> to facilitate 
        phone-call interactions.
      </p>
    ),
    skills: [
      "AWS Lex",
      "Lambda",
      "RDS",
      "Google Calendar API",
      "Twilio",
      "Retrieval-Augmented Generation",
      "Python",
    ],
  },
  {
    description: "StockView: A Flask-Based Stock Analysis Platform",
    title: "StockView: A Flask-Based Stock Analysis Platform",
    src: "/stockview.png",
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
    src: "/youtube.png",
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
    description: "NYC Motor Collision Analysis",
    title: "NYC Motor Collision Analysis",
    src: "/map.png",
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
