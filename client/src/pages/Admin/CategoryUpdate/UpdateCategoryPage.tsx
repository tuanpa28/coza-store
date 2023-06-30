import ICategory from "../../../interfaces/category";
import { LoadingOutlined } from "@ant-design/icons";
import { Button, Form, Input, Spin, Typography, message } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../../../app/store";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  getAllCategory,
  hendleUpdateCategory,
} from "../../../features/categorySlice";

const UpdateCategoryPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const categories = useSelector(
    (state: RootState) => state.category.categories
  );

  useEffect(() => {
    dispatch(getAllCategory());
  }, [dispatch]);

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  if (!categories) {
    <Spin indicator={antIcon} />;
  }

  const { id } = useParams();
  const category = categories?.find(
    (category: ICategory) => category._id === id
  );
  const [form] = Form.useForm();

  form.setFieldsValue({
    _id: category?._id,
    name: category?.name,
  });

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = (values: ICategory) => {
    dispatch(hendleUpdateCategory(values));
    message.success(`Sửa danh mục thành công!`);
    navigate("/admin/category");
  };

  return (
    <Form
      form={form}
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      style={{ maxWidth: 800 }}
      validateMessages={validateMessages}
    >
      <Typography.Title level={2}>Sửa danh mục</Typography.Title>
      <Form.Item name="_id" style={{ display: "none" }}>
        <Input size="large" />
      </Form.Item>

      <Form.Item name="name" label="Category Name" rules={[{ required: true }]}>
        <Input size="large" placeholder="Category Name" />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button size="large" type="primary" htmlType="submit">
          Sửa danh mục
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateCategoryPage;
