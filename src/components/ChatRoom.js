import MessageDetails from "./MessageDetails"
const ChatRoom = ({messages, deleteMessage, createMessage, setNewMsg, newMsg}) => {
    return (
        <> 
          <div className="ui raised very padded text container segment">
            <div className="ui comments">
              <h3 className="ui dividing header">Super Chat</h3>
              {messages && messages.map(msg => 
                <MessageDetails 
                  key={msg.id} 
                  msg={msg} 
                  deleteMessage={deleteMessage}
                  />)}
            </div>
    
            <form className="ui reply form">
              <div className="field">
            <input 
              placeholder='Chat Text...' 
              value={newMsg}
              onChange={(event) => setNewMsg(event.target.value)}/>
            <div onClick={ createMessage } className="ui blue labeled submit icon button">
              <i className="icon edit"></i> Add Chat
            </div>
            </div>
          </form>
    
          </div>
        </>
      )
}

export default ChatRoom