import Bill from "../models/bill.js";

// Get All Bill
export const getBills = async (req, res) => {
  try {
    const bills = await Bill.find({})
      .populate("products.productId")
      .populate("userId");

    if (!bills || bills.length === 0) {
      return res.status(400).json({ message: "Không có hóa đơn!" });
    }

    return res
      .status(200)
      .json({ message: "Lấy danh sách bill thành công!", bills });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Get All Bill By User
export const getUserBills = async (req, res) => {
  const { userId } = req.params;
  try {
    const bills = await Bill.find({ userId })
      .populate("products.productId")
      .populate("userId");

    if (!bills || bills.length === 0) {
      return res.status(400).json({ message: "Không có hóa đơn!" });
    }

    return res
      .status(200)
      .json({ message: "Lấy danh sách bill user thành công!", bills });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Get One Bill
export const getBill = async (req, res) => {
  const { billId } = req.params;
  try {
    const bill = await Bill.findById(billId)
      .populate("products.productId")
      .populate("userId");

    if (!bill) {
      return res.status(400).json({ message: "Không có hóa đơn!" });
    }

    return res.status(200).json({ message: "Lấy bill thành công!", bill });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};

// Update Status Bill
export const updateBill = async (req, res) => {
  const { billId } = req.params;
  const { status, paymentStatus } = req.body;
  try {
    // Tìm bill cần cập nhật
    const bill = await Bill.findById(billId);

    if (!bill) {
      return res.status(400).json({ message: "Không có hóa đơn!" });
    }

    if (status) {
      bill.status = status;
    }
    if (paymentStatus) {
      bill.paymentStatus = paymentStatus;
    }

    await bill.save();

    return res.status(200).json({ message: "Cập nhật bill thành công!", bill });
  } catch (error) {
    return res.status(500).json({
      message: error.message,
    });
  }
};
