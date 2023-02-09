import React from "react";
import "./chart.css";
import lessons from "./lessons.json";
import Item from "./item/item";
const Chart = () => {
  return (
    <>
      {/* <header className="d-flex justify-content-between align-items-center w-100 p-3">
        <div className="h5">
          <img
            src={require("../assets/icons/setting.png")}
            width="50px"
            height="50px"
          />
        </div>
        <div className="h5">{lessons.SID}</div>
      </header> */}
      <div className="p-3 d-flex align-items-center justify-content-center text-nowrap">
        <main className="">
          <h5 className="text-center p-4">
            دانشگاه آزاد شیراز نمودار همنیاز ، پیشنیاز و برنامه پیشنهادی ترمی
            دروس مهندسی کامپیوتر ورودی 94 و مابعد (گرایش نرم افزار)
          </h5>
          {lessons.data.map((element, elementIndex) => {
            return (
              <ul
                className={`justify-content-center ${element.rowClass}`}
                key={`row-${elementIndex}`}
              >
                {element.list.map((item, itemIndex) => {
                  return (
                    <Item
                      content={item.content}
                      secondContent={item.secondContent || item.secondContent}
                      containerClass={
                        item.containerClass || item.containerClass
                      }
                      unit={item.unit}
                      unitClass={item.unitClass || item.unitClass}
                      itemKey={`item-${itemIndex}`}
                      relation={item.relation && item.relation}
                    />
                  );
                })}
              </ul>
            );
          })}
        </main>
      </div>
    </>
  );
};
export default Chart;
