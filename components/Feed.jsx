"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCardAnon";


const Feed = () => {
  const [allPosts, setAllPosts] = useState([]);

  const fetchPosts = async () => {
    const response = await fetch("/api/prompt");
    const data = await response.json();

    setAllPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <section className='feed'>
      {/* All Prompts */}
        <PromptCardList data={allPosts}/>
    </section>
  );
};

const PromptCardList = ({ data }) => {
  return (
    <div className='mt-2 prompt_layout'>
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
        />
      ))}
    </div>
  );
};

export default Feed;