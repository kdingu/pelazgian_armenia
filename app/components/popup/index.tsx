type Props = {
  children?: React.ReactNode;
};

function Popup({ children }: Props) {
  return (
    <div className="fixed top-0 left-0 w-full h-full min-w-screen min-h-screen bg-black/20 z-50">
      {children}
    </div>
  );
}

export default Popup;
