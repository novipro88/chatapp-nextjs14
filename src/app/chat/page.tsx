"use client";

import { useEffect, useState } from "react";
import { StreamChat } from "stream-chat";
import {
  Channel,
  ChannelHeader,
  Chat,
  MessageInput,
  MessageList,
  Thread,
  Window,
} from "stream-chat-react";

const userId = "user_2ggIY5mg08pqFuDqQGb0khGG67I";

const chatClient = StreamChat.getInstance(process.env.NEXT_PUBLIC_STREAM_KEY!);

chatClient.connectUser(
  {
    id: userId,
    name: "Project Pro.",
  },
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoidXNlcl8yZ2dJWTVtZzA4cHFGdURxUUdiMGtoR0c2N0kifQ.ipVivlv3O1VDxBiCoxKjh2wkTqPoH5rdNkqVqRGUM34"
);

const channel = chatClient.channel("messaging", "channel_1", {
  name: "Channel #1",
  members: [userId],
});

export default function ChatPage() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <Chat client={chatClient}>
        <Channel channel={channel}>
          <Window>
            <ChannelHeader />
            <MessageList />
            <MessageInput />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </div>
  );
}
