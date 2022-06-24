
const MessageDetails = ({msg, deleteMessage}) => {

  const {text, id, photoURL, createdAt} = msg
  const fireBaseTime = new Date(
    createdAt.seconds * 1000 + createdAt.nanoseconds / 1000000,
  );
  var options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', 
                  hour: 'numeric', minute: 'numeric' };

  return (
    <div className="comment">
        <a className="avatar" href="www"> 
        <img src={photoURL} alt="no img" />
        </a>
        <div className="content">
        <div className="text">
            {text}
        </div>
        <div className="metadata">
            <span className="date">{fireBaseTime.toLocaleDateString("en-US", options)}</span>
        </div>
        <div className="actions">
            <a onClick={() => deleteMessage(id)} className="delete">Delete</a>
        </div>
        </div>
    </div>
  )
}

export default MessageDetails