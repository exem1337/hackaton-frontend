import React from 'react';
import Test from "./Test";

const Tests = () => {
   const tasks = [
      {
         id: 1,
         author: "Пупу И.Г.",
         item: 5,
         well: "Курсы по flutter",
         status: "done",
         img: "https://sportishka.com/uploads/posts/2022-04/1650580748_11-sportishka-com-p-machu-pikchu-peru-krasivo-foto-12.jpg"
      },
      {
         id: 1,
         author: "Пупу И.Г.",
         item: 5,
         well: "Курсы по flutter",
         status: "done",
         img: "https://sportishka.com/uploads/posts/2022-04/1650580748_11-sportishka-com-p-machu-pikchu-peru-krasivo-foto-12.jpg"
      },
      {
         id: 1,
         author: "Пупу И.Г.",
         item: 5,
         well: "Курсы по flutter",
         status: "done",
         img: "https://sportishka.com/uploads/posts/2022-04/1650580748_11-sportishka-com-p-machu-pikchu-peru-krasivo-foto-12.jpg"
      }
   ]

   return (
      <div className={'tests-page container'}>
         {tasks.map((task, key)=>
         <Test key={key} task={task}/>
         )}
      </div>
   );
};

export default Tests;