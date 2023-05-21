import React from "react";

function GridBox() {
    return (
        <div className="w-full h-full flexCenter border grid grid-cols-3 lg:grid-cols-5 bg-white text-gray-900 lg:bg-mainColor-100 lg:text-mainColor-200">
            <div className="w-24 h-24 bg-orange-700">Box1</div>
            <div className="w-24 h-24 bg-orange-50">Box2</div>
            <div className="w-24 h-24 bg-lime-800">Box3</div>
            <div className="w-24 h-24 bg-orange-500">Box4</div>
            <div className="w-24 h-24 bg-emerald-950">Box5</div>
        </div>
    );
}

export default GridBox;
