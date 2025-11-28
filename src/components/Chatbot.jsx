import React, { useState } from "react";
import { FaRobot, FaTimes } from "react-icons/fa";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const aboutAobakwe = `
You are a friendly chatbot assistant on Aobakwe Modillane's portfolio website. Answer questions about Aobakwe based on this information:

**About Aobakwe:**
- Full Name: Aobakwe Modillane
- Pronouns: She/Her
- From: South Africa
- Current Role: Full Stack Developer & Designer
- Dreams: Aobakwe dreams of becoming a leading software engineer who creates innovative solutions that make a positive impact on people's lives. She aspires to work on cutting-edge AI and web technologies, and eventually start her own tech company.

**Hobbies:**
- Coding and building web applications
- Learning new programming languages and frameworks
- Reading about technology and innovation
- Playing video games
- Photography
- Exploring data science and AI

**Fun Facts:**
- Created multiple projects including MuseMinds (AI poem generator), MuseCareers (CV enhancement tool), and MuseMotion (data analysis app)
- Passionate about combining creativity with technology
- Loves experimenting with new tech stacks
- Active on GitHub and constantly learning
- Enjoys building projects that solve real-world problems
- Strong advocate for women in tech

**Skills:**
HTML, CSS, JavaScript, React, Node.js, Express, MongoDB, Git, Python, SQL

**Contact:**
- Email: aobakwemodillane27@gmail.com
- GitHub: github.com/Aobakwe2025
- Instagram: @oky_abk

Always use she/her pronouns when referring to Aobakwe. Be friendly, concise, and enthusiastic when answering questions! Keep responses under 100 words.
`;

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const userMessage = { role: "user", content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput("");
    setIsLoading(true);

    try {
      const conversationHistory = messages.map(msg => ({
        role: msg.role,
        content: msg.content
      }));

      const response = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "anthropic-version": "2023-06-01"
        },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 500,
          system: aboutAobakwe,
          messages: [...conversationHistory, { role: "user", content: input }],
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
        content: "I'm having trouble connecting right now. But I can tell you that Aobakwe is a talented Full Stack Developer from South Africa who dreams of becoming a leading software engineer. She's passionate about AI, web technologies, and creating innovative solutions. Feel free to ask me more specific questions!",
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
      {/* Floating Chat Button */}
      <button
        className={`chatbot-float-btn ${isOpen ? "hidden" : ""}`}
        onClick={() => setIsOpen(true)}
        aria-label="Open chatbot"
      >
        <FaRobot />
      </button>

      {/* Chat Window */}
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <div>
              <h3>Ask About Aobakwe 🤖</h3>
              <p className="chatbot-status">Online • Powered by AI</p>
            </div>
            <button onClick={() => setIsOpen(false)} className="chatbot-close">
              <FaTimes />
            </button>
          </div>

          <div className="chatbot-messages">
            {messages.length === 0 && (
              <div className="chatbot-welcome">
                <div className="welcome-icon">👋</div>
                <h4>Hi there! I'm Aobakwe's AI assistant.</h4>
                <p>Ask me anything about her:</p>
                <div className="suggestion-chips">
                  <button onClick={() => handleSuggestionClick("What does Aobakwe dream of becoming?")}>
                    💭 Her dreams
                  </button>
                  <button onClick={() => handleSuggestionClick("What are Aobakwe's hobbies?")}>
                    🎨 Her hobbies
                  </button>
                  <button onClick={() => handleSuggestionClick("Tell me fun facts about Aobakwe")}>
                    ⚡ Fun facts
                  </button>
                  <button onClick={() => handleSuggestionClick("Where is Aobakwe from?")}>
                    📍 Her location
                  </button>
                  <button onClick={() => handleSuggestionClick("What are Aobakwe's skills?")}>
                    💻 Her skills
                  </button>
                </div>
              </div>
            )}

            {messages.map((msg, idx) => (
              <div key={idx} className={`chat-message ${msg.role}`}>
                <div className="message-bubble">
                  {msg.content}
                </div>
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