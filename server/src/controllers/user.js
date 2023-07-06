import User from "../models/user.js";

export const getUserProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user._id);

    if (!user) {
      return res
        .status(404)
        .json({ message: "Không tìm thấy thông tin người dùng" });
    }

    return res
      .status(200)
      .json({ message: "Lấy thông tin người dùng thành công!", user });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Lỗi server", error: error.message });
  }
};
export const updateUserProfile = async (req, res) => {
  try {
    const userId = req.user._id;
    const userData = req.body;

    const updatedUser = await User.findByIdAndUpdate(userId, userData, {
      new: true,
    });

    return res.status(200).json({
      message: "Cập nhật thông tin người dùng thành công!",
      updatedUser,
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Cập nhật tài khoản thất bại!", error: error.message });
  }
};
