/* eslint-disable @typescript-eslint/no-explicit-any */
import { LoadingOutlined, UploadOutlined } from "@ant-design/icons";
import {
  Button,
  Form,
  Input,
  InputNumber,
  Select,
  Spin,
  Typography,
  Upload,
  UploadProps,
  message,
} from "antd";
import { useParams } from "react-router-dom";
import ICategory from "../../../interfaces/category";
import IProduct from "../../../interfaces/product";

const { Dragger } = Upload;
interface IUpdateProductPage {
  products: IProduct[];
  categories: ICategory[];
  onHandleUpdate: (product: IProduct) => void;
}

const UpdateProductPage = ({
  products,
  categories,
  onHandleUpdate,
}: IUpdateProductPage) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  if (!products) {
    <Spin indicator={antIcon} />;
  }

  const { id } = useParams();
  const product = products?.find((product) => product._id === id);
  const [form] = Form.useForm();

  form.setFieldsValue({
    _id: product?._id,
    name: product?.name,
    price: product?.price,
    image: product?.image,
    album: product?.album,
    quantity: product?.quantity,
    description: product?.description,
    categoryId: product?.categoryId,
  });

  const selectOptions = categories?.map((cate) => {
    return { label: `${cate.name}`, value: `${cate._id}` };
  });

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  const validateMessages = {
    required: "${label} is required!",
  };

  const onFinish = (values: any) => {
    let newImages;
    let newAlbum;
    let check = false;

    if (!values?.image?.url) {
      check = true;
      newImages = values?.image?.fileList?.map(({ response }: any) => {
        return {
          url: response.urls[0].url,
          publicId: response.urls[0].publicId,
        };
      });
    } else {
      newImages = [{ url: values.image.url, publicId: values.image.publicId }];
    }
    if (values?.album.file) {
      check = true;
      newAlbum = values.album.fileList.map(({ response }: any) => {
        return {
          url: response.urls[0].url,
          publicId: response.urls[0].publicId,
        };
      });
    } else {
      newAlbum = values.album;
    }

    const newValues = check
      ? { ...values, image: newImages[0], album: newAlbum }
      : {
          ...values,
          image: { url: values.image.url, publicId: values.image.publicId },
        };

    onHandleUpdate(newValues);
  };

  const props2: UploadProps = {
    listType: "picture",
    name: "image",
    multiple: true,
    action: "https://coza-store-be.vercel.app/api/images/upload",
    onChange(info) {
      const { status } = info.file;
      if (status !== "uploading") {
        console.log(info.file, info.fileList);
      }
      if (status === "done") {
        message.success(`${info.file.name} file uploaded successfully.`);
      } else if (status === "error") {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
    onDrop(e) {
      console.log("Dropped files", e.dataTransfer.files);
    },
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
      <Typography.Title level={2}>Sửa sản phẩm</Typography.Title>
      <Form.Item name="_id" style={{ display: "none" }}>
        <Input size="large" />
      </Form.Item>

      <Form.Item name="name" label="Name" rules={[{ required: true }]}>
        <Input size="large" placeholder="Product Name" />
      </Form.Item>

      <Form.Item
        name="price"
        label="Price"
        rules={[{ required: true, type: "number", min: 0 }]}
      >
        <InputNumber
          size="large"
          placeholder="Product Price"
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item name="image" label="Image" rules={[{ required: true }]}>
        <Dragger
          name="image"
          action="http://localhost:8080/api/images/upload"
          listType="picture"
        >
          <Button icon={<UploadOutlined />}>Upload Image</Button>
        </Dragger>
      </Form.Item>

      <Form.Item name="album" label="Album" rules={[{ required: true }]}>
        <Dragger {...props2}>
          <Button icon={<UploadOutlined />}>Upload Album</Button>
        </Dragger>
      </Form.Item>

      <Form.Item
        name="quantity"
        label="Quantity"
        rules={[{ required: true, type: "number", min: 0 }]}
      >
        <InputNumber
          size="large"
          placeholder="Product Quantity"
          style={{ width: "100%" }}
        />
      </Form.Item>

      <Form.Item
        name="description"
        label="Description"
        rules={[{ required: true }]}
      >
        <Input.TextArea rows={4} placeholder="Description" />
      </Form.Item>

      <Form.Item
        name="categoryId"
        label="Category"
        rules={[{ required: true }]}
      >
        <Select
          size="large"
          placeholder="---- Category ----"
          options={selectOptions}
        />
      </Form.Item>

      <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
        <Button size="large" type="primary" htmlType="submit">
          Sửa sản phẩm
        </Button>
      </Form.Item>
    </Form>
  );
};

export default UpdateProductPage;
