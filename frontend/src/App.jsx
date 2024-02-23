import React, { useEffect, useRef, useState } from 'react'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import TextField from '@material-ui/core/TextField'
import AssigmentIcon from '@material-ui/icons/Assessment'
import PhoneIcon from '@material-ui/icons/Phone'
import { CopyToClipBoard } from 'react-copy-to-clipboard'
import Peer from 'simple-peer'
import io from 'socket.io-client'
import './App.css'

const socket = io.connect("http://localhost:4863")

export default function App() {


  const [me, setMe] = useState("")
  const [stream, setStream] = useState()
  const [receivingCall, setReceivingCall] = useState(false)
  const [caller, setCaller] = useState("")
  const [callerSignal, setCallerSignal] = useState()
  const [callAccepted, setCallAccepted] = useState(false)
  const [idToCall, setIdToCall] = useState("")
  const [callEnded, setCallEnded] = useState(false)
  const [name, setName] = useState("")


  return (
    <>
      <div className="App">

      </div>
    </>
  )
}
