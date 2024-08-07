export default function ConfirmView(props) {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        background: "rgba(0, 0, 0, 0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          background: "white",
          height: 250,
          width: 600,
          margin: "auto",
          padding: "2%",
          border: "2px solid #000",
          borderRadius: "10px",
          boxShadow: "2px solid black",
        }}
      >
        <div className="cotainer">
          <h2>{props.message}</h2>
          <div
            style={{
              padding: "10%",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <button className="btn" onClick={props.onConfirm}>
              CONFIRM
            </button>
            <button className="btn" onClick={props.onCancel}>
              CANCEL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
