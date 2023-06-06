import instance from "./config";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const uploadImages = (images: any) => {
  return instance.post(`images/upload`, images);
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const updateImages = (images: any) => {
  return instance.put(`images/${images._id}`, images);
};

const deleteImages = (id: string) => {
  return instance.delete(`images/${id}`);
};

export { uploadImages, updateImages, deleteImages };
