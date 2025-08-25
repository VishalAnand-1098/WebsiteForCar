import About from "../assets/About.webp";
export default function Blogs() {
  return (
    <div>
      <div
        style={{
          width: "100%",
          height: "350px",
          marginBottom: "40px",
          backgroundImage: `url(${About})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
        }}
      >
        <h1
          style={{
            color: "white",
            fontSize: "3rem",
            fontWeight: "500",
            marginLeft: "40px",
            fontFamily: "Jost",
          }}
        >
          Blogs
        </h1>
        
      </div>
    </div>
  );
}
