"use client";

import SlideOneRow from "@/component/slide product/one row/SlideOneRow";
import TabList from "@/component/tabs/TabList";
import { useState } from "react";

const BenhTheoMua = () => {
    type Tab = {
        name: string;
        active: boolean;
    };

    const [tabs, setTabs] = useState<Tab[]>([
        {
            name: "Ngừa bệnh cảm cúm",
            active: true,
        },
        {
            name: "Ngừa ho,đau họng",
            active: false,
        },
        {
            name: "Ngừa biến cố tim mạch",
            active: false,
        },

    ]);

    const handleChangeTab = (id: number) => {
        let arr: Array<any> = [];
        tabs.map((item, idx) => {
            if (+idx === +id && item.active === true) {
                // giữ nguyên vì đã hiện rồi
                arr.push({
                    name: item.name,
                    active: true,
                });
            } else if (+idx === +id && item.active === false) {
                // thay đổi do chưa bật
                arr.push({
                    name: item.name,
                    active: true,
                });
            } else {
                arr.push(
                    // ko click thì off
                    {
                        name: item.name,
                        active: false,
                    }
                );
            }
        });
        setTabs(arr);
    };


    return (
        <div className="mt-20">
            <h2 className="text-3xl">
                <span className="font-bold">Bệnh theo mùa. </span><br></br>
                <span className="text-gray-600 font-semibold">
                    Bảo vệ sức khỏe, tăng cường đề kháng. </span>
            </h2>
            <div className="mt-5"></div>

            <TabList tabs={tabs} onTabClick={handleChangeTab} />

            <SlideOneRow />


        </div>
    );
}

export default BenhTheoMua;