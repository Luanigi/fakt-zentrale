// ShareButton.tsx
import { Button } from '@/components/ui/button';
import React from 'react';
import { FaTwitter, FaInstagram, FaShare } from "react-icons/fa";
interface ShareButtonProps {
  fact: string;
}

const ShareButton: React.FC<ShareButtonProps> = ({ fact }) => {
  const shareToTwitter = () => {
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(fact)}`;
    window.open(url, '_blank');
  };

  const shareViaWebShareAPI = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: 'Check this out!',
          text: fact,
          url: window.location.href,
        });
      } catch (error) {
        console.error('Error sharing:', error);
      }
    } else {
      alert('Web Share API is not supported in your browser.');
    }
  };

  const brd = () => {
    alert("Bruder kein plan wie das geht");
  };

  return (
    <div className="flex space-x-4">
      <Button
        onClick={shareToTwitter}
        className="px-4 py-2 mt-7 text-white rounded-full shadow-lg bg-zinc-900 hover:bg-zinc-800 hover:scale-110 transition-transform duration-300"
      >
        <FaTwitter />
      </Button>
      <button
        onClick={brd}
        className="px-4 py-2 mt-7  text-white rounded-full shadow-lg bg-zinc-900 hover:bg-zinc-800 hover:scale-110 transition-transform duration-300"
      >
        <FaInstagram />
      </button>
      <Button
        onClick={shareViaWebShareAPI}
        className="px-4 py-2 mt-7 text-white rounded-full shadow-lg bg-zinc-900 hover:bg-zinc-800 hover:scale-110 transition-transform duration-300"
      >
        <FaShare />
      </Button>
    </div>
  );
};

export default ShareButton;