import Product from "../models/product.model.js";

export const createProduct = async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: false, message: 'Please provide all fields' });
    }

    const newProduct = new Product(product);
    try {
        await newProduct.save();
        return res.status(201).json({ success: true, data: newProduct });
    } catch (error) {
        console.log(`Error in create product: ${error.message}`);
        return res.status(500).json({ success: false, message: "Server Error" });

    }
};

export const deleteProduct = async (req, res) => {
    const { id } = req.params;
    try {
        if (!id || id === "") {
            return res.status(404).json({
                message: "Enter a valid Id",
                success: false
            })
        }
        const productID = await Product.findByIdAndDelete(id);
        if (id !== productID) {
            return res.status(404).json({
                message: "Product can't found",
                success: false
            })
        }
        return res.status(200).json({
            success: true, message: "Product deleted successfully"

        })
    } catch (error) {
        console.log(error);

    }
}