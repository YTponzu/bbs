async function getThreadNameById(threadId) {
  let offset = 0;
  while (true) {
    const response = await fetch(`https://railway.bulletinboard.techtrain.dev/threads?offset=${offset}`);
    
    if (!response.ok) throw new Error("Failed to load threads");
    
    const threads = await response.json();
    for (const thread of threads) {
      if (thread.id === threadId) {
        return thread.title;
      }
    }

    if (threads.length < 10) break;
    offset += 10;
  }
  return "Unknown thread";
}

export default getThreadNameById;