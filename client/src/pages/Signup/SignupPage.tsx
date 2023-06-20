import { Link, useNavigate } from "react-router-dom";
import { signup } from "../../api/auth";
import IUser from "../../interfaces/auth";
import { Button, Form, Input, Typography, message, notification } from "antd";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";

const SignupPage = () => {
  const navigate = useNavigate();
  const [form] = Form.useForm();

  const onFinish = async (values: IUser) => {
    try {
      await signup(values);
      message.success("Đăng ký thành công!");
      navigate("/signin");
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
    } catch ({ response }: any) {
      notification.error({
        message: response.data.message,
      });
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const validateConfirmPassword = (_: any, value: string) => {
    const password = form.getFieldValue("password");

    if (value && value !== password) {
      return Promise.reject(new Error("Password không khớp!"));
    }
    return Promise.resolve();
  };

  return (
    <Form
      name="basic"
      form={form}
      style={{ maxWidth: 350, margin: "0 auto", marginTop: 100 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      autoComplete="off"
    >
      <Typography.Title level={2}>Đăng ký</Typography.Title>
      <Form.Item
        name="name"
        rules={[{ required: true, message: "Vui lòng nhập UserName!" }]}
      >
        <Input size="large" prefix={<UserOutlined />} placeholder="UserName" />
      </Form.Item>
      <Form.Item
        name="email"
        rules={[{ required: true, message: "Vui lòng nhập Email!" }]}
      >
        <Input
          type="email"
          size="large"
          prefix={<MailOutlined />}
          placeholder="Email"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Vui lòng nhập Password!" }]}
      >
        <Input.Password
          size="large"
          prefix={<LockOutlined />}
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirmPassword"
        dependencies={["password"]}
        rules={[
          { required: true, message: "Vui lòng nhập Confirm Password!" },
          {
            validator: validateConfirmPassword,
          },
        ]}
      >
        <Input.Password
          size="large"
          prefix={<LockOutlined />}
          placeholder="Confirm Password"
        />
      </Form.Item>

      <Form.Item>
        <Button
          size="large"
          // type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: "100%" }}
        >
          Đăng ký
        </Button>
        <Link to={"/signin"}>Signin!</Link>
      </Form.Item>
    </Form>
  );
};

export default SignupPage;
