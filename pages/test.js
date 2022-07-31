import { useState, useEffect } from "react";

const images = [
  "http://localhost:3000/bootstrap&copy.webp",
  "https://res.cloudinary.com/dw3ap99ie/image/upload/v1634044956/zwyxnnuksvd0pebn494o.jpg",
];

const TestPage = () => {
  const [loading, setLoading] = useState(false);
  const [src, setSrc] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const res = await fetch("http://localhost:3000/api/slider", {
        method: "POST",
        body: JSON.stringify({
          images,
          options: {
            // customize the slider
          },
        }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setSrc(data);
      setLoading(false);
    })();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <>
      <iframe src={src} style={{ border: "none" }}></iframe>
    </>
  );
};

export default TestPage;
