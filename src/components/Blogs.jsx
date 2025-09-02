import About from "../assets/About.webp";
import blog1 from "../assets/blog1.webp"
import { useState } from "react";
export default function Blogs() {
  const [selectedPost, setSelectedPost] = useState(null);
  const posts = [
    {
      id: 1,
      title: "Exploring the Mountains",
      author: "John Doe",
      date: "Feb 2, 2025",
      category: "Adventure",
      comments: 3,
      excerpt:
        "Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae...",
      content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras eu tellus in ipsum pharetra tempor. Mauris eget urna consequat, scelerisque diam ac, egestas arcu. Nam quis elit mauris. Etiam tempor massa vitae urna imperdiet rhoncus. Etiam nisi arcu, malesuada eget iaculis sit amet, lobortis nec dolor. Morbi pellentesque tellus in quam pharetra, ut euismod metus vehicula. In nulla risus, rhoncus id fermentum vel, viverra molestie mauris. Praesent vehicula lacus a arcu iaculis maximus. Nulla neque lectus, semper ut sollicitudin posuere, ultrices sed turpis. Ut eleifend molestie tempus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Mauris nisl ante, porttitor luctus pellentesque et, pulvinar non mi.`,
      image:
        blog1,
    },
  ];
  if (selectedPost) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <button
          onClick={() => setSelectedPost(null)}
          className="mb-6 bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
          style={{ fontFamily: "Jost", fontWeight: "500" }}
        >
          ← Back
        </button>

        <h1 className="text-4xl font-bold mb-3" style={{ fontFamily: "Jost", fontWeight: "500" }}>{selectedPost.title}</h1>
        <p className="text-gray-500 text-sm mb-6" style={{ fontFamily: "Jost", fontWeight: "500" }}>
          by <span className="font-medium" style={{ fontFamily: "Jost", fontWeight: "500" }}>{selectedPost.author}</span> |{" "}
          {selectedPost.date} |{" "}
          <span className="font-medium" style={{ fontFamily: "Jost", fontWeight: "500" }}>{selectedPost.category}</span> |{" "}
          {selectedPost.comments} comments
        </p>

        <img
          src={selectedPost.image}
          alt={selectedPost.title}
          className="w-full rounded-lg mb-6"
        />

        <div className="prose max-w-none text-gray-700 leading-relaxed" style={{ fontFamily: "Jost", fontWeight: "500" }}>
          {selectedPost.content}
        </div>
      </div>
    );
  }
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
      <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto p-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-52 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold mb-2" style={{ fontFamily: "Jost", fontWeight: "500" }}>{post.title}</h2>
            <p className="text-gray-500 text-sm mb-3" style={{ fontFamily: "Jost", fontWeight: "500" }}>
        by <span className="font-medium" style={{ fontFamily: "Jost", fontWeight: "500" }}>{post.author}</span> | {post.date} |{" "}
        <span className="font-medium" style={{ fontFamily: "Jost", fontWeight: "500" }}>{post.category}</span>
      </p>
            <p className="text-gray-600 text-sm mb-4" style={{ fontFamily: "Jost", fontWeight: "500" }}>{post.excerpt}</p>
            <button
              onClick={() => setSelectedPost(post)}
              style={{ fontFamily: "Jost", fontWeight: "500" }}
              className="inline-block text-blue-500 px-4 py-2 rounded-md hover:text-blue-700"
            >
              Read More
            </button>
          </div>
        </div>
      ))}
    </div>
    </div>
  );
}
