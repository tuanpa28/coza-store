import ICategory from "../../../interfaces/category";
import { message } from "antd";
import { Button, Form, Input, Typography } from "antd";
import { useDispatch } from "react-redux";
import { hendleCreateCategory } from "../../../features/categorySlice";
import { useNavigate } from "react-router-dom";

const AddCategoryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = (values: ICategory) => {
    dispatch(hendleCreateCategory(values));
    message.success(`Thêm danh mục thành công!`);
    navigate("/admin/category");
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 800 }}
      validateMessages={validateMessages}
    >
      <Typography.Title level={2}>Thêm danh mục</Typography.Title>
      <Form.Item
        name="name"
        label="Category Name"
        rules={[
          { required: true },
          { whitespace: true, message: "${label} is required!" },
        ]}
      >
        <Input size="large" placeholder="Category Name" />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button size="large" htmlType="submit">
          Thêm danh mục
        </Button>
      </Form.Item>
    </Form>
  );
};

export default AddCategoryPage;
