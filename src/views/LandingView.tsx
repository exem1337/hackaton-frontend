import React from "react";

const LandingView = () => {
  return (
    <div className="container">
      <div className="landing">
        <div className="landing--block">
          <h1>Возможности</h1>
          <div className="opportunities">
            Текст возможностей
          </div>
          <div>
            какой то доп текст
          </div>
        </div>
        <div className="landing--block">
          <h1>Тарифы</h1>
          <div className="tariffs">
            Текст тарифов
          </div>
          <div>
            какой то доп текст
          </div>
        </div>
        <div className="landing--block">
          <h1>Внедрение</h1>
          <div className="integration">
            Текст внедрения
          </div>
          <div>
            какой то доп текст
          </div>
        </div>
      </div>
    </div>
  )
}

export default LandingView;