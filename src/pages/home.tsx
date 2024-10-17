import React, { useEffect } from "react";
import InputThread from "../components/input-thread";
import { useAppDispatch, useAppSelector } from "../stores";
import { getFeed } from "../stores/thread/async";
import ThreadCard from "@/components/thread-card";
const Home: React.FC = () => {
   const dispatch = useAppDispatch();
   const { threads, loading } = useAppSelector((state) => state.thread);
   const [take, setTake] = React.useState(10);

   const handleLoadMore = () => {
      setTake(take + 10);
   };

   useEffect(() => {
      dispatch(getFeed(take));
   }, [take]);

   return (
      <div>
         <InputThread />
         {threads?.map((thread) => (
            <ThreadCard key={thread.id} thread={thread} />
            // <p>{thread.content}</p>
         ))}
         {loading && <p>Loading...</p>}

         <button onClick={handleLoadMore}>Load More</button>
      </div>
   );
};

export default React.memo(Home);
