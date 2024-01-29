export function Button({ children, handle, el, buttonState }) {
  //Initializing State}
  //Declaring handlers
  //Return JSX
  return (
    <>
      <button className="btn" onClick={() => handle(el)} disabled={buttonState}>
        {children}
      </button>
    </>
  );
}
