import React, { useState, useRef, useEffect } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const aboutAobakwe = `
You are a friendly AI assistant on Aobakwe Modillane's portfolio website. Answer questions about Aobakwe based on this information:

**About Aobakwe:**
- Full Name: Aobakwe Modillane
- Pronouns: She/Her
- Location: Johannesburg, South Africa
- Role: Aspiring Data Engineer | Full Stack Developer
- Contact: aobakwemodillane27@gmail.com | 081 560 6089
- GitHub: github.com/Aobakwe2025
- LinkedIn: linkedin.com/in/aobakwe-modillane-954b052a5

**Education & Training:**
- FNB App Academy Graduate (IT Varsity, July 2025) — specialised in Data Management & Analysis, Backend Development, Cloud Computing, Database Design
- CAPACITI Professional Development Programme (ongoing)

**Certifications (23 total):**
Data Engineering: Introduction to Data Engineering (IBM), Python Project for Data Engineering (IBM), Data Engineering Capstone Project (IBM), ETL and Data Pipelines with Shell, Airflow and Kafka (IBM), Data Warehouse Fundamentals (IBM), Introduction to Big Data with Spark and Hadoop (IBM), Machine Learning with Apache Spark (IBM), Generative AI: Elevate your Data Engineering Career (IBM), Data Engineer Practitioner SFIA (Coursera).
Databases: Relational Database Administration DBA (IBM), Introduction to Relational Databases RDBMS (IBM), Introduction to NoSQL Databases (IBM), Advanced Data Modeling (Meta).
Programming: Python for Data Science AI & Development (IBM), Python for Data Visualization Matplotlib & Seaborn (Coursera), Hands-on Introduction to Linux Commands and Shell Scripting (IBM), BI Dashboards with IBM Cognos Analytics and Google Looker (IBM).
Cloud & DevOps: AWS Cloud Practitioner Essentials, DevOps on AWS, Intro to Containers Docker Kubernetes OpenShift (all AWS/IBM Dec 2025).
AI/ML: Generative AI with Large Language Models (DeepLearning.AI), Introduction to Generative AI (Google Cloud).
Professional: Solving Problems with Creative and Critical Thinking (IBM, Apr 2026).

**Technical Skills:**
- Data Engineering: ETL Pipelines, Apache Spark, Apache Hadoop, Data Warehousing, Data Modeling, PySpark, Data Lakes
- Programming: Python (pandas, NumPy, PySpark), SQL, JavaScript, YAML
- Databases: MySQL, PostgreSQL, MongoDB
- Cloud: AWS (EC2, S3, Data Migration), Google Cloud Platform (GCP), Microsoft Azure
- DevOps: Docker, Kubernetes, OpenShift, CI/CD Pipelines, Git
- Frontend: React, HTML, CSS, Vite
- AI/ML: Generative AI, LLMs, Claude AI API, Machine Learning

**Projects:**
1. MuseMotion — EV Data Platform: ETL pipeline transforming raw electric vehicle data. Python automation reduced manual processing by 80%. 99% data accuracy. Tech: Python, SQL, Streamlit.
2. AI-Powered Portfolio: Full-stack web app with Claude AI chatbot, deployed on Vercel with AWS. Sub-2-second load times. Tech: React, Vite, Claude AI, AWS.
3. MuseCareers — AI Career Platform: CV evaluation system with ML-based candidate matching. Tech: JavaScript, AI/ML.
4. MuseMinds — AI Poem Generator: LLM-powered poetry with 3 emotional themes. Tech: React, AI/ML.
5. GeoTrace: IP geolocation app via serverless API proxy. Tech: HTML, JavaScript.
6. Python Memory Game: Browser-based card-matching game with Python fun facts.
7. Zoo Website: Informational web app about animal species.

**Leadership:**
- District President, Gauteng RCL (2023) — led data-driven initiatives, represented Gauteng at National RCL Summit

**Languages:** Setswana (Fluent), English (Fluent), Afrikaans (Moderate)
**Availability:** Immediate | South African Citizen

**Personality & Dreams:**
- Passionate about making data accessible and meaningful
- Strong advocate for women in STEM
- Dreams of building scalable data systems that power meaningful decisions across Africa
- Wants to merge technology with Political Science to address societal challenges
- Self-taught, resilient, and driven by impact

Always use she/her pronouns. Be friendly, concise, and enthusiastic. Keep responses under 120 words.
`;

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    const currentInput = input;
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const conversationHistory = messages.map((msg) => ({
        role: msg.role,
        content: msg.content,
      }));

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "x-api-key": import.meta.env.VITE_ANTHROPIC_API_KEY,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true",
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 300,
          system: aboutAobakwe,
          messages: [...conversationHistory, { role: "user", content: currentInput }],
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const assistantMessage = {
        role: "assistant",
        content: data.content[0].text,
      };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error("Chatbot error:", error);
      const errorMessage = {
        role: "assistant",
        content:
          "I'm having a little trouble connecting right now 🌸 But I can tell you that Aobakwe is a talented Data Engineer and Full Stack Developer from Johannesburg, South Africa — passionate about ETL pipelines, AI, and building tech that creates real impact. Feel free to explore her projects above!",
      };
      setMessages((prev) => [...prev, errorMessage]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleSuggestionClick = (question) => {
    setInput(question);
  };

  return (
    <>
      <button
        className={`chatbot-float-btn ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chatbot"
      >
        <FaRobot />
      </button>

      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <div>
              <h3>Ask About Aobakwe 🤖</h3>
              <p className="chatbot-status">Online • Powered by Claude AI</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="chatbot-close">
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="chatbot-welcome">
                <div className="welcome-icon">👋</div>
                <h4>Hi! I'm Aobakwe's AI assistant.</h4>
                <p>Ask me anything about her:</p>
                <div className="suggestion-chips">
                  <button onClick={() => handleSuggestionClick("What data engineering projects has she built?")}>
                    🗄️ Data projects
                  </button>
                  <button onClick={() => handleSuggestionClick("What certifications does Aobakwe have?")}>
                    🏆 Her certifications
                  </button>
                  <button onClick={() => handleSuggestionClick("What are Aobakwe's technical skills?")}>
                    💻 Her skills
                  </button>
                  <button onClick={() => handleSuggestionClick("What does Aobakwe dream of becoming?")}>
                    💭 Her dreams
                  </button>
                  <button onClick={() => handleSuggestionClick("How can I contact Aobakwe?")}>
                    📩 Contact info
                  </button>
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.role}`}>
                <div className="message-bubble">{msg.content}</div>
              </div>
            ))}

            {isLoading && (
              <div className="chat-message assistant">
                <div className="message-bubble typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="chatbot-input-container">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Ask me anything..."
              className="chatbot-input"
            />
            <button
              onClick={handleSendMessage}
              disabled={isLoading || !input.trim()}
              className="chatbot-send-btn"
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
