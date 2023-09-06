import React, { useState } from "react";
import axios from "axios";

function Poto() {
  const [messages, setMessages] = useState([]);
  const [value, setValue] = useState("");

  const sendMessage = async () => {
    const options = {
      method: "POST",
      data: {
        message: value,
      },
      headers: {
        "Content-Type": "application/json",
      },
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/gepeto",
        options
      );
      const data = await response.data;
      const receivedMessage = data.choices[0].message.content;

      // First, add the user's message
      setMessages((prevMessages) => [
        ...prevMessages,
        { text: value, sender: "user" },
      ]);

      // Then, add the bot's response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: receivedMessage, sender: "bot" },
        ]);
      }, 1000); // Delay bot's response by 1 second (adjust as needed)

      setValue("");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className=" m-2 text-center text-neutral font-bold text-xl">
        Welcome to Gepptto, WCS AI{" "}
      </h1>
      {messages.map((message, index) => (
        <div
          key={index} /* eslint-disable-line react/no-array-index-key */
          className={`chat ${
            message.sender === "user" ? "chat-end text-base-100" : "chat-start"
          }`}
        >
          <div
            className={`chat-bubble ${
              message.sender === "user" ? "" : "bg-primary"
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
      <div className="absolute bottom-0 right-0 p-4 flex items-center w-fit">
        <textarea
          type="text"
          name="message"
          id="message-send"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="w-[220px] h-24 border bg-neutral text-base-100 rounded-lg p-2 sm:w-[350px]  "
        />
        <button type="button" className="m-1 mt-4" onClick={sendMessage}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100"
            height="100"
            viewBox="0 0 100 100"
            fill="none"
          >
            <circle
              cx="50"
              cy="50"
              r="48.5"
              fill="#2B529B"
              stroke="#A9ACBE"
              strokeWidth="3"
            />
            <path
              d="M67.5002 38.3333L29.5835 51.4583L42.7085 55.8333M67.5002 38.3333L42.7085 55.8333M67.5002 38.3333L55.8335 68.9583L42.7085 55.8333"
              stroke="#E5B01E"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M50.0002 79.1667C66.1089 79.1667 79.1668 66.1088 79.1668 50C79.1668 33.8913 66.1089 20.8333 50.0002 20.8333C33.8914 20.8333 20.8335 33.8913 20.8335 50C20.8335 66.1088 33.8914 79.1667 50.0002 79.1667Z"
              stroke="#E5B01E"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          ;
        </button>
      </div>
    </div>
  );
}

export default Poto;
