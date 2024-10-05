import { Link } from "react-router-dom"
import CallToAction from '../components/CallToAction'
import { useEffect, useState } from "react";
import PostCard from '../components/PostCard'
const Home = () => {

  const [posts,setPosts]=useState([]);

  useEffect(()=>{
      const fetchPosts = async ()=>{
        const res = await fetch('/api/post/getPosts');
        const data = await res.json();
        setPosts(data.posts);
      }
      fetchPosts();
  },[])
  return (
    <div>
      <div className="flex flex-col gap-6 lg:p-28 px-3 max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold lg:text-6xl">Welcome to my Blog</h1>
        <p className="text-gray-500 text-xs sm:text-sm">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime repudiandae recusandae, adipisci dignissimos molestiae asperiores temporibus saepe? Velit, illum provident tempora modi id, inventore blanditiis magnam consectetur, in tempore sequi.
        </p>
      <Link to={'/search'} className="text-xs sm:text-sm text-teal-500 font-bold hover:underline">
        View all Posts

      </Link>
      </div>


      <div className="p-3 bg-amber-100 dark:bg-slate-700 mx-auto " style={{width:"50%"}}>
        <div className="flex flex-row justify-center items-center  align-middle mx-auto">

            <CallToAction />
        </div>
      </div>

      <div className="max-w-6xl mx-auto p-3 flex flex-col gap-8 py-7">

        {
          posts && posts.length > 0 && (
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl text-center font-semibold"> Recent Posts</h2>

              <div className="flex flex-wrap gap-4">
                  {posts.map((post)=>(
                    <PostCard key={post._id} post={post}/>
                  )
                  )
                }
              </div>

              <Link to={'/search'} className="text-lg text-teal-500 hover:underline text-center">
                  View all posts
              </Link>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Home