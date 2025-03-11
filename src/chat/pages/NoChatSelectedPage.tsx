export const NoChatSelectedPage = () => {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="text-center">
        <h1 className="text-2xl font-bold">No chat selected</h1>
        <p className="text-muted-foreground">Select a chat from the sidebar</p>
      </div>
    </div>
  );
};

export default NoChatSelectedPage;
