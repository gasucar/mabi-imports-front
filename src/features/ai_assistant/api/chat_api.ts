export type ChatResponse = {
  response: string;
};

export const sendChatMessage = async (message: string): Promise<ChatResponse> => {

  const res = await fetch(`${import.meta.env.VITE_API_URL}/ai/chat`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      message,
    }),
  });

  if (!res.ok) {
    throw new Error("Chat API failed");
  }

  return res.json();
};