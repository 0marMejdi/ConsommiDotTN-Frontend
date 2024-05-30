import { UserNavChat } from '@/components/UserNavChat'
import { Avatar } from '@/components/ui/avatar'
import React from 'react'

const ChatWindow = (props : {handleChatButtonClick : () => void, showChat : boolean}) => {
  return (
    
    <Avatar onClick={props.handleChatButtonClick}>
            {props.showChat && <UserNavChat />}
          </Avatar>
  )
}

export default ChatWindow