// TODO: 나중에 사이드바라던가 넣어야 함.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "80%",
          maxWidth: "1800px",
          minWidth: "300px",
          padding: "16px 24px 16px 24px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          border: "1px solid #000",
        }}
      >
        {children}
      </div>
    </main>
  );
}
