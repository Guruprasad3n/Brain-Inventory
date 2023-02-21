import React, { useEffect, useState } from 'react'
import { user } from "../Login/Login";
import socketIo from "socket.io-client";
import "./Chat.css";

import Message from "../Message/Message";
import ReactScrollToBottom from "react-scroll-to-bottom";
import {  useNavigate } from 'react-router-dom';

let socket;

const ENDPOINT = "http://localhost:8001";

const Chat = () => {
    const navigate = useNavigate()
    const [id, setid] = useState("");
    const [messages, setMessages] = useState([])

    const send = () => {
        const message = document.getElementById('chatInput').value;
        socket.emit('message', { message, id });
        document.getElementById('chatInput').value = "";
    }

    console.log(messages);
    useEffect(() => {
        socket = socketIo(ENDPOINT, { transports: ['websocket'] });

        socket.on('connect', () => {
            alert('Connected');
            setid(socket.id);

        })
        console.log(socket);
        socket.emit('joined', { user })

        socket.on('welcome', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('userJoined', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message);
        })

        socket.on('leave', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message)
        })

        return () => {
            socket.emit('disconnect');
            socket.off();
        }
    }, [])

    useEffect(() => {
        if(!localStorage.getItem("token")){
            navigate("/")
        }
        socket.on('sendMessage', (data) => {
            setMessages([...messages, data]);
            console.log(data.user, data.message, data.id);
        })
        return () => {
            socket.off();
        }
    }, [messages])

const handleHome=()=>[
    localStorage.removeItem("token"),
    navigate("/")
]

    return (
        <div className="chatPage">
            <div className="chatContainer">
                <div className="header">
                    <h2>Chat App</h2>
                    <a href="/"> <p style={{textDecoration:"none", padding:"0px 3px", color:"white"}} ><button onClick={handleHome} >Home</button></p>  </a>
                </div>
                <ReactScrollToBottom className="chatBox">
                    {messages.map((item, i) => <Message user={item.id === id ? '' : item.user} message={item.message} classs={item.id === id ? 'right' : 'left'} />)}
                </ReactScrollToBottom>
                <div className="inputBox">
                    <input onKeyPress={(event) => event.key === 'Enter' ? send() : null} type="text" id="chatInput" />
                    <button onClick={send} className="sendBtn">Send</button>
                </div>
            </div>

        </div>
    )
}

export default Chat
