import express from "express";
import http from 'http'
import socket from "socket.io";

const app = express()
const server = http.createServer(app)
const io = socket(server)

