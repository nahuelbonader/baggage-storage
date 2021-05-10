import { Descriptions } from "antd";

const Profile = ({ name, flight_code }) => {
  return (
    <Descriptions
      title="Passenger Info"
      style={{
        marginBottom: "5vh",
        padding: "20px",
        backgroundColor: "rgba(128, 128, 128, 0.040)",
      }}
    >
      <Descriptions.Item label="Passenger Name" st>
        {name}
      </Descriptions.Item>
      <Descriptions.Item label="Flight Code">{flight_code}</Descriptions.Item>
    </Descriptions>
  );
};

export default Profile;
