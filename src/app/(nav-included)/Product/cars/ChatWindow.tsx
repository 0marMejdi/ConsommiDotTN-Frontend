import { useRouter } from 'next/router';
import { Button } from '@/components/ui/button';

const ChatWindow = ( {id } : any) => {

  const handleButtonClick = () => {
    fetch("http://localhost:3000/conversation/"+id,
    {
      headers :
      {
        Authorization : `Bearer ${localStorage.getItem('token')}`
      }
    }
    )
    .then((response) => response.json())
    window.location.href="/Chat"
  };

  return (
    <Button onClick={handleButtonClick}>
      Chat with Owner
    </Button>
  );
};

export default ChatWindow;
