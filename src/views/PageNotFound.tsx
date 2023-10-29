import React from 'react';
import {Alert} from "react-bootstrap";

const PageNotFound = () => {
   return (
      <div className={'app-container'}>
         <Alert className={'mt-5 d-flex justify-content-center'} key={'danger'} variant={'danger'}>
            <strong className={'me-1'}>Упс!</strong>Данной страницы не существует :(
         </Alert>
      </div>
   );
};

export default PageNotFound;