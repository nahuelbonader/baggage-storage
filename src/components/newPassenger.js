import { useState } from "react";
import { useHistory } from "react-router-dom";
import { Modal, Button, Input } from "antd";
import { UserOutlined, BarcodeOutlined } from "@ant-design/icons";

import { createPassenger } from "../config/api/axios.requests";

const regex = "^(?=.*[a-zA-Z])(?=.*[0-9])[A-Za-z0-9]+$";

const NewPassenger = () => {
  const history = useHistory();
  const [visible, setVisible] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState("Information");
  const [passenger, setPassenger] = useState({ name: "", flight_code: "" });
  const [alert, setAlert] = useState("");

  const showModal = () => {
    setVisible(true);
  };

  const handleOk = () => {
    const { name, flight_code } = passenger;

    if (!name || !flight_code) return setAlert("Please enter both data");

    if (flight_code.length < 5)
      return setAlert("Flight code must have 5 digits");

    if (!flight_code.match(regex))
      return setAlert("Flight Code must be alphanumeric");

    setModalText(`Saving the passenger ${name}`);

    setTimeout(() => {
      setVisible(false);
      setConfirmLoading(false);
    }, 1000);

    createPassenger({ name, flight_code })
      .then((newPassenger) => {
        setConfirmLoading(true);
        setPassenger({ name: "", flight_code: "" });
        setModalText(`Information`);
        history.push(`/passengers/${newPassenger.id}`);
      })
      .catch((err) => console.log(err));
  };

  const handleCancel = () => {
    setVisible(false);
  };

  const handleChange = (e) => {
    if (alert.length) setAlert("");
    const { name, value } = e.target;
    setPassenger({ ...passenger, [name]: value });
  };

  return (
    <>
      <Button type="primary" onClick={showModal} style={{ width: "100%" }}>
        New Passenger
      </Button>
      <Modal
        title="Create New Passenger"
        visible={visible}
        onOk={handleOk}
        confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <p>{modalText}</p>
        <Input
          placeholder="Name"
          style={{ margin: "5px" }}
          prefix={<UserOutlined />}
          onChange={handleChange}
          type="text"
          name="name"
          value={passenger.name}
        />
        <Input
          placeholder="Flight Code"
          maxLength={5}
          style={{ margin: "5px" }}
          prefix={<BarcodeOutlined />}
          onChange={handleChange}
          type="text"
          name="flight_code"
          value={passenger.flight_code}
        />
        {alert && (
          <p style={{ color: "red", margin: "5px 0px 0px 10px" }}>{alert}</p>
        )}
      </Modal>
    </>
  );
};

export default NewPassenger;
