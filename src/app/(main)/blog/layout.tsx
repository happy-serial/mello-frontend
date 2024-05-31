// TODO: 나중에 사이드바라던가 넣어야 함.
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main
      style={{
        width: "100%",
        display: "flex",
        paddingBottom: "12px",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        style={{
          width: "1062px",
          paddingTop: "60px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {children}
      </div>
    </main>
  );
}
