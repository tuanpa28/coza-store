import Cookies from "js-cookie";
import { Link, Navigate } from "react-router-dom";
import React, { ReactNode, useState } from "react";
import { MenuProps } from "antd";
import {
  Breadcrumb,
  Layout,
  Menu,
  //  theme,
  message,
} from "antd";
const { Content, Footer, Sider } = Layout;
import {
  AppstoreOutlined,
  SolutionOutlined,
  PieChartOutlined,
  HomeOutlined,
  UserOutlined,
} from "@ant-design/icons";
import reactLogo from "../../../assets/react.svg";
import HeaderComponent from "../../Admin/Header/Header";

type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key?: React.Key | null,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
  } as MenuItem;
}

const items: MenuItem[] = [
  getItem(<Link to={"/admin"}>Thống kê</Link>, "sub1", <PieChartOutlined />),

  getItem("Danh mục", "sub2", <AppstoreOutlined />, [
    getItem(<Link to={"/admin/category/add"}>Thêm danh mục</Link>, "2"),
    getItem(<Link to={"/admin/category"}>Danh mục</Link>, "3"),
  ]),

  getItem("Sản phẩm", "sub3", <SolutionOutlined />, [
    getItem(<Link to={"products/add"}>Thêm sản phẩm</Link>, "4"),
    getItem(<Link to={"products"}>Sản phẩm</Link>, "5"),
  ]),
];

interface IAdminLayout {
  children: ReactNode;
}

const AdminLayout = ({ children }: IAdminLayout) => {
  const [current, setCurrent] = useState("1");
  const [collapsed, setCollapsed] = useState(false);

  const onClick: MenuProps["onClick"] = (e) => {
    setCurrent(e.key);
  };

  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            margin: 20,
            height: 40,
            textAlign: "center",
          }}
        >
          <Link to={"/admin"}>
            <img
              src={reactLogo}
              alt="React logo"
              style={{ width: "100%", maxWidth: 70 }}
            />
          </Link>
        </div>

        <Menu
          theme={"dark"}
          onClick={onClick}
          defaultOpenKeys={["sub1"]}
          selectedKeys={[current]}
          mode="inline"
          items={items}
        />
      </Sider>
      <Layout>
        <HeaderComponent />

        <Content style={{ margin: "0 16px" }}>
          <Breadcrumb
            style={{ margin: "12px 0" }}
            items={[
              {
                href: "/",
                title: <HomeOutlined />,
              },
              {
                href: "/admin",
                title: (
                  <>
                    <UserOutlined />
                    <span>Quản trị</span>
                  </>
                ),
              },
              {
                title: "Thống kê",
              },
            ]}
          />
          <main style={{ marginTop: 25 }}>
            {Cookies.get("accessToken")
              ? // <Outlet />
                children
              : (message.success(
                  "Mời bạn đăng nhập để truy cập trang quản trị!"
                ),
                (<Navigate to="/signin" replace />))}
          </main>
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Design ©2023 Created by Phạm Anh Tuấn
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AdminLayout;
