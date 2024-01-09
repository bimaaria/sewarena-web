"use client";

import {
  HomeOutlined,
  OrderedListOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu } from "antd";
import { useRouter } from "next/navigation";
import { useState } from "react";

const { Sider } = Layout;

export function CustomSider() {
  const items = [
    {
      key: "/",
      icon: <HomeOutlined />,
      label: "Home",
    },
    {
      key: "/orders",
      icon: <OrderedListOutlined />,
      label: "Orders",
    },
    {
      key: "/users",
      icon: <UserOutlined />,
      label: "Users",
    },
  ];

  const [collapsed, setCollapsed] = useState(false);
  const router = useRouter();

  const onClickToggleCollapsed = (value: boolean) => {
    setCollapsed(value);
  };

  const onChangeMenu = ({ key }: { key: string }) => {
    router.push(key);
  };

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={onClickToggleCollapsed}
      className="bg-cyan-800 text-white"
    >
      <div className="h-20 flex justify-center items-center">
        <h1 className="text-white text-center text-2xl">
          {collapsed ? "S" : "Sewarena"}
        </h1>
      </div>
      <Menu
        mode="vertical"
        defaultSelectedKeys={["home"]}
        items={items}
        className="bg-cyan-800 text-white h-[calc(100vh-7rem)]"
        onClick={onChangeMenu}
      />
    </Sider>
  );
}
