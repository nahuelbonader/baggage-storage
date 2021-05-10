import { createPackage } from "../config/api/axios.requests";

import { useEffect, useState } from "react";
import { Modal, Button, Select, Input } from "antd";
const { Option } = Select;

const AddPackage = ({ passenger, setPassenger }) => {
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("");
  const [category, setCategory] = useState("clothing");
  const [description, setDescription] = useState("");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    setModalText(`Saving ${passenger.name}'s package`);

    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 1000);

    createPackage({ passengerId: passenger.id, category, description })
      .then((newPackage) => {
        setConfirmLoading(true);
        setPassenger({
          ...passenger,
          packages: [...passenger.packages, newPackage],
        });
        setDescription("");
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleChange = (value) => {
    setCategory(value);
  };

  useEffect(() => {
    setModalText(`Passenger: ${passenger.name}`);
  }, [passenger.name]);

  return (
    <>
      <Button
        type="primary"
        onClick={showModal}
        disabled={passenger.id == null || passenger.packages.length >= 3}
      >
        Add Package
      </Button>
      <Modal
        title="Add New Package"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
        <Select
          defaultValue="Clothing"
          style={{ width: 120, margin: "5px" }}
          onChange={handleChange}
        >
          <Option value="clothing">Clothing</Option>
          <Option value="small">Small</Option>
          <Option value="big">Big</Option>
        </Select>
        <Input
          placeholder="Description"
          maxLength={30}
          style={{ margin: "5px" }}
          onChange={(e) => {
            setDescription(e.target.value);
          }}
          type="text"
          value={description}
        />
      </Modal>
    </>
  );
};

export default AddPackage;
