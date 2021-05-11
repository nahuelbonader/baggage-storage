import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import { List, Input } from "antd";
import NewPassenger from "../components/newPassenger";
import { SearchOutlined } from "@ant-design/icons";

const ListComponent = ({ passengers, fetchPassenger }) => {
  const { pathname } = useLocation();
  const arr = pathname.split("/");
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const data = passengers.filter((p) =>
    p.name.toLowerCase().match(input.toLowerCase())
  );

  useEffect(() => {
    if (input) setInput("");
  }, [passengers, fetchPassenger]);

  console.log("ITEM", arr[2]);

  return (
    <div className="listContainer">
      <Input
        placeholder="Search"
        maxLength={20}
        style={{ margin: "0px", width: "100%" }}
        prefix={<SearchOutlined />}
        onChange={handleChange}
        type="text"
        value={input}
      />
      <List
        className="list"
        size="small"
        bordered
        loadMore
        grid={{ gutter: 10, column: 1 }}
        dataSource={data}
        loading={{ spinning: passengers == null }}
        renderItem={(item) => (
          <Link
            to={`/passengers/${item.id}`}
            className={`${"listItem"} ${"selectItem"}`}
          >
            <List.Item
              onClick={() => fetchPassenger(item.id)}
              className={`${Number(arr[2]) === item.id && "selectedItem"}`}
            >
              {item.name}
            </List.Item>
          </Link>
        )}
      />
      <NewPassenger />
    </div>
  );
};

export default ListComponent;
