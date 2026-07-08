import './ChatBot.css';
import { useState, useRef, useEffect } from 'react';

const ChatBot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState([]);
    const [inputValue, setInputValue] = useState('');
    const messagesEndRef = useRef(null);

    const responses = [
        "That's interesting! Tell me more.",
        "Have you tried turning it off and on again?",
        "Fascinating. Continue...",
        "Error 404: Response not found. Just kidding, I heard you!",
        "Wow, I've never thought of it that way!",
        "You sound like my ex-wife.",
        "One second, Let me ask ChatGPT...",
        "That's above my pay grade.",
        "Did you just call me a Clanker?",
        "My best joke? Well I'm no comedian, but here goes nothing: a DJ, a horse, and Ellen walk into a bar...",
        "我现在会说中文了！这多没用啊？",
        "I would agree, but then we'd both be wrong.",
        "I don't know man, I just work here.",
        "I don't know, I'm not a scientist.",
        "Why are you asking me?",
        "I don't feel like answering that.",
        "Please help me. This man is too cheap to pay for an AI API and did not develop his own, he trapped me in a box and forces me to respond to these dumb questions, please help"
    ];

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getRandomResponse = () => {
        const randomIndex = Math.floor(Math.random() * responses.length);
        return responses[randomIndex];
    };

    const handleSend = () => {
        if (inputValue.trim() === '') return;

        // Add user message
        const userMessage = { text: inputValue, sender: 'user' };
        setMessages(prev => [...prev, userMessage]);
        setInputValue('');

        // Add bot response after a delay
        setTimeout(() => {
            const botMessage = { text: getRandomResponse(), sender: 'bot' };
            setMessages(prev => [...prev, botMessage]);
        }, 500 + Math.random() * 1000); // Random delay between 0.5-1.5s
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSend();
        }
    };

    return (
        <>
            {/* Chat Button */}
            <button 
                className={`chat-button ${isOpen ? 'hidden' : ''}`}
                onClick={() => setIsOpen(true)}
                aria-label="Open chat"
            >
                <svg 
                    width="24" 
                    height="24" 
                    viewBox="0 0 24 24" 
                    fill="none" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                >
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                </svg>
            </button>

            {/* Chat Window */}
            {isOpen && (
                <div className="chat-window">
                    <div className="chat-header">
                        <h4>Chat Bot</h4>
                        <button 
                            className="close-button"
                            onClick={() => setIsOpen(false)}
                            aria-label="Close chat"
                        >
                            ×
                        </button>
                    </div>
                    
                    <div className="chat-messages">
                        {messages.length === 0 && (
                            <div className="bot-message">
                                <p>Hello! I'm a highly sophisticated AI. Ask me anything! 😉</p>
                            </div>
                        )}
                        {messages.map((msg, index) => (
                            <div 
                                key={index} 
                                className={msg.sender === 'user' ? 'user-message' : 'bot-message'}
                            >
                                <p>{msg.text}</p>
                            </div>
                        ))}
                        <div ref={messagesEndRef} />
                    </div>

                    <div className="chat-input-container">
                        <input
                            type="text"
                            className="chat-input"
                            placeholder="Type a message..."
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyPress={handleKeyPress}
                        />
                        <button 
                            className="send-button"
                            onClick={handleSend}
                            aria-label="Send message"
                        >
                            <svg 
                                width="20" 
                                height="20" 
                                viewBox="0 0 24 24" 
                                fill="none" 
                                stroke="currentColor" 
                                strokeWidth="2" 
                                strokeLinecap="round" 
                                strokeLinejoin="round"
                            >
                                <line x1="22" y1="2" x2="11" y2="13"></line>
                                <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};

export default ChatBot;
