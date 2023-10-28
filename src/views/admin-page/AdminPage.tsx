import React from 'react';
import Portal from "../portal/Portal";
import BaseWrapper from "../../components/BaseWrapper";
const AdminPage = () => {

   const defPortal = [
      {
         id: 1,
         title: "РЖД ОГУ",
         nameHR: 'Пупкин К.В.',
         name: 'Основы РЖД'
      },
      {
         id: 2,
         title: "РЖД ОГУ",
         nameHR: 'Пупкин К.В.',
         name: 'Основы РЖД'
      },
      {
         id: 3,
         title: "РЖД ОГУ",
         nameHR: 'Пупкин К.В.',
         name: 'Основы РЖД'
      },
   ]
   return (
      <div className={'app-container portal--container'}>
         <h1 className={"mb-4"}>Порталы</h1>

         {defPortal.map((value, index)=>
            <Portal key={index} id={value.id} title={value.title} nameHR={value.nameHR} name={value.name}/>
         )}
      </div>
   );
};

export default AdminPage;